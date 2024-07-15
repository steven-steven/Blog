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

Now when it comes to hosting MySQL, I couldn't find a free host.

I was initially with Planetscale's Hobby Tier, but migrated since after they announced March 6 that they're shutting down their free Hobby tier plan 😭. They have a concept of branching and merging similar to Github PR. A branch in this case is an isolated copy of your DB. Thought the code-like concept of merging and reverting schema changes is very cool, and it sucks that I had to migrate out of it.

The next host I tried was [Railway](https://railway.app/) which offers a free one-time grant of $5 in credits. When you run out, they have a $5/month Hobby Plan. Since my side-project has no active users, I thought $5 credit was enough - until it ran out 2 months later 😔. What's the next best option?

[Digital Ocean Droplet](https://www.digitalocean.com/pricing/droplets#basic-droplets)! A VM costing $6/month is definitely worth it at that point. You can use it to power multiple side-projects. I was afraid of the intial learning curve, but honesty wasn't hard at all. Here are some good strarting points:

- Setting up MySQL in Ubuntu ([ref](https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-22-04))
- Allow Remote access to Digital Ocean MySQL server ([ref](https://medium.com/ciiag/digital-ocean-allow-remote-access-to-mysql-database-18c2d6b8986))

I think the limitation there is scalability. You could upgrade your droplet machine to support higher traffic and larger DB. At that point, you could even consider AWS RDS (offers 12 months free). But I think a Droplet instance is good enough for many hobby projects.

### Hosting Postgres

I think you'll have more luck finding free Postgres hosting services. I would recommend [Supabase](https://supabase.com/) or [Fly Postgres](https://fly.io/docs/postgres/). I'm not as familiar with Postgres syntax, so that was what deterred me. But someday, I might give it a shot.

### A bit of budgeting tip

I don't think spending money on a side-project is worth it if it is still a proof-of-concept. I was building [socialst.club](/works/social_st) in my free time and I insists that I wouldn't spend a dime on it (except domain name 😅) so I can keep it up even without users.
