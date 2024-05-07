---
title: Scanosaurus
subtitle: Scanning Service
layout: github_project
github_url: https://github.com/steven-steven/scanosaurus
order: 2
---

Scanosaurus was a service I started from a personal need - I wanted to clear out the pile of University notes I have by archiving it digitally, but there weren't any bulk scanners in my area. I decided to get one of the [CZUR Aura Pro](https://shop.czur.com/products/aura?variant=28598339436592) for 299 USD.

The landing page: [https://scanosaurus.vercel.app/](https://scanosaurus.vercel.app/)

On the technical aspect, I used Contentful for a headless CMS. It makes it easier to organize your content separately from presentation code. I used a NextJS starter app as the front-end code, which will uses Contentful's [GraphQL Content API](https://www.contentful.com/developers/docs/references/graphql/) to fetch the content. It's pretty cool to see that in action - you can update how the content is structured in the web UI and once published the graphql schema is generated automatically to be called in your code.

The other challenging part of selling is setting up the copywrite, but I got some help with AI. I had a fun time exploring Midjourney for the first time, to generate my logo. It takes a few iteration, and I finally found the perfect dinosaur 🦖. The copywrite is mostly from chatgpt. What great time we live in.
