---
title: Creating an Invoice App with Electron and Go
publish_at: August 26, 2020 01:40
layout: post
---

A long long time ago (2 years ago -ish), my dad asked me if I could make an invoice app for his company because his old software was very outdated. The old legacy software was a custom-made software still currently running on a Windows XP in his office. He had even forgotten who made it for him in the first place.

Old Invoice Software:
![Old invoice app](creating-an-invoice-app-with-electron-and-go/oldApp.png "=400x400")

I said I'd give it a shot, and that summer vacation I remember trying to create a web-app to generate pdf documents which I wasn't very successful. Somehow at that time I couldn't wrap my head around how I could generate a PDF file, and downloading files from the internet. As soon as that vacation ends life got busy and I ditched the entire project and never really came back to it.

Fast forward 2 years, covid came and I have so much time at hand this summer vacation being stuck alone at home. I deviced a 2 week timeline to complete the first prototype. If I gave myself too much time I know my procrastinating brain will slack off and will probably be distracted and never completing the project. So here is a working prototype after about 2 weeks. ⏳
(Note that I've played around with Go and GoKit API before starting this. So that was a good starting point)

## Table of Contents

- [Design](#design)
- [Architecture and Stack](#architecture-and-stack)
- [Go API](#go-api)
- [Firebase](#firebase)
- [Electron](#electron)
  * [Generating PDF](#generating-pdf)
  * [UI and Tailwind](#ui-and-tailwind)
  * [Table with react-table](#table-with-react-table)
  * [Form](#form)
- [Demo](#demo)
- [Overall](#overall)


## Design

I begin with a Figma design. It was my first time learning to use this software, but it's actually really easy to use after going through the default tutorial. I can define a custom component and duplicate them (like shadow clone jutsu), or group components together into a single entity (like the fusion dance). An clear initial design definitely helps me speed up my dev process in later stages.

The following are screenshots of the intial 3-page design (create/edit new invoice, history list of invoices, and add new inventory item).

![Make new Invoice design](creating-an-invoice-app-with-electron-and-go/design1.png "=400x400")
![Home page design](creating-an-invoice-app-with-electron-and-go/design2.png "=400x400")
![Add new item design](creating-an-invoice-app-with-electron-and-go/design3.png "=400x400")

There are some things I modified after getting a few feedbacks from my family. For example in the 'buat invoice' (make invoice) page, it's better to keep the 'SIMPAN' (save) and 'DOWNLOAD PDF' buttons below the totals to make it clear that the buttons are saving the state of the entire page. I also decided to make the table editable on that page, and remove the search bar on top of the home page since it was unnecessary.

## Architecture and Stack

I will be honest, my choice of stack are mostly based on what interests me the most. I used Golang's GoKit API, and Electron Framework for the UI, both of which I'm inexperienced at and this will be my first project with both tools.

I learned and played around with Golang and GoKit 4 months ago so it's not entirely new. However, I never touched electron or build a desktop app before so I decided to go with [electron-react-boilerplate](https://github.com/electron-react-boilerplate/electron-react-boilerplate) since it has builtin eslint, typescript, deployment scripts, and other things that might potentially be a huge learning curve. Overall, it was an easy transition. Developing in electron is exactly like developing web-app (renderer process) but with an extra 'main process' which deals with native I/O operations, creating windows and dialog boxes, and other interactions with the OS. Renderer process (the React component in my case) can easily call main process through the electron API's IPC.

I also used Firebase Realtime as the database since it's the most flexible and cheapest (and fastest to get running) option I could think of. My dad wouldn't mind if the data was stored locally just like the old system, but I think storing it in the cloud could add additional scalability so people could now work off that old ancient office computer.

Finally, here's a rough sketch of a simple design of the services:
![design](creating-an-invoice-app-with-electron-and-go/architecture.png "=400x400")

And the DB Models for 'Item' and 'Invoice' documents: (my name convention: those in suffix '_db' are the schema stored in the database)
![invoiceSchema](creating-an-invoice-app-with-electron-and-go/invoiceSchema.png "=400x400")
![itemSchema](creating-an-invoice-app-with-electron-and-go/itemSchema.png "=400x400")

## Go API

I chose Go Kit mainly as it proposes good design priciples. I read up ways to structure a microservice [API with gokit](https://medium.com/@shijuvar/go-microservices-with-go-kit-introduction-43a757398183) and it seems pretty neat. There are multiple layers of the API, and once I set it up the first time it's really easy to add/change features after.

![Go Kit](creating-an-invoice-app-with-electron-and-go/gokit.png "=400x400")

Go also has a default testing package. The challenging part was mocking the Firebase DB for unit testing which I couldn't figure and ended up using a third-party github.com/jeremyschlatter/firebase. It was easy to use since it provides clean interface to change between a mock and real DB instance. Buutt.. it's not exactly well-maintained and only supports basic functions like get, set, delete, etc.

There are also wierd marshalling bugs (or features) in Go that I didn't really like.
- when marshalling an empty slice [] it outputs a nil in JSON. Seems like its a [common issue](https://medium.com/swlh/arrays-and-json-in-go-98540f2fa74e) and there's a pending proposal to change this behavior. But for now my workaround is simply manually checking for the nil property and initializing an empty slice. For now it's ugly but that works.
- There's another bug ([with a proposal on hold](https://github.com/golang/go/issues/3117)), where it throws an error when assigning a field element when looping in a range (which shouldn't happen).

## Firebase

One problem with firebase was the limited features of using Admin SDK in Go. The event listeners are only supported for Node.js and Java SDK. So in the end I still add a client SDK component, on top of the API, that listens to changes in the DB.

Another issue like I mentioned earlier, the Firebase mocking library I used wasn't well-maintained and only allow simple operations like Set, Get, and Delete. This restricts me because I couldn't use 'push()' to auto-generate keys. So I ended up autoincrementing the document ids which is probably not a good practice.

Another interesting issue I faced with Firebase is that when I having an object {} with an autoincrementing integer as keys, Firebase sometimes [treat them as an array automatically](https://stackoverflow.com/questions/17777112/single-integer-as-key-in-firebase-firebase-array-behavior) (which is kind of an unexpected behavior)

## Electron

### Generating PDF

My first attempt was to use [PDFKit](https://pdfkit.org) for Node. It enables me to draw lines, text and shapes on the PDF canvas, which will be triggered on IPC request to the main function. However, upon packaging the file to production with webpack [it couldn't recognize a dependency file on node_module](https://github.com/foliojs/fontkit/issues/67). 😔

Couldn't get it working so I went for an alternative which was to first have an HTML template engine (I used [ejs-electron](https://www.npmjs.com/package/ejs-electron)), render that and the inputs on an invisible browser window, and [print the contents of that window to an output file](https://www.geeksforgeeks.org/generate-pdf-in-electronjs/) using electron's default functionalities. That works like a charm ✨. Especially since styling the pdf docs just becomes a problem of writing HTML and CSS.

### UI and Tailwind

The only styling library I used is [Tailwind](https://tailwindcss.com). It's just like writing vanilla CSS but it makes it easy to theme and a lot of shortcuts are available. Unlike libraries with pre-styled components like Material-UI, I think its preferrable to go with low-level frameworks that you can easily tweak from scratch. Would highly recommend this framework even for those learning CSS for the first time.

### Table with react-table

I was searching for an easy React library for tables and the first thing that came up was [react-table](https://github.com/tannerlinsley/react-table). It's a 'headless UI library' meaning that it doesn't supply any UI markups (giving me great flexibility to go with my design). What the library gives is a set of react hooks like 'useTable' to get the props for the table, 'useSortBy' to easily give sorting functionalities, 'usePagination', etc.

It was a bit challenging especially having it working with proper type checks in typescript. Another challange was having an editable table and connecting it with the rest of the form data. But the docs are pretty good and results was pretty sick in my opinion. I have 2 types of tables in the product - one for a simple view table with sorting, and the other is an editable table connected to a form.

### Form

I used [react-hook-form](https://react-hook-form.com), a super handy library that provide hooks for filling out forms. It deals with error handling validation and state changes internally and I love how much it cleans up the code and take away that extra logic aside.

## Demo

Opening the App and edit existing invoices
![Open and edit Demo](creating-an-invoice-app-with-electron-and-go/openAndEditDemo.gif "=400x400")

Testing UI responsiveness
![Responsiveness Demo](creating-an-invoice-app-with-electron-and-go/responsiveDemo.gif "=400x400")

Download pdf
![Download Demo](creating-an-invoice-app-with-electron-and-go/downloadDemo.gif "=400x400")

Create New Invoice
![New Item Demo](creating-an-invoice-app-with-electron-and-go/newInvoiceDemo.gif "=400x400")

Create New Item as it appears when creating new invoice
![New Item Demo](creating-an-invoice-app-with-electron-and-go/createNewItemDemo.gif "=400x400")

Error Handling on Offline and automatically goes back up when internet is available
![Offline Demo](creating-an-invoice-app-with-electron-and-go/offlineDemo.gif "=400x400")

Sample invoice PDF with dummy data
![Sample PDF](creating-an-invoice-app-with-electron-and-go/samplePdf.png "=400x400")

## Overall
Having my dad as a client is an interesting experience mainly because he's not adapted to modern technology. Thus, he doesn't seem to have much expectations other than getting it to work.

So without great detail/features, I just try to make things intuitive to use and try to remove possible errors as much as possible, set up unit testing for my API (which helped me TONS during my development), offline error-handling, etc. But as we know, especially for a one-person product, wishing for a bug-less code would be impossible unless I'm the almighty lord of code.

So I'm going to leave this product as it is for now and attend to any issues/requests that come up in the future. I do thought about a feature where it temporarily stores the invoices locally when there's a network error and upload it when internet goes back up. But this is not essential requirement so I'm going to leave it for the future. I'm all burnt out from past week so going to chill for a bit.
