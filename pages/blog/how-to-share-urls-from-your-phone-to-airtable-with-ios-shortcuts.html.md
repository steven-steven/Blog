---
title: How to share URLs from your phone to Airtable with iOS Shortcuts
publish_at: May 27, 2024
layout: post
tags: tech
---

I just discovered something cool. iOS Shortcuts ✨

While trying to curate travel contents for a side-project, I wanted to bookmark sites as I browse through them on my phone. Afterwards, I'd have to move those URLs to a database I can enrich and query in my service.

### A little context

I wanted to use Airtable as a DB as it is very easy to setup, friendly no-code interface, flexible schema, and great interoperability with other services - perfect for content curation.

At first, the [Airtable Web Clipper](https://chromewebstore.google.com/detail/airtable-web-clipper/fehcbmngdgagfalpnfphdhojfdcoblgc) Chrome extension looks like a wonderful extension, but sadly I realized that iOS disabled extensions for google chrome.. Then I came across [this airtable forum](https://community.airtable.com/t5/development-apis/how-to-share-to-airtable-on-mobile-ios/td-p/41700/highlight/true) where @ScottWorld brought up using Shortcuts App to make a custom share button in Safari that would send a REST API to create an Airtable entry based on the page. 🫶

### How I made my first iOS Shortcut

Ok. Let's begin.

Pop over to your `Shortcuts` app on your phone (you have it in all Mac devices). Simply create a new shortcuts, look up a variety of actions, add a number of them to your shorcut to form a sequence of actions, that's it! A no-code automation at your fingertips.

Here is the Shortcut I made to share URLs from Safari to Airtable:

![My Shortcut](how-to-share-urls-from-your-phone-to-airtable-with-ios-shortcuts/shortcut.png "=400x400")

1. The first action in the list: tap the ℹ️ button in your shortcut page > toggle on "Show in Share Sheet". This allows you to trigger the shortcut from your share options, passing in 'Shortcut Input' data from the context of that particular app (ie. Safari).

2. Save the name of shared web page: add the `Get Details of Safari Web Page` action. Then set the detail variable to 'Name' and web page variable to 'Shortcut Input'.

3. Save the url string to shortcuts by encoding and decoding it (ref: [this reddit comment](https://www.reddit.com/r/shortcuts/comments/17qy22m/comment/kf94nq6/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button)🌟): first add the `URL Encode` action and set the text variable to 'Shortcut Input'. Then add the same action but set it to decode and the text variable to the 'URL Encoded Text' to feed it the output from the encoder.

4. Get your airtable secrets: First, you need to create an Airtable token if you don't already ([Airtable docs](https://airtable.com/developers/web/guides/personal-access-tokens)). I then created a txt file in my phone (using the [TXT Write App](https://apps.apple.com/us/app/txt-write/id824420347)) and paste the token into it. Next, create the `Get File From Folder` action selecting the path (ie. in my case its a folder called 'TXT Write' in my iCloud) and the file name.

5. Add the URL to your airtable endpoint: Add the `URL` action, pasting the endpoint of your API.

6. Send the data to your endpoint: Add `Get Contents of URL` action, setting the method to POST, a Authorization header pointing to the file from step 4, and a json dictionary of fields for the data you wish to send (ie. the url from step 3 and title from step 2). Ref: I followed a [good Youtube tutorial for this](https://www.youtube.com/watch?v=ySpVqvzM_Ss)

That's it! You can now head to your Safari article, hit share, and you'll have an option to create an airtable record with your shortcut 🎉

![Using the shortcut from Safari Mobile](how-to-share-urls-from-your-phone-to-airtable-with-ios-shortcuts/share-from-phone.png "=400x400")

### Thoughts

Imagine all the things you can do with this!

Some ideas like
- prompt questions and send diary entries to google sheets (I've been doing this with google forms for a while now, and I find that doing it from a browser isn't a very smooth experience)
- track what I eat everyday
- track how much I spend
- looking up directions back home
- trigger a cron job for any API

It's easy and free automation 🕺.

While getting into this rabbithole, I also discovered Bookmarklets ✨. Having the power to easily automate things is such a blessing if you know to use it when you need it.
