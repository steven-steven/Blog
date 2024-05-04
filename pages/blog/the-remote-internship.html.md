---
title: The Remote Internship
publish_at: December 24, 2020
layout: post
---

![Welcome Loots](the-remote-internship/loot.png "=400x400")

There are definitely perks of being in the technology industry that made it possible to survive and thrive even in the midst of pandemic. 4 months flew quickly, and last week was the end of my internship at StackAdapt where I get to fully experience the new WFH culture.

I don't think it made much difference in terms of my working speed (sometimes my brain kinda works better at night so I could readjust my hours when I'm on the zone or if the task is interesting).  The main noticeable difference for me was definitely the 'culture'. The office isn't just a place to work, but a place to meet, interact and observe how other people work. So I felt like WFH really took that out of the equation.. At least for me.

Nonetheless, StackAdapt still made a crazy awesome term for me and I had found new ways to stay connected. This post are my quick highlights of this term.

## Getting to know the Ad Tech industry
First and foremost, a quick bit on StackAdapt, it is a DSP in the programmatic landscape. We provide solutions for our clients/advertisers (the buy side) to serve digital Ads across omni-channel platforms (site banners, native ads, video, CTV, etc). In the background, our platform perform automated bids on an AdExchange enabling us to put up the Ad on the sell/publisher side if we win the bid for that particular spot. It seems pretty freaking amazing to me how those exchanges happen in milliseconds. So quickly from the moment an audience enters a publisher website, to the moment the ad appears on their page.

On top of that we have a multitude of other services like data analysis, different ways our clients can optimize the ad based on different KPIs, using all sorts of ML and data science magic to create and target custom segments of audiences (e.g. Lookalike audiences,  topic audience,..), reporting tools for our clients, approving/rejecting domains to maintain brand safety, etc.

So much work was involved under the hood, and getting to know the ad tech space for my very first time was a blessing in and of itself. As a growing startup, I was super fascinated by how motivated every one was and the speed of which the entire company is expanding (they're hiring loads of new people and expanding internationally). Occasionally, I'd see congratulatory emails to inform of someone's promotion or a weekly email of internal business updates; and overall it makes me feel like StackAdapt is a really exciting company to work at.

## My Work + learning new stack + code review
I get to work full-stack on the platform side web application that all our clients and admin use. Depending on the ticket, I'd normally work either on React/Redux or Ruby/Rails part of the code. Most parts of the React codebase is super clean and nice to work with, and I also heard a fellow coop saying the same thing.

Although I felt super comfortable working with React, it's wonderful everyone follows a set of coding practices really strictly which heightened my awareness on excellent ways to structure my code. Some senior developers gave a lot of great feedbacks on code review as well which I very much appreciate and learned a lot from.

On the other hand, learning Ruby/Rails was quite a steep learning curve for me. Ruby isn't my favorite language to work with. For example, I disliked how some keywords are redundant - why would you use 'unless' when we already have 'if' statements? Why have '.present' when we already have a '.blank' method? Anyways, it took a lot of googling to understand and get more used to the language the first time. I kind of like Rails as a framework in the way that it makes it easy to work with DB models and relationships between ActiveRecords. Writing tests with Rspec was also pretty cool. However in some cases things could also seem quite 'magical'. I spent a few weekends skimming through the official Rails Guide to understand basic things like scopes, inheritance, associations, migrations, validations, delayed jobs, etc. But there's so much that the language offers. I would definitely read in more details if I'd ever use Ruby/Rails again, but for now I'll stick with JS :)

Some memorable tickets I've done was implementing a new inline-editing feature for the main overview table, creating update endpoints on GraphQL, implementing a select-all feature (which gave me quite some troubles on state management and load speed), working with DB and migration files, figuring out how to run Rails queries in batches rather than performing it for every row (spent much time understanding different type of join queries like includes, eager_load, preload, etc).

One of my favorite moments was discussing/code-reviewing my work on the new inline editing feature with the FE lead. Although I made it work, he pointed out that it wasn't scalable if we decide to reuse the logic for other fields in the future. So after a heated discussion with designers and PM on the trade-off between the UX and code maintenance, we agreed on an approach. I think that taught me a lot about always keeping a broad view perspective in order to decide how to maintain/reuse the code early on the roadmap.

## New ways to interact remotely and the warm welcome
A week before my first day of work, I got a bunch of LinkedIn invites including one of the founders, Vitaly, who personally messaged to welcomed me. I think that gave me the best impression right off the bat. My first week was an orientation to introduce us to the product, the different teams in the company, the tech stack. I think this was extremely effective for me as there are a lot of workflows and concepts in the Ad industry that I was unfamiliar with.

Our tech team have morning standup twice every week, and I also joined the 'Coffee and Donut' bot on Slack which pairs us with a random someone every week. It was always very exciting to be matched and chat with new people in the company every time as I have been missing a lot of those human interactions lately 🤧. I also tuned into the tech lunch and learns. We have channels for people who play games (although I'm not a big fan of playing games)

## Demoing my work to > 100 people
2020 made public speaking a joke. There was a moment where I had to demo a feature I made (for inline editing) on a monthly company wide product meeting of about 130 people. The PM I worked with, Daniel, gave me the chance to help out on the demo. It was a great experience and didn't feel as nerve wracking over Zoom, especially when most people didn't turn on their cams.

## Playing Pong with Chris + end of year digital escape room
![Pong](the-remote-internship/pong.png "=400x400")

Chris is a fellow Waterloo intern, and he's a competitive table tennis player (probably one of the few best I've ever played with). I reached out to him and we hanged out and played every Friday after work, only until the 2nd wave comes and the lockdown is up again 😢 But enjoyed while it lasted and my game improved so much especially after he taught me to use my hip power more.

Finally on the Thursday of my last week, there was a company wide event where we get grouped in a Zoom call and played a digital escape room through a custom made site. I definitely did very poorly, but it was fun.

## Conclusion
It was a pleasure to experience working with so many talented people. I got an Excellent in my performance evaluation. Because I worked with a lot and a variety of very different tickets throughout the term, my mentor had to take in feedback/rating from people I worked with and took their average. Here are feedbacks I have (which are kind of anonymous).

> Steven thinks out of the box in regards to problem solving and will make sure to clarify with his team if tasks are ambigous. He also works hard to improve on his feedback and make iterations to his work. He is able to work independently after given some instruction.

> For large tasks it would be beneficial for him to explore all possible edge cases and to double or triple check his work. Errors will happen but taking the necessary precautions can reduce it even further.

I can think of some occasions where I definitely messed up. One time, I made a pretty major error which made it through to production somehow. I realized after that there was in fact a lot of edge cases I didn't consider (the change affected other things like paginations, graphs, etc.) and later had to push a quick fix and another patch with a different design implementation.

A random word of wisdom for myself:
> Know your enemy, know his sword.

P.S > I gotta preserve my 4 month of fame on the company site ✨
![I'm in the company website](the-remote-internship/companyPic.gif "=400x400")