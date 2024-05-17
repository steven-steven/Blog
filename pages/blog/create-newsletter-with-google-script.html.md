---
title: Building a newsletter with Google Scripts and Google Sheets
publish_at: May 7, 2024
layout: post
---

With millions of software out there, there's not a lot of things more versatile than a Google Sheets (or spreadsheet in general). Packed with a plethora of powerful formulas, we have the whole of Google Suite offering plenty of integrations and automation on top of it, all with no code. Now, this post is for the rest of us - tech-nerds. Let's delve into how you can elevate Google Sheets even higher through custom integrations with Google Scripts.

> quote on email marketing reaching customers

I was building an email newsletter while building Social St and this Blog. A clear option to me was Intuit Mailchimp which has a free plan as long as you stay under 500 contacts. But, they get to stick their logo onto the form. Well that's annoying..

![Mailchimp](create-a-newsletter-with-google-script/mailchimp.png "=400x400")

Edit: I recently learned about [Mailerlite](https://www.mailerlite.com/) and it looks promising with a free version. Might give it a try next time.

Anyways, I set out to bootstrap my own newsletter integrations with Google sheets + scripts! Got to admit that it was kinda scrappy and its still missing some features (like allowing users to select which categories they'd wish to subscribe to). But I don't think that's too important right now, especially with less than 500 people in my contacts.

Plus, I didn't start from scratch. I found [this blogpost](https://omarkama.li/blog/a-newsletter-using-gmail-google-sheets) by Omar Kamali going over his implementation of it, although I've hit some hurdles along the way (later).

The main requirements are:

- An email form embedded in your webpage
- A user submits the form
- A confirmation email is sent to the user
- Clicking on a confirmation link initiates a confirmation process for the user.
- Clicking on a unsubscribe link initiates a unsubscription process for the user.

![Email Form](create-a-newsletter-with-google-script/email_form.png "=400x400")
![Email Confirmation](create-a-newsletter-with-google-script/confirm_email.png "=400x400")

### The secret sauce: Google Script ❤️

To be fair, it's not the best dev experience (a bit of learning curve), but it gets the job done. With Google Script you can write API endpoints, serve HTML, and orchestrate integrations between services like Gmail and Google Sheets. All free of use! Each time you deploy a change, you get a new versioned endpoint, so there's no downtime for clients using old version.

Similar with Omar's implementation, I begun with serving confirmation page via the GET endpoints. But I came across the following error:

> "Google Docs encountered an error. Please try reloading this page, or coming back to it in a few minutes."

[This help thread](https://support.google.com/docs/thread/151882114/can-t-load-apps-script-editor-from-google-sheets-google-docs-encountered-an-error?hl=en) suggests that it could be the state of my browser account, as the page opened fine on incognito browser. After troubleshooting it for a while, I gave up and decided to host the page on my site and let the App Script just serve backend endpoints for the POST requests.

Another roadblock was CORS. After skimming through [this stackoverflow](https://stackoverflow.com/questions/53433938/how-do-i-allow-a-cors-requests-in-my-google-script) I get the impression that we don't get a lot of control out of Google's server to configure the response headers, and it doesn't allow us to use POST operations from javascript side (which I needed for a static app). My workaround was moving all the endpoints from POST to GET - and that worked!

Finally here is the pseudo-code structure of my App Script:

```javascript
function subscribe({email}) {
  // get spreadsheet
  // go through the records, and return false if a subscription exists for that email.

  // generate random token
  // append [email, date now, token] onto spreadsheet

  // send confirmation email with link.
  return true;
}

function confirm_subscribe(token) {
  // get spreadsheet

  // find record that match the given token.
  // if found, set confirmation flag column for that record to true. Return true
  // if not found, return false.
}

function confirm_unsubscribe(token) {
  // get spreadsheet

  // find record that match the given token.
  // if found, delete the record. Return true
  // if not found return false
}

function doGet(e) {
  const path = e.parameter.p;

  switch (path) {
    case "subscribe":
      return renderJson({ success: subscribe(e.parameter) })
    case "confirm-unsubscribe":
      return renderJson({ success: confirm_unsubscribe(e.parameter.token) })
    case "confirm-subscribe":
      return renderJson({ success: confirm_subscribe(e.parameter.token) })
    default:
      return HtmlService.createHtmlOutput(render('404'));
  }
}
```

For more concrete example, here is my subscribe method:

```javascript
function subscribe({email}) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("Subscriptions");

  // Check if the email is already in the spreadsheet
  const data = sheet.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    if (data[i][0] == email) {
      return false;
    }
  }

  // Store a new subscriber entry in the sheet
  const token = uuid();
  sheet.appendRow([email, new Date(), token]);

  // Send a confirmation email
  const body = `Thank you for subscribing to my newsletter!
    Please click the link below to confirm your subscription:
    https://stevenwhat.me/subscription/confirm?token=${token}`;
  const imgBlob = UrlFetchApp.fetch("https://i.kym-cdn.com/photos/images/original/001/676/002/f4a.jpg").getBlob().setName("hi_gif");
  MailApp.sendEmail({
    to: email,
    subject: "Confirm subscribing to stevenwhat.me newsletter",
    htmlBody: `<img src='cid:someImage' width='100'> <br/> ${body}`,
    inlineImages:
      {
        someImage: imgBlob,
      }
  });

  return true;
}
```

As you can see, a function that automate integrations between Gmail and Spreadsheet 😘

### Serving the pages

With App Script serving the REST API, I defined the following pages in my site:

- https://stevenwhat.me/subscription/pending?email=${email}
- https://stevenwhat.me/subscription/confirm?token=${token}
- https://stevenwhat.me/subscription/unsubscribe?token=${token}

Respectively in order, these are the redirect page after you submit the email form, the confirmation link sent on email, and the unsubscribe email link. Each of these pages call an endpoint via client-side JS (since this is a static site), and expect a boolean response. After the loading screen ends, the users will then see the message whether their request came through!

![Pending Message](create-a-newsletter-with-google-script/pending_success.png "=400x400")
![Error Message](create-a-newsletter-with-google-script/confirm_error.png "=400x400")

One bug that got a few hours of my time was that this won't work.

```erb
<div data-controller="subscription" data-subscription-email-value="<%= params["email"] %>">
```

Why? Because it's a static app. The page is pre-built on deploy and the `params["email"]` won't be captured. I had to read from the url query params directly from JS 🤦‍♂️

### Summary

![Success Message](create-a-newsletter-with-google-script/confirm_success.png "=400x400")

I don't know how robust this is, but after a few tests I think it's working flawlessly. Please reach out if you see any issues!

P.S feel free to subscribe! Will keep it at most once a month.
