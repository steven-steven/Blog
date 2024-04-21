---
title: A Retrospective of my 4 months sprint at Loblaw Digital
publish_at: December 26, 2019 01:40
layout: post
---

Wrapping up an awesome co-op term (4 months internship) at Loblaw Digital! :confetti_ball: This is my 5th time interning, and I couldn't be more grateful to land a position as a software developer on the API Team for online grocery (PC Express) at Loblaw Digital.

> "We do not learn from experience... we learn from reflecting on experience" - John Dewey

Working hard and gaining experience is important. But I think reflection is equally (or if not more) critical when it comes to effetively developing skills and aligning myself to the bigger scope. Similar to what we do at the end of a sprint in Scrum, I would like to take a retrospect on my overall experiences, what I achieved and learned in the process, feedbacks I had recieved (what went well and what did not), as well as how I will decide to improve them for the upcoming year (next sprint).

![marketplaceLaunch](/assets/blogAssets/a-retrospective-of-my-4-months-sprint-at-Loblaw-Digital/marketplaceLaunch.jpg "=400x400")

## Table of Contents

-   [About Loblaw Digital](#about-loblaw-digital)
    -   [Culture](#culture)
-   [My Team](#my-team)
    -   [The Job](#the-job)
    -   [Things I love most about our work processes](#things-i-love-most-about-our-work-processes)
-   [Things I must improve](#things-i-must-improve)
    -   [Understanding the Problem](#understanding-the-problem)
    -   [Ask the WHY](#ask-the-why)
    -   [More Active](#more-active)
-   [Other things I tried for the first time this term](#other-things-i-tried-for-the-first-time-this-term)
-   [Last Words](#last-words)

## About Loblaw Digital

Loblaw Digital is a part of Loblaw Companies Limited that is dedicated to create the digital experiences of many grocery banners in Canada like Loblaws, No Frills, Shoppers, Joe Fresh, Zehrs, Real Canadian Superstore, and more. The digital experiences cover many things including (at least the one that I know of) the operation of websites for all those banners, PC Optimum programs, Online Beauty by Shopper, PC Express click-and-collect services, and their recent release of the online [Marketplace](https://www.cbc.ca/news/business/loblaws-new-online-marketplace-1.5368455).

To be honest, I didn't know much about the company early on because I've never shop groceries online. But during the interview, I remembered the interviewer said something along the lines of:

> "Currently, 75% of Canadians are within 10 minutes of one of the almost 700 pickup locations." - [March 2019 by a risnews article](https://risnews.com/loblaw-redefining-retail-operations-ai)

It's insane how fast they expand and how large the impact they created on many Canadians. By then, I was excited and convinced that this is the kind of environment that will help me grow. And well, first hand experience... it did!

### Culture

While it's hard to pinpoint 'a good culture vs bad culture', personally for me it's all about the feeling of being part of the family. The office is quite crowded, but everyone was super friendly and fun to be around.

There is all-hands roundups every Friday where everyone in the company gathers to recognize the progress made and give shout-outs to anyone who had done something remarkable. It was entertaining, there's free food  :doughnut: ; and I think what's more important is that we're celebrating the milestones achieved and giving everyone the big picture of the impact our work has created and progressed. :trophy:

Moreover, all employees are divided into 'houses' (I was in one named ' Panther') where we compete for points during company-wide events such as Hack-Days, food donations, and christmas party dance. It was very hype and a great opportunity to work with people outside of my department.

There are also slack channels for everything - even non work related. I was invited to go for ice skating (my second time skating) and it was gold. Not that I was good at it (far from good), but everyone was welcoming and such great people. If I had to choose one reason why LD is a great place to work at - it's the people.

## My Team

To me working in the PC Express API team was like winning a lottery :admission_tickets:. (Note that the application in WaterlooWorks portal was for general application, so I didn't know which team I was going to be on until the first day of work. I still think they should've specified). My past internships were majorly web-related, but this was the first time I got to work fully on backend.

With the new Marketplace launching, the team works to combine the grocery and marketplace services into a single API. We have around 7 devs (including our team lead) and 1 project manager in the team. In the beginning I instinctively ask my mentor for technical questions and to my team lead for more task-related questions. But later I realize that I'm free to ask anyone in the team and they were always super chill and approachable people. Overall I think the people I worked with has made my whole experience at LD worthwhile.

### The Job

The team was still in its early age (about a year), and I got to work on interesting tasks such as load testing with Gatling and investigating the bottle-neck, routing our API in Apigee, creating visible metrics in Stackdriver using the data from the Apigee logs, implementing a custom Jackson Serializer to serialize/deserialize Big Decimal payloads, mapping API error codes, custom MDC logs, etc.

Truthfully, I think I enjoyed backend more compared to front-end (subjective from my experience), because it feels like a bigger scope of challenging problems to solve. Also, we were using Java Spring Reactor framework, and it was also one of the cleanest code I've worked with. So although things were alien :alien: in the beginning, I got the hang of it pretty quickly.

Another thing I love about the work is that all devs write their own tests. No QA! (my first experience without one). I like it because it incentivise everyone to write proper tests, and since I've done QA in a previous internship, I know the pain of manual testing :wink:. We have automated pipelines which includes SonarQube that ensures code coverage for our tests. I got to work on writing unit and integration tests using mainly Mockito.

### Things I love most about our work processes

1. **Abundance of work** - Not saying that I was overworked (I felt totally no presure for deadlines). Just saying that there were a lot of interesting tickets in the backlog. This was great and I never felt like I didn't have anything to work on.
2. **Choose my own tickets** - I was given complete freedom to choose the things I'd like to work on, which was awesome! When I'm ready to pickup a new ticket, my team lead would just refer me to the backlog and let me choose from the list (apart from times when there are major or blocking issues). It felt wierd in the beginning since in some of my past internships, I was assigned tickets by my mentor. But this certainly allows me to take initiative and become more motivated in my learning.
3. **Treated like a full-time** - Honestly, I felt like it was a con in the beginning. No one really told me how I should do things unless I asked them. I realized that I had to be more proactive in asking questions rather than being reactive (wait until someone tells me to do something). Later (once I understood the job and the tools better) I begin to realize this was a huge plus. No one micro-manages my work and come up to ask what I was doing or if I have any problems. I worked more independently and when I have confusions I was the one who proactively approach them for confirmation and feedback - which I think is definitely the right way to go.
4. **Daily Stand-ups and bi-weekly retrospect** - This was the team huddle to discuss the problems that we are solving. It was a chance to keep touch with everyone in the team. Our bi-weekly retrospect consist of reflecting what we've done well or need improvements for the next sprint, and we also take this time to vote story-points for the tickets. It was fun, but I was often struggling to understand and keep up with the discussion. I think I should be asking more questions.
5. **Monthly 1 on 1 sessions with my team lead** - This was the best one-on-one I've ever had with a mentor. Unlike many I've done in my previous internships where the feedbacks was super generic, this time my team lead gave me super specific ones. He identified specific things that he thinks I need to improve on, things I did well, and we discussed things such as where I think I was struggling and my personal goals. Furthermore in midterm, he outlined attributes he see from co-ops in order to get an 'Outstanding' in the final review (things like doing code reviews, finding bugs in the code, and being a subject matter expert). An Outstanding is given to someone who went above and beyond. It is subjective to the grader by nature, and I think a lot of employers are notorious for never giving one. So it was very pleasant to hear his standards and attributes of an 'Outstanding' co-op.

## Things I must improve

### Understanding the Problem

There was this one ticket that I did about improving error logs. I knew that for one API request, there are multiple logs, each corresponding to a layer in the api (if there's an error and it gets logged in the consumer level, the service level will also log an error but with a more generic message). The ticket wants me to improve the error logs in order to trace back to the cause. I looked into it and I was convinced that there was nothing wrong. If I want to know the cause of let's say a 500 error, I would either look at the stack trace or previous series of logs to see the cause. They were all available. So it took a couple of back and forth between me and my supervisor, because I didn't understand what I had to do. There weren't clear instructions.

Later I learned that the problem was that we need a way to know if two logs are related. There is a field in the log called '*correlationId*' that is unique for every request and some of the logs are missing this information. So from there, I knew what the solution was - '*make sure all logs have a correlationId*'. Everything became clear.

From this experience, I realize that I have the tendency to jump to solution rightaway. I was so used to being given tickets of the type '*fix this*' or '*implement this*'. When faced with a vague issue where there was no proposed solution or indication of a desired output, I was lost. :dizzy_face:

So instead of struggling to find 'what I had to do', maybe I should understand the context before hand. Get as much information as possible before coming up with the solution. The Problem especially, was something I should've clarified ahead of time.

### Ask the WHY

This was probably the best advice I've had. Often I wasn't looking at the bigger picture. Given a task/problem, I thought of the solution that would fix it, and then code! I was only thinking of the what and the how. But when it comes to going beyond, I need to ask myself **why** I'm working on it. In other words, to look into the bigger picture.

For instance, with my previous example on improving error logs, the problem was that some logs are missing correlationId. If I were to ask myself why I'm doing this, I would get to see bigger problems like '*to improve error log*' or '*to trace back the root cause of an error*'. From there I will be able to think of other possible solutions that the reporter didn’t mention about in the ticket.

Sorry if I confused you about this wierd example, but I'm sure there are lots of other cases where I was totally drilled down on solving the ticket. But point is, if I can look at the bigger picture maybe I'd figure out a better solution than was proposed, or even find bugs in other areas of the code.

### More Active

My mentor once mentioned that he believes there are two ways to move up in the career. I can either be really good at something, or communicate my ideas really well. Personally I think I am lacking the latter. Due to my introversion, I found myself not talking a lot and sometimes not expressing my thoughts well. For next year, I'd aim to improve my communication skills, by practicing more. I'm also thinking of taking SPCOM223 course next term as an elective (public speaking course in UWaterloo).

## Other things I tried for the first time this term

-   Learned GO (the board game)
-   Learned 3x3 Rubiks Cube
-   Learned Skating :ice_skate:
-   Learned Rock climbing :man_climbing:

## Last Words

This has been a transformative term for me. I met with some of really good people and great mentors. I feel like I had accomplished a lot thanks to everyone who had been patiently mentoring me, reviewing my code and giving me great feedbacks along the way. Would :100:% recommend Loblaw Digital - a wonderful place to work. :sparkles:

