---
title: Building Invoice App V2
publish_at: December 30, 2020 01:40
layout: post
tags: tech
---

Recently, I had a major update on [the invoice app I made 5 months ago](/blog/creating-an-invoice-app-with-electron-and-go).

Briefly recapping this side project, I'm creating a custom invoicing native Electron application. The users (employees) enter in the inventory items or the invoice data, which would then call a backend server written in Go, before submitting it on Firebase DB. The invoice PDF can be printed client-side on the electron app.

For the new changes, I thought I'd make a blog entry simply for my own documentation purposes. I think the problems I had are pretty open ended, and there are probably solutions I didn't quite think through so I'm all ears for suggestions.

Here's a breakdown for the newly added requirements:

1. Offline Capability (essential)
    - Rationale: The office is located in a rural geographical area. Occasionally, internet connection is unreliable. Thus, the client feels offline capabilities are a major functional requirement (more than their need to sync data online).
    - My thoughts: Removing online means getting rid of the server and DB on the cloud and store data locally. Although this reduces the technical complexity, I think it limits the potential to scale the app in the future (ie. multiple devices can use the app in parallel). Online also adds the benefit of auto-backup in case local data is accidentally erased. A hybrid (supports offline and online) would be ideal although this means a more complex logic to maintain fault tolerance.
2. Generate a PDF receipt document (essential)
    - Rationale: The invoice is essentially a quote for the client's purchased services. After we receive the payment, we want to print another type of document as a receipt for them to keep.
    - My thoughts: should be easy since it's the same logic as invoice generator. Just need to make another template.
3. Users might want to manually edit the Invoice ID (non-essential)
    - A bit of background: IDs are currently formatted as 'YYMM-[incrementing count that resets every year]' and is unique. Every time a new invoice is created, I check the last count in the DB and increment it.
    - My thoughts on a non unique id on the DB: Aside from 'a nice to have', if we were to enable hybrid (online and offline) then the invoice ID can't be unique either way since inconsistency could occur between the counter on local cache and the server. Therefore, all invoice needs another id that can be generated either locally or on the server and remain unique on the DB. Well, UUID is the perfect solution for that.
    - My thoughts on enabling manual edit: the incrementing count should be stored on local disk. Users can change them, and the count will by default increment from that number for the subsequently created items/invoice record.
4. Export all data to excel file (non-essential)
    - Wasn't a requirement. I just thought it'd be cool for local backup or accounting purposes. It's pretty easy to do (just writing csv to a file and downloading it).
5. Store customer data (essential)
    - Rationale: the user doesn't want to keep entering customer information. Ideally users can create customers and select from existing ones everytime an invoice is created.
    - Thoughts: this is easy to do since I'll be duplicating existing logic for inventory list. Need to add backend endpoints to create/remove customers.

Those 4 features pretty much covers all the new updates for this release. This is pretty much my release notes lol. BUT I did create github tags to version the previous release since that's pretty much a working version too.

Well below are some challenges/decisions I faced implementing some of the above features.

## Offline capability

![Download Demo](building-invoice-app-v2/fsm.png "=400x400")

I decided to make the app an offline/online hybrid. The most difficult part was being extra careful about fault tolerance making sure I cover all cases. There is essentially a replicated CRUD logic for offline mode and online mode, and the data is replicated in 3 places:
1. In the DB
    - Firebase Realtime DB
2. In the computer's local disk (persistent storage)
    - Electron Store
    - There are many options for persistent storage in an electron app, My main choice was [Electron Store]() or [NEDB](). NEDB supports advanced queries similar to MongoDB and SQLite, while Electron Store stores data in JSON internally and is more lightweight. Thought I was going for NEDB in the beginning but the fact that it's no longer maintained was a bit of a turn-off and was a deal-breaker for me. Electron Store was good enough for my case. 👑
3. In Redux (in-memory storage)

It might seem a bit overwhelming for our state management, Redux, to listen and mediate between DB and the local storage. But all the logic is pretty much in the redux actions. Below is a sample add-Invoice logic. There are 2 cases. If it's offline, it adds the data to local storage + the redux state. If it's online, it calls the API and on success, adds the data to local storage + the redux state.

```typescript
export const addInvoiceCall = (newInvoice: InvoiceRequest): AppThunk => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(setLoading());
    // Offline
    if (!getState().connection.connected) {
      const inv: Invoice = prepareMockPostPayload(newInvoice);
      dispatch(addInvoice(inv));
      ipcRenderer.send('invoices_add', inv, false);
      return;
    }

    // Online
    try {
      const res = await axios.post(`${config.serverProxy}/invoice`, newInvoice);
      if (res.data && res.status === 200) {
        const dateKey = res.data.Invoice.invoice_no.substring(0, 2);
        const invoiceNumber = parseInt(
        res.data.Invoice.invoice_no.split('-')[1],10);
        dispatch(addInvoice(res.data.Invoice));
        dispatch(setInvoiceNumber(dateKey, invoiceNumber + 1));
        ipcRenderer.send('invoices_add', res.data.Invoice, true);
      } else {
        throw new Error(`${res.status}: ${res}`);
      }
    } catch (e) {
      ipcRenderer.send('showError', `Gagal membuat invoice baru: ${e}`);
      dispatch(setIdle());
    }
  };
};
```

Another challenging part would then be to sync the local data to the cloud once an online connection is detected.

I think there are 4 cases to take into account:
- First load and is offline (I fetch initial data from local storage)
- First load and is online (sync offline data and fetch data from the cloud)
- Going from offline to online (sync offline data and fetch data from the cloud)
- Going from online to offline (nothing. We assume redux and local storage is up-to-date)

This logic is implemented in the code snippet below.

```typescript
…
export const startListening = (): AppThunk => {
  return (dispatch: any) => {
    database.ref('.info/connected').on('value', (snap) => {
      if (snap.val() === true) {
        // sync dirty cache when it comes back up
        dispatch(syncInvoices());
        dispatch(syncItems());
        // Internet Connected
        dispatch(setConnected());
        dispatch(startListeningInvoices());
        dispatch(startListeningItems());
      } else {
        // Internet Disconnected
        dispatch(setDisconnected());
        dispatch(stopListeningInvoices());
        dispatch(stopListeningItems());
      }
    });
  };
};
export const getIsConnected = (state: RootState) => state.connection.connected;
```

And yes, every data stored in the local storage has an extra metadata like 'markedToDelete' and 'isSaved' as a flag so during the sync process I can identify which data is dirty (ie. Which data needs to be deleted, added, or updated in the Cloud DB). Here is what the syncing looks like:

```typescript
/*
* Clean up dirty (added/updated/deleted) data in local electron-store
*/
export const syncDirtyData = (): AppThunk => {
  return async () => {
    // check if synced
    const isSynced = await ipcRenderer.invoke('invoices_getIsSynced');
    if (isSynced) return;
    // pull unsynced changes to delete/add
    const { toDelete, toAdd }: UnsavedChanges = await ipcRenderer.invoke(
      'invoices_getUnsavedChanges'
    );
    // try to delete all the marked invoices
    try {
      await Promise.all(
        toDelete.map(async (id) => {
          const { data } = await axios.delete(`${config.serverProxy}/invoice/${id}`);
          if (data.Success) {
            ipcRenderer.send('invoices_delete', id, true);
          }
        })
      );
    } catch (e) {
      ipcRenderer.send('showError', 'Syncing Error! (delete)');
    }
    // try to add all the marked invoices
    try {
      await Promise.all(
        toAdd.map(async (invoice: Invoice) => {
          const res = await axios.put(
            `${config.serverProxy}/invoice/${invoice.id}`,
            invoice
          );
          if (res.data && res.status === 200) {
            ipcRenderer.send('invoices_add', res.data.Invoice, true);
          }
        })
      );
    } catch (e) {
      ipcRenderer.send('showError', 'Syncing Error! (put)');
    }
    // set synced
    ipcRenderer.send('invoices_setSynced');
  };
};
```

Overall it does seem like a bit of an overkill to write the data on multiple places every time. But I can't think of a better solution since replication is inevitable to maintain fault tolerance.

## Mocking a utility function in Go Test
Generating uuid in the server is straight-forward. But I had some troubles mocking it for testing. Say I test the POST /invoice service. I somehow need to know deterministically what the output of the service call is (including the generated UUID!). Since that's impossible, the only way is to mock that utility.
As I mentioned in a few of my earlier posts, I'm pretty new to Golang so figuring this out took a while…
A possible solution is using a mocking framework like [testify/mock](). Seems I can only mock the entire service object (can't just mock a function). On top of that, the function is an externally imported package! I'm sure I can somehow wrap the generateUUID() as it's own service or something, but it seems like a complete overkill…

Then I came across a very painlessly pretty method ✨ without any library. Probably one of my favorite Go code.
[[Source1](https://stackoverflow.com/questions/42952191/is-it-possible-to-mock-a-function-imported-from-a-package-in-golang)] [[Source2](https://stackoverflow.com/questions/51428617/how-do-i-mock-a-function-from-another-package-without-using-dependency-injection)]

Basically, I can define the utility function (generateUUID()) as a global variable. Since in Go, the scope is shared through the entire package, I can access this global variable that our service is referring to from the test file. Now when running the test, we manually replace this global variable with a mock (one that returns a deterministic id). Once we're done with the test, we simply put the original variable back. So it's like we 'borrow' the global variable to do what we want for the span of our test. That's smart!
Yay! Another piece of skill to add to my repertoire of Go best practices! Now I can run around flexing with this piece of code:

```go
/* service.go */
…
var idGenerator = utils.GenerateUUID
…

```
```go
/* service_test.go */
…
func mock_defer_idGenerator() func() {
	// mock idGenerator() to return id1.
	origIdGenerator := idGenerator
	num := 0
	idGenerator = func() string {
		num += 1
		return "item_" + strconv.Itoa(num)
	}
	return func() { idGenerator = origIdGenerator }
}
…
func TestGetInvoice(t *testing.T) {
	defer mock_defer_idGenerator()()
	….
}
…
```

As shown above, in the 'mock_defer_idGenerator()', I first temporarily keep the original global variable. Then I replace it with my own utility function, which uses a closure to return a unique id every time its called ('item_1', 'item_2', …). Finally I return a function to defer that basically returns the borrowed global variable to its original owner at the end of our test.


## Typescript
Just a quick shoutout to a typescript error that keeps me up late at night once. It was related to 'redux-toolkit', and the solution was that it requires me to define my array of middleware in a certain order. [Source](https://github.com/reduxjs/redux-toolkit/issues/368)

I despise long typescript errors that doesn't give a good context. But hopefully I get better at identifying these types of errors more quickly next time.. I think Typescript is certainly one of the things I want to formally learn in the future. It's super cool and useful but some stuff seems a bit of a mystery at times.

## That's it!
Since I already briefly talk about closure (pun intended), I don't think there's a need for me to write a proper closure for this post. Peace ✌️

Feel free to check the code.
https://github.com/steven-steven/GoInvoice
https://github.com/steven-steven/electroninvoice

Some gifs below as a quick demo. Yes.. gif with a hard G. Like 'Graphic' type of G. Not Jif. Jif bad ☹. Gif good🙂.

editing offline, and syncing back when online:
![Download Demo](building-invoice-app-v2/offline.gif "=400x400")
adding/editing customers:
![Download Demo](building-invoice-app-v2/customerList.gif "=400x400")
