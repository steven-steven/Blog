---
title: Shopify 2021 Summer Internship Challange
publish_at: January 6, 2021
layout: post
tags: tech
---

I wanna dedicate this post on my recent side project. As the title suggests, it is primarily for a coding challenge submission as a part of Shopify's Summer 2021 Intern application. I'm shooting my shot by applying for both Front-end and Back-end positions, which has two different tasks.

This post briefly describes both projects and reflects some of the challenges and decisions I made. The code is available here: https://github.com/steven-steven/shopifyApplication

## FE application
Deployed App: https://shopify-application.vercel.app

The front-end challenge was to create a webpage to help users search OMDB movies and select/nominate 5 of their favorite movies. The data were pulled from the [OMDb public API](http://www.omdbapi.com). On top of the basic requirements (search, add/remove from nominatin list, display banner after 5 nominations, etc), some extras I added includes crafting my own design, adding notifications for when the user tries to select more than 5, and a details section to show the poster image of the selected movie.

My main stack was Next.js (using the standard 'npx create-next-app' starter code. Then I added in Tailwind css and Typescript manually after). Normally I'd use Redux but I decided to try and use React's builtin useContext and useReducer hooks for the state management for my first time. I'd say it works really well for small projects like these.

I was really hoping that the OMDB API supports a query to get all the movies, so I can add some kind of pagination feature. However after playing around seems like the closest I can get is searching the movie by title name/prefix. Aside from that, there wasn't really any blocker and I didn't want to spend too much time on it considering I'm also doing the backend challenge.

I started with an initial design/sketch on Figma:

![DB Structure](shopify-2021-summer-intern-challange/figma.png "=400x400")

But as you will see, my taste of colors quickly change as I played around with CSS.

![Nomination Picker Demo](shopify-2021-summer-intern-challange/nominatinPicker_demo.gif "=400x400")

## BE application
Deployed App: https://shopify-image-repository.vercel.app

This one feels more open ended. We had to build an image repository with any tech stack we desire to use, and focus on things we are interested the most. The first thing that came to my mind was using a cloud storage to store all the uploaded image (e.g. AWS S3 or Firebase Storage). I think cost-wise Firebase is always the better choice, and it would also easily extend to the Realtime Database and Authentication service. So Firebase it is! (Also I plan to use Firebase for FYDP fourth year design project, so it'll be good to learn it now anyways)

I came across a template to start off my project ([nextjs-advanced-starter](https://github.com/agcty/nextjs-advanced-starter)), which provides eslint, Tailwind, Typescript out of the box.

Most of my time was then spent on implementing Firebase Auth and Storage, which wasn't too difficult considering the myriad resources on the internet. React useContext hooks also made it very easy to have a clean code separation for the auth and storage services.

#### Firestore DB structure
![DB Structure](shopify-2021-summer-intern-challange/dbStructure.png "=400x400")

#### Storing images and its metadata
Once I had storage working, I knew I'd need to use Firestore to maintain the image metadata. This is required since images can ideally be uploaded with the same name and that would replace the old image with the same name. So instead, I should store the image with a uniquely generated UUID, then use Firestore to keep the UUID with all metadata like the actual image name, thumbnail size, download url. To scale this further, I could also easily add more metadata like image tags or date uploaded and use them as query/search fields.

All in all the logic was:
- Upload each image:
    - Generate UUID -> Upload/put the image data on the Firebase Storage
    - Get extra metadata like the image download url and thumbnail size -> upload those metadata to Firestore
- Get images
    - Use firestore's realtime feature to listen to changes
    - I thought about loading images in batches (or pagination) in the beginning. Basically it would work by keeping track of last fetched document. But of course it would be very tricky if the data can move around or when realtime data listeners updates the data. Firestore publish a [good discussion on their youtube](https://www.youtube.com/watch?v=poqTHxtDXwU). So keeping the tradeoff between doing 'realtime + no pagination' vs 'one time fetch + pagination', I think I'll keep the realtime feature without pagination since I expect user images to be of considerable size as of now.


#### Security
One thing that surprises me was that Firebase Storage resources aren't encrypted at rest. It's also publicly available meaning once the image url is exposed, then anyone is free to access it. The URL has a token part which makes it unguessable, but still, it'd be weird to have developers be able to see user images… I'm guessing devs could implement their own encryption/decryption (on client side or proxy server) which probably adds complexity, latency, etc.

For now, the best I could do is specify rules for R/W requests (these rules don't apply to the image url). I set the Firestore and Firebase Storage rules such that users are authenticated and can only access resources that they own (the request uid match with the appropriate user collection it tries to access). I could also potentially add other validations like file size or requested content type.

``` javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{uid}/{document=**}  {
      allow read, write: if request.auth != null && request.auth.uid == uid;
    }
  }
}
```

#### UI
I'd say its a pretty basic UI. I had some pages for the authentication flow, and it will route the users to /dashboard once logged in. I used [react-grid-gallery](https://www.npmjs.com/package/react-grid-gallery) to display the images. It's my first time using it and seems like an awesome library. Although not perfect (e.g. It doesn't allow custom styles for the image checkbox. The default icon style is pretty bad on white images ([more about the issue](https://github.com/benhowell/react-grid-gallery/issues/141)).

![Image Repository Demo](shopify-2021-summer-intern-challange/imagerepoDemo.gif "=400x400")