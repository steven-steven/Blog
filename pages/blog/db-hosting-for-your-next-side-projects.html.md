---
title: DB Hosting for your next side projects
publish_at: May 17, 2024
layout: post
---

While working on Rails, my DB options were:

- SQLite
- MySQL
- PostgresQL

For simple apps, I think SQLite will work. Although it doesn't scale writes due to its blocking nature, there are some interesting work out there in bringing SQLite to production (ie. Fly.io's [LiteFS](https://fly.io/docs/litefs/)). However, what deterred me was the lack of features. As an example, one that I needed for SocialSt was calculating geometric distance between 2 points - MySQL can do this with a query! 🤘

```ruby
scope :within_range, ->(origin_latitude, origin_longitude, range_km) {
  where("#{range_km} >= \
    ST_Distance_Sphere ( \
      point(#{origin_longitude}, #{origin_latitude}), \
      point(longitude,latitude) \
    ) / 1000")
}
```

But if SQLite works for you, congrats! Since SQLite is in-memory, you should be able to deploy it directly with your app, and don't have to worry about hosting. 🎉

### Hosting MySQL

Now let's talk about hosting. I couldn't find a free host for MySQL but what I ended up using is [Railway](https://railway.app/) which offers a free one-time grant of $5 in credits. When you run out of credits, they have a $5/month Hobby Plan which is pretty cheap. In my case $5 credit was enough to productionalize my side-project since there was no active users yet.

Otherwise, AWS RDS only offers 12 months free. There's [aiven.io](https://aiven.io/docs/platform/concepts/free-plan) that offers a $300 free credit. I've also seen some mentions on running it in a Digital ocean droplet that only cost $6/month.

For me, I was on Planetscale's Hobby Tier the first time. Thought I've found "the one". They have a concept of branching and safe migrations where you can create branches (isolated copy of your DB), make your schema changes there, and when you're ready to deploy simply open a request like you'd do on a Github PR. I thought it was so cool that you can now merge and revert schema changes just like code. But a few months after I got it working on my side project...

Planetscale announces March 6 that they're shutting down their free Hobby tier plan 😭

### Hosting Postgres

I think you'll have more luck finding free Postgres hosting services. I would recommend [Supabase](https://supabase.com/) or [Fly Postgres](https://fly.io/docs/postgres/). I'm not as familiar with Postgres syntax, so that was what deterred me. But someday, I might give it a shot.

### A bit of budgeting tip

I don't think spending money on a side-project is worth it if it is still a proof-of-concept. I was building socialst.club in my free time and I insists that I wouldn't spend a dime on it (except domain name 😅) so I can keep it up even without users.
