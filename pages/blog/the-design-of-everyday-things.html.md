---
title: Bookclub - The Design of Everyday Things
publish_at: August 28, 2021
layout: post
tags: book_summary
---

> "I dream the renaissance of talent... Design is an equalizing tool. All that is needed is observation, creativity, and hard work"

It's easy to look away at all the little tools we use everyday, whether they help you or set you up for disaster/frustration. When it comes to products around me, I'm the type who'd take the responsibility to learn the tools, read the documentation, the manuals, etc. And if things go south, then I should blame myself for not doing that diligence, … right?

⚠️ Nope! it's never the user's fault, but an indication that the design had failed you by allowing you to inevitably make that mistake. There's never really a 'human error' - it's a 'system error' (making error is part of our nature as humans. System design should take this into account).

This book offers a whole new perspective to all designs in the world. By learning to observe little details, you realize that someone had at some point thoughtfully put them in and that's super fascinating to think about. It means that I should learn to take the status quo with a grain of salt and acknowledge that designs could be 'better'.

Like all else in my 'bookclub' blog series, these are my notes of what I think is important/interesting to me with an additional sprinkle of my own words and thoughts. I clearly skipped a lot of part/details in the book - so I encourage you to read the book if you're interested! Honest review, I think this book is unnecessarily long which took me months, so be prepared :)
### Structure of the blog
Now this is a long book, so please excuse my long notes. Note that the way I structure my notes does not align with structure of the book. (I designed them based on my mental model for personal [ease of retrieval](#knowledge-in-the-world-not-the-head) 😉). Or you could jump to the 'Extra Thoughts' for my review.
1. [Examples of Bad designs](#examples-of-bad-designs)
2. [What makes designs 'Better'](#so-what-makes-designs-better)
3. [Knowledge in the world, not in the head](#knowledge-in-the-world-not-the-head)
4. [Let's replace Human Error with System Error](#human-error-system-error)
5. [Psychology of everyday actions (understand human behaviors)](#psychology-of-everyday-actions)
6. [What makes design Hard](#what-makes-design-hard)
7. [Design Thinking](#design-thinking)
8. [Good Exercises/takeaways](#good-exercises-takeaways)
9. [Extra Thoughts](#extra-thoughts)


### Examples of bad designs:
  - Microwave/washing-machine that has too much functions/controls. Many of which I probably never used. Lack of understandability kills the purpose.
  - Badly designed code (error handling, code structure, lack of tests/monitoring…)
    - Programmers are designers 🤯
  - Badly designed systems let you make an error. Even worse are systems that induce you to make that error


### So what makes designs 'better'?

  - Discoverable (what's possible) & understandable (communicate what it does)
  - Make user feel in control, sense of mastery, satisfaction, pride. (affect emotional state)
  - 6 principle of design
    1. **Affordance** (what actions are possible): relationship between the object's property & capability of the user
        - And **anti-affordance**: the prevention of interaction / deliberate friction (e.g wall tilted rather than horizontal to discourage people from placing objects like cups)
    2. **Signifiers**: (things to help users perceive/where to find what's possible).
        - Words, graphics, signs, indicators, ..
    3. **Constraints**
    4. **Mappings**: (make controls [feel natural](#knowledge-in-the-world-not-the-head))
        - Natural mapping (cultural/biological). E.g. up means more, down means less.
    5. **Feedback**:
        - Delayed feedbacks make you feel unsettled
        - Bad feedback (distracting, uninformative, irritating) is worse than no feedback
        - Must be prioritized (important signals presented differently than non-important ones)
        - Sound: what can't be seen. Can be informative & annoying
          - Car horns used to alert others (not venting anger and rage)
          - Important signifier of presence of cars. Electric car adds artificial sound. But what sound? Governments and companies are working to find the standard. 💸
    6. **Conceptual model**:
        - Mental model of how user think the system work
        - Created through inference, manuals, interaction experience, ..
        - Good model allows one to predict it's behavior
        - Complexity is good. It is confusion that's bad (it's no longer complicated once a meaning/structure/understanding is in place)


### Knowledge in the world (not the head)
  - Most effective way to help people remember is to make it unnecessary.
  - i.e. 2 factor authentication: something you have + something you know.
  - STM (short-term memory): has problems of interfering tasks
    - Solution: use different modalities/channels that don't interfere (sight, sound, touch, heraring, location, gestures) to present information
    - I.e. driving systems presents haptic / audio feedback to not interfere with visual task.
  - LTM (long-term memory): has problems in organization / retrieval process.
    - Knowledge in head is knoweldge in memory.
    - Solution: provide structures to transform arbitrary things to a meaningful interpretation (conceptual model)
  - Relying on models & approximation to avoid detail
    - It's wrong to think that we should always practice mindfulness. Civilization advance by extending # operations without thinking about them
    - People should focus on high-level purpose, machines should focus on details.
    - To enhance memory/accuracy: "One dull pencil is better than 2 sharp minds"
    - I.e. Socrates argues that books will diminish memory and the need to think (you can't argue/debate/question a book). Will tech make humans incapable?
      - No. Weak human + machine + good process are superior. It is things that make humans smart (not the unaided mind).
  - Use reminders:
    - Ideally there's a <u>signal</u> (at the right time & place) & a <u>message</u> (just writing things down is a message without a signal)
    - The sheer # of reminder methods indicate that it's a great need, with no 1 solution yet.
  - Natural mapping
    - Controls are arranged so its relationship with the controlled is obvious and contained in the world.
    - i.e. prevent you from selecting wrong button, dial, lever, switch to turn lights on, airplane operation, automobile.
      - Touch-screen GUI tend to have great mapping, but lack physical affordance (i.e. can't use your elbow if hands are full. Maybe voice command?)
    - Natural mapping vary with culture: expect some confusion time to adjust
      - i.e. Should scrolling move the text or window? Scrolling & arrow keys used to move the window. But then touch screen came and its only natural to move the text with fingers. Causes confusion. Apple switch scrolls to moving text model.
      - I.e. which side of road cars drive on in different countries.
    - But sometimes it's better to have activity-centered control (group things by activity rather than by device) to have less interruption (i.e. auditorium control).
      - There's trade-off between ease of activity vs customization (with edge cases/demand in requirements you still want to allow some manual control)
  - 4 Types of Constraints: clues to limit affordance
    1. Physical: 🔲▵⃝
        - Why not design connector so that it's impossible to error. (USB-C)
        - Design keys/plugs that work regardless of how they're inserted (it's hard to tell in dark environments) (i.e. car keys)
        - 'Forcing function': Failure in one stage prevents next stage from happening. (e.g. Authentication, start car engine, atm card need to be pulled out before money is delivered)
          1. Interlocks: force proper sequence of operation.
              - i.e. Car interlock, opening microwave while it's on, restroom pull-down shelf that blocks way out until you take all your things
              - i.e. 'dead man's switch': release switch if operator die / loose control
          2. Lock-ins / lock-outs:
              - Lock-ins keep operation active (i.e. prompt when you exit file without saving, company try to keep you in their ecosystem), while lockout keep things out of danger (i.e. cover on electric outlet)
    2. Cultural 👺
        - Conventions and allowable action on how to behave in social situation
        - Standardization
          - Simplify life, but they hinder future developments. (should be last resort)
          - i.e. Most use base-10 arithmetic. But many other uses 12 or 60. Like 12 in a dozen, inches in a foot, hours in a day, months in a year, seconds in minutes, seconds in degree, minutes in hour 🤯..
    3. Semantic
        - Has a reasoning. It will change. (i.e. rider sit in front, would red light be meaningless in the future with automated cars)
    4. Logical
        - Logically make sense. Natural mapping is a logical constraint.


### Human error => system error
  - When it's human error, we tend to blame then ignore. But when it's system error (machine stops working), we don't only find the broken part, we investigate why it break.
  - We should treat all failure the same way - find fundamental cause & redesign system.
    - Ask 5 whys & seek the root problem ("Never solve the problem I am asked to solve")
    - Problems have to be discovered (dig the surface): Real world problems don't come nice/neatly packaged like those you see in school/exams.
  - Errors caused by social/institution/time/economic pressures
    - Examples
      - Repetitive, precise tasks are opposite to what people are good at (creative, constructive, exploratory, seeking new opportunities).
      - In many industries, operators must push boundary (or violate rules) to get things done. If they manage, they're praised. Otherwise, the same behavior is blamed.
      - Cheating in school, not reporting faults, Individual/institutions that don't admit/hides faults, pressure from higher-ups
      - Scuba divers weights are expensive. If they release it and make it back safe, they can't prove that it was necessary - causing embarrassment / social pressure
    - Solutions:
      - Reward good behaviors 😌. Add visible metrics.
      - Go through checklist ☑️ in pairs:
        - Resisted by many cultures who feel it questions their competence.
        - Putting sequence in unordered task is bad, since they might skip it thinking to come back later (benefit of digital checklist > printed).
      - Thank those who admit error and encourage ease of reporting.
        - Goal is not to blame, but to fix/prevent the error
        - Random thought: If we blame government/public-figures, will they reduce transparency. Rather than blaming, we should fix them collaboratively as a society (or healthy feedback).
      - Jidoka philosophy: punish those who don't report errors. Make it an expectation so it's not discomforting for the reporter
      - Semi-anonymous reporting process through Trusted Body
        - Pilot report error to NASA with their identity so NASA could request more information. But when publicly released identity is stripped. (this is hard for medicine since there's no equivalent institution)
        - Default to open internally, default to secrecy externally 🦐
  - 2 types of errors
    1. **Slips**: Execution don't go according to plan.
        - i.e. forgetting to turn off stove, mix similar tasks together
        - Slips occur more frequently for skilled people (autonomous tasks). Happens subconsciously so simply 'paying closer attention' won't work.
        - To prevent for
          - Capture error: Ensure control are distinguishable for different purpose (many airplane controls are shape coded)
          - Memory error: put reminders / minimize # steps / forcing functions
          - Mode error: avoid use of modes. If it's necessary, equipment should make it obvious which mode it's on.
            - <del> Beeping/flashing to convey varying information (bad feedback) </del> Use different colored lights & rich sounds
        - To recover/mitigate
          - Make sure errors can be undone
          - Good/fast perceptible feedback on state/nature of action performed
    2. **Mistakes**: Plan is wrong.
        - (A) In Skill based behavior: automatic (prone to just slips)
        - (B) In Rule based behavior: go by the book / experience
            - Potential cause of error
              - (A) Misdiagnosis of situation cause you to pick the wrong rule
              - (B) Rule is faulty (wrong assumptions, incomplete knowledge, …)
              - (C) Outcome is incorrectly evaluated (wrong feedback)
        - (C) In Knowledge based behavior (problem solving novel situation)
            - Good conceptual model is essential
            - Maybe machines (AI decisions/modeling, search, reasoning technique) can cooperate with humans on these complex tasks.
  - Hindsight is superior to foresight
    - Difficult to avoid & detect. Often there's too much information.
    - Problems are obvious after the fact. But foresight is hard.
    - How does one prioritize which of the many failures are urgent, to attend or ignore?
    - Common problem in industries: (mine as well ☹️. i.e. fraud cases) Is the swamp of huge data. If all decision is questioned, nothing gets done. If not questioned, there's rare but substantial penalty.
    - Challenge: design/present system in ways that's easy to monitor, interpret, questioned
    - In hindsight, all events are logical. But not during the incident (i.e. high workload, emotions). Good incident analysis takes a long time because they consider all information/history - those that seem irrelevant could be critical. Unfortunately, public wants answers fast (public announcements are incomplete).
  - Swiss Cheese analogy: 🧀 No single cause to blame
    - Accidents are often the result of many errors. (there are more than 1 way to solve it!)
    - The conditions for accidents must align for it to occur
    - Implies a solution:
      1. Add more defensive layers
      2. Reduce #/size of holes
      3. Alert when holes line up

### Psychology of everyday actions:
  - Psychology affect how human interacts and feel emotionally about the product/experience
  - Design sets off emotion like frustration, anger, helplessness, despair, hate. Or it could induce pride enjoyment, control, pleasure, love, attachment.
  - Action cycle (use of the product)
    ![Action Cycle](the-design-of-everyday-things/actioncycle.png "=400x400")
    - Action starts from 'Goal' (goal-driven action) or 'World' (event/data-driven actions)
    - The circled transitions are opportunities for product enhancement. Radical ideas can come from redefining 'Goal' ⭐️ (finding the core user need. ie. root cause analysis)
  - Cognitive thoughts & emotion affects each other in both directions through hormones
    - Cognition make sense of the world, emotion assigns <i>value</i>
    - Without good emotional system, it's hard to make choices/judgements. Without cognitive system, one is dysfunctional. (you need both)
    - In tense situation, hormones bias the brain to <u>focus</u> on certain parts of environment, muscle tense up for action. In calm situation, hormones relax the muscles and bias toward <u>exploration & creativity</u>.
      - When calm you're easily distracted but able to piece together knowledge.
      - When tense, you get things done but too much gives you tunnel vision.
  - 3 levels of processing
    1. Visceral: Unconscious and automatic.
        - Assess the situation without context/history. Nothing to do with usability of design. It's about immediate attraction/repulsion.
    2. Behavioral: Learned patterns. Details are mostly unconscious.
        - Drives expectations (which leads to tension/relief). i.e. Feels lack of control from bad feedback.
    3. Reflective: Slow reasoning & conscious decision.
        - After the action/experience, they assess the cause, and leads to guilt/pride/blame/praise.
        - Most important to designers because these emotions lasts in their memories.
    - (2) & (3) creates understanding, but enjoyment requires good design at all 3 levels.
  - 'Flow State': occurs when activity slightly exceeds skill level to require full attention. State between low expectation (cause apathy) & high expectation (cause anxiety/helplessness)
  - People believe their conceptual model, so they <u>tend to blame the action than the approach</u>.
    - With no/delayed feedback, one tend to assume that the action wasn't done correctly. So they repeat the action (with more force).
    - I.e. this is disastrous in emergency exits, failure to escape a pulling door has caused numerous death. Thus, many countries set law for pushing doors to exit & panic-bars allowing them to push their bodies against it (affordance). 🤯
  - 'Learned helplessness' & false blame
    - Situation when people experience repeated failure at a task, then decides that the task cannot be done (by them) and stop trying. Reinforces failure.
    - i.e. when you have trouble using technology, think no one else is having the same problem, they blame themselves
    - i.e. Math phobias: once you fall behind, it's hard to catch up. Not because the material is difficult, but it's taught/designed so that one stage hinders further progress. (once failure starts, you end up generalizing blame to all math)
    - Solution:
      - Positive psychology: Replace 'failure' with 'learning experience'. We learn more from failures than successes
      - Eliminate error messages, and provide more help/guidance
      - Never let people start over if there's problems. Don't obstruct their progress. <u>Rather than incorrect, they're partially correct</u>.


### What makes design hard:
  - Reminder: people are not machines. They are imaginative/creative creatures
    - People aren't born to be precise and accurate
    - It's the duty of machines/design to understand people (not our duty to understand the arbitrary rules of the machine)
  - Accept human behavior the way they are. Not the way we wish it to be. And human behavior can be pretty hard…
  - As a programmer myself, I should learn not to expect users to be as logical as I am
  - Always assume that people will make errors (Murphy's law: "anything that can go wrong will go wrong."). Handle the non-happy parts.
  - Adding more functions simplify our lives, but at the same time complicates life by making device harder to learn/use. (ie. Smart devices)
  - Must take into account interfering activities while using the product
  - Some designs are hard to iterate (i.e. large production projects with big risks/scale)
    - Prototyping needed: models, 3D printing, sketches, VR aids..
  - Market-driven pressure 📈 (following trends rather than user needs)
  - 'Featuritis': pressure to add new features/complexity in every release (due to demand, competition pressures, market saturation). No incentive to remove old ones.
    - Problem: Lose it's usability/understandability over time.
    - Solution: <del>comparing features with competition to find weak points</del> concentrate on your strong points & strengthen them. Ignore the voices & focus on user needs.
  - Stakeholders focus on price/budget rather than usability
  - Resolving conflicting requirements between subteams:
    - Everyone (or leaders from disciplines involved) must be present in the entire design process, to hear all concerns as soon as they're discovered & find agree on the design
    - Otherwise sub-teams will change the requirements without other sub-teams knowing.
  - Hard to accommodate everyone: Build different versions of the product
    - Design assistive devices as fashion statements. (i.e. the walker)
    - Wide variety of people benefits from features that accomodate special needs.
  - Tech change rapidly, but people & culture change slowly. Fast to be invented, slow to be accepted, even slower to fade & die.
    - Incremental innovation (slow improvement) vs radical innovation (often by collapsing industries to one)
  - Unnecessary designs
    - In consumer economy, we're surrounded by objects of desire, not objects of use.
    - Marketing scheme deliberately makes things seem out of style.
    - Companies make things fail and replaceable over short lifetime.
  - Environmental costs (of material, manufactoring process, distribution, servicing, repairs) are part of design. Design considers all things.


### Design Thinking
  - Agile / iterative process because people are unaware of their true needs/difficulties.
  - Double diamond model: discover/observe (expand), define/ideation (converge), develop/prototype (expand), deliver/testing (converge)
    - Design research != market research. Design focus on need/use, whereas marketing focus on purchasing decision.
    - Big Data is not effective for design research (it doesn't reveal user's real needs, desires, reason for their actions)
      - It reaches a large number of people, but the insights are shallow (a tradeoff). What people say/do often won't match with what they need.
    - Brainstorming: crazy wrong ideas can still contain creative insights. Avoid premature dismissal of ideas. Question the obvious.
    - Prototype: answers whether we're solving the right problem.
    - Observe their activity without distraction (i.e. behind them, video, group shadowing sessions!)
    - Requirements: built from observations. Don't build them from the abstract or asking them what they need.
  - Activity-centered design: Design for the activity - not individuals. (To satisfy many users)

### Good exercises / takeaways
  - Walk the world examining details of design
    - Next time you have trouble (figure out shower control, kitchen appliance), ask and challenge yourself how it could've been better.
    - If you come across well-designed that is effortless to use, stop and examine
  - Try things before you buy! Can you figure things out easily? (problems are not your fault)
  - Poka-yoke technique: DIY adding signifiers, forcing functions, affordance, constraints… (e.g. putting labels around confusing switch, covering critical switches..)
  - Voice your fight for usability (give support to good designs, provide feedback, boycott, etc)


#### MISC:
  - 'skeuomorphic': the technical term for incorporating old idea to new tech even though it no longer play a function, except to provide comfort/familiarity for transition.
    - i.e. Use artificial engine sound for electric vehicle, folder/save icon, cards remain horizontal from back-in-the-day swiping

### Extra Thoughts:
My favorite part of the book was probably understanding the [types of errors humans will make](#human-error-system-error) - and how designs can help to prevent/mitigate them using the 6 principles of design (like conceptual model, feedback, ..). In that section it brushes about 'hindsight is superior to foresight' which really resonates with me - having too much information is something I struggle with everyday and I hope that is something I can improve. It also helps acknowledge that the world is more complex than we think they are. A problem will arise from many different factors (cheese holes) and it's hard to identify/forsee them coming your way. But this also means that fixing 1 hole might fix many potential problems, and there will always be work to do 👷‍♂️.

My second favorite part is the discussion on [putting knowledge in the world](#knowledge-in-the-world-not-the-head). The world is so complex, it's such a relief to know that putting knowledge in the world implicitly through good design can really unleash our minds for more important tasks that humans are good at.

I've also built a growing respect for good designs and how critical they are in our lives. The intentional design for emergency doors, affordance/anti-affordance, forcing functions, putting phsyical constraints, was a few of the many examples I've never payed attention before. I hope this list of examples will continue as I try to be more mindful of the designs of everyday things.

As a programmer/builder, I am totally inline that design is an infinite game that should continue to be played, improved upon, and participated by everyone. Good designs will truly bring out true potential in humans.