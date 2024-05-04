---
title: Debug how Next.js works with redux
publish_at: November 11, 2019 01:40
layout: post
---

It's 4.30 a.m. My palms are sweaty, knees weak, arms are heavy. I've been on this since 12 a.m already. I'm trying to dispatch a *redux-thunk* in *getInitialProps* in Next.js but something just didn't go right.

## The problem - Was I just sleepy?

I was seeing two different version of the store!

The *redux-thunk* did successfully complete the asynchronous call and filled the store with data. But the instant after the page finish loading, the store is empty! (Whaaa)

![inconsistentState](debug-how-nextjs-works-with-redux/inconsistentState.PNG "=400x400")

Above, I'm showing the client-side store on the left side, and the server-side store on the right side. Every time I refresh, new data gets added to the server store like it's supposed to, but the client-side didn't change. Clearly, these two stores are different.

I'm also getting a client error `"did not expect server HTML to contain the text node "" in <h1>"` which suggested that there is a mismatch in the render tree between the client and server.

### My thoughts

Lots of things to think about. I thought *redux* is the one single source of truth. Why is there two conflicting versions of it? And it did load data onto the store, but why is it gone in client-side? :sleuth_or_spy:

## Table of Contents

You can jump to [Solution](#solution) if that's what you're looking for. The rest are just my sleepy brain's thought process.

-   [The problem - Was I just sleepy?](#the-problem-was-i-just-sleepy)
    -   [My thoughts](#my-thoughts)
-   [Debug and Googling](#debug-and-googling)
-   [Solution](#solution)
-   [How next-redux-wrapper works (under the hood)](#how-next-redux-wrapper-works-under-the-hood)
-   [What I learned - knowing what's beneath](#what-i-learned-knowing-whats-beneath)

## Debug and Googling

Instead of using `getInitialProps()`, I tried to simply call the *thunk* using`mapDispatchToProps`. That seems to work.

"So there's nothing wrong with *redux-thunks*. The problem is in *getInitialProps()*", I thought.

So here is my *getInitialProps()* where I call the *thunk*:

```javascript
Home.getInitialProps = async ({ store }) => {
    await store.dispatch(loadAllMembers());
};
```

Looks good to me...

I read up some similar issues

-   ["Async redux thunk in SERVER breaks" ](https://github.com/zeit/next.js/issues/7503) - zeit/next.js issue

-   ["How to use redux-thunk with Next.js"](https://medium.com/@levente.balogh/how-to-use-redux-thunk-with-next-js-5daf3fcd14fd) - Medium by Levente Balogh


The answers from those articles, is to ensure `getInitialProps()` returns a promise or use `async-await`. But I tried that already, so why is it still broken? :broken_heart:

Then I came across [a question by @cerulean](https://spectrum.chat/next-js/general/can-someone-explain-to-me-how-next-redux-wrapper-works-how-many-stores-does-it-build-on-the-server-on-the-client-how-is-the-data-handled~5777828e-0af5-483c-9e1d-f0f8b8e11bc0) in the next-js spectrum chat :heart:.

> "Can someone explain to me how 'next-redux-wrapper' works? How many stores does it build, on the server, on the client? How is the data handled?"

I was sceptic in the beginning, but after reading how *next-redux-wrapper* works, I looked back at the documentation and woops seems like I forgot to put something :flushed:

## Solution

Here is what I did with creating my store and using `withRedux()` HOC from *next-redux-wrapper* **before the change**:

```javascript
const store = configureStore({
    reducer: rootReducer
});
...
export default withRedux(() => store)(MyApp);
```

And here it is **after the change**

```javascript
const makeStore = (initialState, options) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState
  });
};
...
export default withRedux(makeStore)(MyApp);
```

I initially assumed that all `makeStore` does is wrap the app with an instance of the store. So I ignorantly just implemented it with an arrow function that returns the created store.

So the real answer to this problem is I had forgotten to **pass *initialState* to the store**. In this case I'm using 'redux-starter-kit' and I had to specify the `preloadedState` when creating the store.

## How next-redux-wrapper works (under the hood)

As mentioned earlier, someone explains it pretty well in [@cerulean's thread](https://spectrum.chat/next-js/general/can-someone-explain-to-me-how-next-redux-wrapper-works-how-many-stores-does-it-build-on-the-server-on-the-client-how-is-the-data-handled~5777828e-0af5-483c-9e1d-f0f8b8e11bc0). I'll try to paraphrase it based on my understanding:

The *next-redux-wrapper*'s *withRedux()* HOC creates a new store every time `getInitialProps()` is called by Next.js. This store is passed down to the redux Provider.

So yes, the store is created more than once. In fact, a new store is created in the server for every SSR request. A store is created and `getInitialProps()` returns the redux state. The client then use this returned value to **reconstruct** the store on the browser side (what is called as 'hydration').

But in essence the main confusion here is really about how _Next.js_ behaves. _next-redux-wrapper_ simply works around under those constraints. `getInitialProps()` can be called from both client-side and server-side, so because of this they both need to have their own version of the store.

In the thread @exogen mention about how there are 3 store creations in total for a single server request. This haven't been fully absorbed in my brain yet, but here are the 3 cases that the redux store is created:

1. in server when `getInitialProps()` is called during \_app.js initialization
2. in server, store data is extracted to be serialized into `__NEXT_DATA__` to then be passed to the app constructor
3. in client side during hydration, where the client global store is created with data from `__NEXT_DATA__`

**<u>So tying back to my problem</u>**, I think because I didn't pass in the initial state of the store, the client reconstructs an empty store instead of properly extracting the values returned from the server. Thus during refresh, the data is updated on the server's version of the store but is empty on the client-side. That's my guess.

## What I learned - knowing what's beneath

It's a great example that made me realize how uninformed I am about the tools I used. The JS libraries and frameworks are provided and I was making lots of assumption on 'how I think it works'. In all honesty I am quite ignorant about how things works until things break.

On the other end of the spectrum, the best thing about being knowledgeable about your tools is that you'd know where it'd gone wrong when things break. In my case, I was pretty clueless and had to spend time blindly testing, and cornering the possible causes of the problem.

I'd imagine in the future when more libraries and tools become so complex and black-boxed, it'll be hell to debug.
