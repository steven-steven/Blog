---
title: Extracting data from URL
publish_at: June 4, 2024 01:40
layout: post
---

Imagine this.. you bookmark a website, categorize/tag them, and you have a feed of all your bookmarks you can embed in your site filtered by tag.

To do this, I would need to:
- save the url from my phone browser
- tag the url using tags from a predetermined list
- extract and save images, title, short descriptions, favicon for the url
- generate a feed for your site

Straight forward isn't it? It's a bookmark + data enrichment step + feed generator. I've looked far and wide but couldn't find a free solution (sorry for being cheap, but also https://embed.ly/extract's API cost $99), so I decided to bootstrap it myself.

Edit: I discovered Diffbot! They have a free version for 10k calls a month of 5 API calls per min. Would definitely give it a try to integrate it with Airtable (e.g. [with Zapier](https://zapier.com/apps/airtable/integrations/airtable/339901/enrich-new-airtable-records-with-diffbot-enhance)). If that works for you, then see you in another post 👋

My workaround is:
- using Shortcuts to share websites to airtable from your phone ([I have an article for that!](/blog/how-to-share-urls-from-your-phone-to-airtable-with-ios-shortcuts))
- manually tag the url in Airtable (use linked records)
- Scraping Solution! + update Airtable
- pull from Airtable and generate a view in the site

### The scraping solution part

Scraping for images/title/description is common yet isn't straightforward because people just can't agree on a protocol. Would make my life easier if all sites have their open-graph metadata set, with an absolute path to the image.

I didn't want to build from scratch so I bootstraped from this code ([krthush/link-preview](https://github.com/krthush/link-preview)) that generates link preview data ([medium post](https://krthush.medium.com/how-to-create-link-previews-like-social-media-apps-open-source-api-45797d758200) by the author). I modified the front-end code such that it would query all URL records from airtable, call the API, and update the records with the enhanced data.

There were also tons of patches I made for it to work with the many edge cases.
- some images use `data-src` or `data-orig-file` instead of `src` attribute
- the original code only works for absolute path. I've had some image urls like `/path_to_image` which means I have to append that to the hostname, and there's another url like `../../../image` meaning I have to resolve the path to the image from the current url.
- the original code only looks at metadata to fetch description. But when websites don't follow that rule, I'd fetch paragraph tags and get the first 2 sentences from it.

That codebase also had implemented bing image search in case they couldn't get any good images from the site. Getting bing api key was a pain so I gave up on that idea.

As an alternative, [this blogpost](https://andrejgajdos.com/how-to-create-a-link-preview/) also had their own solution to generating link previews and I think it might be a better starting point if I was to start over and hadn't spent my weekend doing this 😅.

### Preview of the feed I generated

![Generated feed](extracting-data-from-url/feed.png "=400x400")

### Preview of the Airtable record ✨ enriched ✨

![Airtable data](extracting-data-from-url/airtable.png "=400x400")
