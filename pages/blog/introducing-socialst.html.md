---
title: Introducing Social St
subtitle: Platform to help people meet IRL and find activity companions
publish_at: July 7, 2024
layout: post
---

Let me introduce you to a side-project I've been heads down on my own for the past 6 months. Tbh finished the MVP 2-3 months ago but hadn't touched it since, so I thought might as well write about it now to keep the context alive.

## What is Social St

![Social St](introducing-socialst/logo.svg "=200x200")

I'm creating a social web app to host and join all sorts of activities around the area. Similar to [meetup.com](https://www.meetup.com/), [eventbrite](https://www.eventbrite.ca/), [radius.to](https://radius.to/), [lu.ma](https://lu.ma/) (this I just recently discovered, and it looks so good 🫢). But unlike any, I'd like Social St to capture interactions that are less structural and more spontaneous like:

- finding companions to get coffee
- going out on a walk, co-working
- a table tennis partner
- boba picnic at the park
- grab dinner

The opportunities to meet people are endless! Social St empowers anyone to host **any** type of activities at any time during the day, or join one in their community.

## Demo

Learn more @ [www.socialst.club/learn](https://www.socialst.club/learn)

The beta @ [www.socialst.club/beta](https://www.socialst.club/beta)

Feel free to play around with the app and create your own activity

## Costs

One of the most important lessons I had through the experience was knowing how to spin up a service with least 💰. Running Redis on Fly.io is $0.20 per 100k requests, but I was shocked to see my bills at $20 from only letting Sidekiq run idle. It appears the heartbeat Sidekiq makes to Redis every 10 sec plus the job polls increases the request count by A LOT. I think the solution here is to use Solid queue / Delayed Job which uses MySQL instead of Redis. (a TODO)

![Redis bills](introducing-socialst/redis_bills.png "=400x400")

![Redis usage](introducing-socialst/redis_usage.png "=400x400")

Another source of cost is DB. I thought Railway's trial credits would last me a long time, but turns out it only took 2 months for it to run out. I would need to pay $5/month for hobby plan. At that point, I would just buy a Digital Ocean VM for $6/month and run a MySQL server there. And I did!

The domain name is another fixed cost - $5 first year and $25 per year thereafter.

Last but most definitely not the least, my time and energy is another cost 🥹.

I knew for sure I needed a way to monetize this to keep it up alive. But first I must validate the idea. Who would pay for this?

## It's time to validate the idea + get feedbacks

I figure that a good way to validate my idea was to see if anyone would pay for it. So I went ahead and build a subscription plan called 'Guild St' and try to pre-sell it. My idea is that Guild St is a plan that allows hosts to create private / exclusive communities, custom badges that'll spark community engagement, and get paid as hosts.

This is just an idea and obviously didn't bother building it unless I can find a customer for it - which is something I probably should do early on before building the whole MVP this far 🙂‍↕️. But the MVP is here, and I'll take any type of donations / fundings for those who'd want to see Social St come to life. 👀🧎‍♂️‍➡️

That's the stage I'm at. A newbie tech sales trying to land my first customer 👨‍💼🧳.

I could also start collecting feedbacks. I've tried [posting on Indiehackers](https://www.indiehackers.com/post/feedback-on-my-website-helping-people-meet-irl-and-find-companions-to-do-activities-with-d64206d271) but unfortunately saw no responses. Will perhaps try out Reddit, Product Hunt, or maybe targetting certain clubs / hobby groups. I could perhaps dogfood my own app by helping to promote other existing events / clubs.

## What could I have done better

I do not regret spending time to make this - I learned tons of stuff (can't wait to share them in a separate post)! But I had to admit that it wasn't the best, and wouldn't recommend it for anyone. If I were to redo it, perhaps I should begin by pitching my idea and collecting feedback regularly before attempting to create an MVP, so that I wouldn't just work in a vacumm and over-deliver.

## Building it for months on my own

Building it is a pretty lonely journey, but I had much fun. A few things really helped me:

- Trello board: it kept me focused on the current task, 1 step at a time, while separating the good-to-haves from the essentials.
- Rails! 💪
- Finding time everyday. Small progress >> no progress. Try to keep tasks small and easy so I don't get too bored stuck on one.

Below are notable features / learnings while building:

- Setting up [Rails](https://rubyonrails.org/) / [Tailwind](https://tailwindcss.com/) / [Stimulus](https://stimulus.hotwired.dev/) / [Redis](https://redis.io/) / [Sidekiq](https://github.com/sidekiq/sidekiq) stack
- Deploying to [Fly.io](https://fly.io/) with Docker
- Desiging the UI. Ensuring it looks good in mobile.
- Using [Device gem](https://github.com/heartcombo/devise) to setup Authentication routes, and Google OAUTH for Sign-in.
- [Pundit gem](https://github.com/varvet/pundit) to authorize which user can perform an action (ie. only hosts can update an activity)
- Designing DB models to represent relationships (ie. Activity, Memberships, Users)
- Tagging system with [acts-as-taggable-on gem](https://github.com/mbleigh/acts-as-taggable-on), and [slim-select library](https://slimselectjs.com/) for multi-select UI and allowing users to dynamically add new activity types. You can search activities by tag.
- [sidekiq-cron gem](https://github.com/sidekiq-cron/sidekiq-cron) to setup reminder and activity status update scheduler.
- Dealing with Timezones: both client-side (inferred from browser) and server-side (user settings)
- Broadcast realtime notification (activity venue changes / someone joined or leaves)
- Infinite scroll with turboframe
- List joined / hosted activities and live stats
- Participants can rate a host after the activity completes. Average rating is calculated on write.
- [mapkick.rb](https://github.com/ankane/mapkick) gem to display interactive maps
- Google's [Place Autocomplete API](https://developers.google.com/maps/documentation/javascript/place-autocomplete) to validate user address input.
- Filter activities by location and distance range. A button to get the current device location, and using reverse geocoding API to turn the latitude/longitude into a place name.
- Share to socials buttons, attaching an invitation image of current activity as the OpenGraph preview. Generating the image dynamically requires a headless chrome like [Puppeteer](https://pptr.dev/) and deploying it through Docker was a challenge 💦
- Creating the landing page
- Launching [Digital Ocean](https://www.digitalocean.com/) VM to self-host MySQL server
