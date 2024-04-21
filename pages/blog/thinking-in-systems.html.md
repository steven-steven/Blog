---
title: Bookclub - Thinking in Systems
publish_at: October 24, 2021
layout: post
---

When you think about it, life is full of systems. The control of your room temperature 🌡, your brain 🧠, body 🤸‍♂️, the hiring and growth of a company📈, a country🏝, government bodies 🧑‍⚖️, population 👨‍👩‍👧‍👦, forest 🌳, garbage 🗑, shipping 🚚, financials 💰, markets 🍑, pandemic 😷, or even one that I think of most days - the software I build/maintain 🧑‍💻.

Our entire ecosystem is a systems within systems, all interconnected. Thinking in system helps one understand, manage, change, see opportunities to leverage. It can be a superpower and that's what this book is about; an intro to Systems Thinking.

Like all my bookclub blog series, this is meant to be a summary of notes I took from the book. All credits go to the author and I highly recommend this book! If you're just coming in and want to know my thoughts feel free to jump directly to the [last section on final thoughts](#final-thoughts).

It's something I want to practice thinking more of. The world is complex, interconnected and changing. You have to see them through all sorts of lenses (all valid and complementary). The more lenses you have, the better. (analogy: story of blind men trying to perceive elephant). System's thinking, happens to be one of those lenses.

📖 'System': Elements interconnected to produce patterns of behavior over time.

## Table of Contents

1. [Element, interconnection, function](#3-things-a-system-must-have-order-of-increasing-importance)
2. [Stock, Flow, Feedback](#fundamentals)
3. [Competing feedback and constrained stock](#examples-of-common-system-models-and-their-characteristics)
4. [Ideal systems: Resilient, self-organized, heriarchical](#3-characteristics-of-highly-functionally-systems)
5. [System Surprises](#beware-of-system-surprises-and-how-to-navigate-them)
6. [System Traps & Opportunities](#system-archetypes-traps-opportunities)
7. [Leverage Points](#leverage-points)
8. [Living in world of system](#living-in-world-of-system)
9. [More Wisdoms/Tips](#more-wisdomstips)
10. [Final Thoughts](#final-thoughts)

### 3 things a system must have (order of increasing importance)
1. Element
    - Easy to notice, but can also be intangible (e.g. pride, expertise, confidence)
2. Interconnection
    - Holds elements together, often by flow of information/events
    - Systems are more than sum of its parts. (1+1 > 2. Connection '+' adds value)
3. Function/purpose
    - Hard to notice. Purpose ≠ stated goals
    - Deduced from observed behavior over time.
    - Sometimes purpose aren't intentional, but conditioned by its elements. (consider behavior of all actors involved)

### Fundamentals
- 📖 Stock: Accumulated elements over time. Store a snapshot of the flow 🐃
  - Act as delay buffers. Stock change slowly because flow < ∞
    - Pros: (1) allow stability, time to maneuver, experiment. (2) decouples inflow & outflow rates so it can maintain imbalance if one suddenly spikes.
    - Cons: slow feedback/impact-review. Late information/action can be ineffective
- 📖 Flow: Rate of stock goes in/out🚰
  - We tend to focus on inflow > outflow. Remember there's 2 ways to fill a bathtub. (You can grow by investing new stock OR extending the lifetime of your existing stock)
  - Use time graphs to study behavior trends (purpose), instead of focusing on each event
- 📖 Feedback loop: Changes the flow (bidirectional) depending on size of stock
  - Many decisions are feedback (made in response to some level of stock/info)
  - <u>Balancing feedback</u> (self correcting & goal seeking. Diff current stock with goal)
  - <u>Reinforcing feedback</u> (grow exponentially. When stock can reinforce itself)
  - E.x. If A cause B, think 🧐.. how might B influence A, or A reinforce itself
    - i.e. If population growth cause poverty, is there a reinforcing feedback here? yes
  - Delays (time between making decision and action taken):
    - cause a system to oscillate (overshoot/undershoot your actions).
    - i.e. delay in a car shop inventory seems trivial, but if we talk about an entire automobile industry's inventory, ordering too much/little affect downstream production of parts, material, jobs, stocks, delivery, construction, each with their own feedbacks (Economy/industries respond to each other through delays)

### Examples of common system models and their characteristics
- Competing feedback loops (stock with 1 reinforcing & 1 balancing loop):
  - Loop dominance shifts around (i.e. grow exponentially, die, or reach equilibrium).
  - Models help system analyst explore 'what can happen' when driving factors change.
- Constrained systems (systems with >1 interacting stocks):
  - i.e. food, material, workers, pollution, are examples of stocks that constrain systems
  - These stocks are finite resource. They'll run out sooner or later. (balancing loop)
  - The constraining stock can be renewable/non-renewable
    - Non-renewable resource (stock-limited): Entire stock is available at once, can be extracted at any rate. A slow growth allows time to develop alternatives.
    - Renewable resource (flow-limited): If regeneration rate == extraction rate.
  - e.g. a fishery economy / logging industry (renewable constraint)
    - Affected by price, regeneration rate, efficiency of fishing technology.
    - Advanced tech cause greater oscillations (regeneration cycle takes longer after collapse) by scooping the last few. Can drive resource to extinction
  - Key: Place/strengthen balancing feedback before it's constrained by these stocks

### 3 characteristics of highly functionally systems
1. Resilience:
    - Ability to survive and persist within variable environment. Can recover self-repair. Many feedback loops in place to restore stock if one fails.
    - Resilience != stability. Even if system has been stable, resilience can't be noticed until the system breaks down (i.e. feedback damaged, or limit exceeded).
    - To be resilient is to have a big playing field / safety net / immunity. More freedom to play/move around safely, make proactive decision, and less reactive.
2. Self-organization
    - Capacity of system to make its structure more complex (learn, diversify, evolve).
    - Threatens current structures / stability, but drives new innovative ways and surprises (infinite game). Requires freedom, experimentation, some amount of disorder.
    - Seems complex and magical, but wide variety of self-organizing structures are formed by few simple rules about how to subtract/add from itself under certain conditions (i.e. fractal geometry, DNA, GA..)
3. Hierarchy (subsystems arranged within systems)
    - Breaking down complex systems to smaller 'stable' substructures allow time required to evolve.  Help subsystems do their jobs better.
    - Loosely coupled, reduce the amount of information any part of the system need to keep track of. (imagine Microservice or domain driven design DDD)
    - Issues:
      - Alignment: If subsystem's goal > system's goal, the behavior is suboptimal.
      - Control vs autonomy: Have enough control to achieve coordination for system goal, and enough autonomy to allow self-organization.

### Beware of System surprises and how to navigate them
System thinkers go back & forth between structure (mental model of stock/flow/feedback diagram) & behavior (event time graphs). Our mental model will never perfectly match the real world. Common cause of surprises:

- <u>Bad mental model</u>

  - Problem: pay too much attention at system events rather than their history/behavior.
  - Don't be fooled by events (even if they’re most visible). They are just outputs of system black-box. You need to look at event over time (i.e. time graphs, Datadog).
  - Flaw of statistical math equation: Input-output model assumes flow affects flow. No, flows are independent. Its doesn't consider the stock and how they affects the flow. Could work short-term if the system don't change.
- <u>Non-linearity</u>

  - We think 2x action cause 2x response
  - Non-linearity initiate complex behavior, shifts dominance in loops, and switch system behavior to completely different mode.
  - e.g.
    - soil erosion don't affect crop until it reach the tipping point
    - too much advertising can turn interest into disgust
    - insecticide kills pest which indirectly replace natural predators of pests (weaken the balancing loop) and cause uncontrollable growth if you remove it.
- <u>Clouds</u> (Drawing nonexistent boundaries)

  - We try to draw boundary in naturally boundless system.
  - Need to invent boundaries for clarity/sanity, but don’t forget that we artificially created them. (include them when needed)
  - Examples:
    - When source of materials are assumed to be abundant and isn't included in the system boundary, a sudden shortage will 💥.
    - Landfills fill up quickly.
    - Traffic -> highway -> attract house development -> more cars -> traffic
  - Create boundary based on the problem/discussion, not boundaries our minds are used to (national, public/private responsibility, context across teams, etc)

- <u>Limiting factors</u> / bottleneck / constraining stock

  - e.g. Capital, technology, clean water, clean air, dump space, energy
  - Most important system input is one that's most limiting
  - Growth change what is limiting. To monitor 'growth' is to continuously monitor/foresee potential limiting factors. System grows -> another factor becomes limiting.
  - Note: The choice is not to grow forever (impossible), but to decide what limits to live within (self-imposed limits). If you don't, the environment will enforce the limits for you (system-imposed limits)

- <u>Delays</u> (All stocks are delays and most flows have delays)

  - Some foresight is essential, to prevent being reactive to the problem. Account for the duration before an actions eventually take effect.

- <u>Bounded rationality</u>

  - We all make rational decisions with info we have. Incomplete/delayed information from distant parts of the system lead us to under/overinvest.
  - Problem: We don't know what others will do, we can't foresee the impact of our action on whole system, so we stick with the limited info we have. We make non-optimal decisions (i.e. misperceiving risk, discounting the future long-term, filter out info we don't like, …)
  - If you switch position with someone whose behavior you never understood, it's unlikely that you'll transform system with your old perspective.
    - e.g. Being a manager, you'll see labor as cost to minimize rather than a partner
    - e.g. Being poor forces a short-term rationality
    - e.g. Being a fisherman less-informed on fish population, you will overfish
  - Note: bounded rationality is not excuse, but it lets you understand why behavior arise and blaming the individual rarely helps the outcome.
  - Solution:
    - Sharing context (more complete, timelier information) lets everyone enlarge / step-out of their bounded rationality, and start acting for the good of all.
    - Redesign system to improve information, (dis)incentives, goals, stresses, constraints on specific actors

### System Archetypes: Traps & Opportunities
More than surprising, some systems produce troublesome behavior. We call them 'archetypes'. Are 'traps' because standard responses (i.e. blaming, disciplining, firing, pulling levers harder) often won't fix structural problems, but are also 'opportunities' to improve the system
- ** Fixes that fail / Policy resistance **
    - Balancing loop can be good or bad (depends on what it persists).
    - Problem: each system actors are misalligned (bounded rationality)
      - E.g. cutting drug imports (moves the stock in one direction) causes other actors to double their efforts to pull back (increase price/profit and evade the borders)
      - When everyone pulls in all directions, it takes effort for everyone. (Need mutual trust to let go, calm down and look into the feedbacks)
    - Option: Find a common goal to break out of bounded rationality.
      - e.g. basis for population policy shouldn't be family size and abortion laws, but quality of child care like healthcare and education.
- ** Tragedy of the commons**
    - Under their best interest, everyone exploits the shared commons
    - Resources are limited & erodible when overused (less resource makes it harder to bounce back)
    - Delayed/missing incentive/feedback for users to cut back. The user has everything to gain and keeps growing. The system make selfish behavior convenient/profitable
    - Option:
      - <u>Educate & exhort</u>: social pressure or morality. (Unreliable for those who don't respect tradition/honor.)
      - <u>Privatize the commons</u>: have someone responsible for it (Strong feedback and reliable. But not always an option)
      - <u>Regulate the commons</u>: Enforce policing/penalty. Regulators must be trusted by community and have expertise to monitor resource and restore missing feedbacks. Some mutual coercion helps to limit abuse but still preserve freedom to use. (i.e. bank, traffic light, parkin charges)
- **Drift to low performance / boiled frog syndrome**
    - When system not only persist bad behavior, but keeps getting worse
    - E.g. rivers gets dirtier, quality of education,..
    - In balancing feedbacks, {desired state} - {actual state} -> determines action.
      - Caveat: Actual state != perceived state
    - Problem:
      - We tend to believe bad news more than good news. They remember bad results, and dismiss good ones as outliers.
      - Perceived state also inspires desired state. If perceived performance slips, goal/expectation is allowed to slip.
    - This becomes reinforcing feedback downhill
    - Is a gradual process
      - Analogy: frog happily stays in pot if heat increase gradually. (Well.. It's not so much warmer than it was a while ago)
      - We forgot how much better things used to be.
    - Options:
      - Keep standards absolute regardless of performance (measurable)
      - Make goals sensitive to best performance (if I finish a V4 climb, that's not luck. You leveled up). You can reframe and turn it into uphill reinforcing feedback: "The better things get, the harder I'll work to make them even better"
- **Escalation**
    - State of stock depends on the state of another. (constant competition)
    - E.g. sets system to arms race, wealth race, escalate violence/loudness.
    - Is exponential (reinforcing). Leads to extremes surprisingly quick. Exponential can't go on forever, one will collapse.
    - Option:
      - Avoid getting in it. Refuse to compete (unilateral disarm) to interrupt the reinforcing loop.
      - Introduce balancing loop to control escalation (i.e. policy, parents)
- **Success to the successful**
    - Winners is rewarded with means to compete more effectively. Divide system into 'winners who go on winning' and 'losers who will keep losing' (reinforcing)
    - E.g. rich richer and poor poorer (in terms of income, assets, education, opportunity). Poverty will receive:
      - worse education
      - few marketable skills
      - low-paying jobs
      - can't borrow from banks to invest or gets charged with more interest rate through moneylenders
      - Pay higher prices because they only can afford small quantities
      - Relatively allocated low government expenditure because they're often unorganized/inarticulate
    - Analogy: 'competition exclusion principle' in Ecology
      - 2 species can't live in same ecology and exactly same resources. One will eventually win, multiply, and keep winning, driving the other to extinction.
    - Options:
      - Diversify (species exploit new resources and don't compete in same game). Won’t work if there's monopoly in resources.
      - Level the playing field
        - E.g. Game lets anyone start fresh, give handicap for weaker players
        - From simple morality, or practical understanding that losers who have no hope of winning could get frustrated enough to destroy the playing field.
        - Devise rewards that don’t bias next round of competition
- **Addiction (shifting burden to the intervener)**
    - E.g. drugs, industry depends on subsidy, farmers rely on fertilizers instead of soil health, economy rely on cheap oil, long-distance shipping that used to be carried with railroads/subway is intervened with highways (does it actually help? Not really)…
    - Problem: Intervener changes the perceived state. Not actual state.
      -  Can be a good thing if it increase ability to keep system in desired state or help actual state from declining.
    - Problem: The intervener don't last, because it doesn't solve the real problem
      - Intervener will step in to take some of the load. Everyone's happy until original problem reappears. Intervener applies more 'solution' then. Quick and dirty 😈
      1. Real problem is disguised and you fail to act on it quickly
      2. Intervention weakens the capability of system resilience
    - Addictive policies are so easy to sell and fall for.
    - Options:
      - Confront the pain / withdrawal. Gradually or add a non-addictive policy first (i.e. group support, oil alternatives).
      - Avoid it in the first place. Intervene in a way that helps the system strengthen itself to help itself (rather than taking over system, start with questioning the obstacles and system structure that cause it to fail). Remove friction, but not all friction. As an intervener, you want to eventually remove yourself
- **Rule beating** (when you get around the rule)
    - Evasive action to get around intent of system's rules. The rule isn't broken, but the spirit of the rule is broken.
    - Options:
      - Rule beating is a useful feedback to revise, improve, or explain the rules better. Turn the self-organizing capability (creativity) of system in good direction - align the subsystems.
- **Seeking wrong goal** (rule is followed, but produce result nobody wants)
    - Goal sets direction and determines success/failure for balancing feedback.
    - Badly defined goals produce unwanted results. A system won't produce behavior unless a goal is defined that measure that behavior.
    - E.g.
      - If measured by standardized test, system will output good performance on standardized test. But is it really correlated with good education?
      - Using GNP (gross national product) as measure of welfare. But is wealth produced by economy really good measure for health, education, joy, integrity, clean environment, wealth inequality, wisdom, everything that makes life worthwhile? It causes more consumption than efficiency, so high GNP isn't necessarily good.
    - Options:
      - Design indicator/goal that reflects the desired behavior. Reminder: Effort != Result. Should optimize the result (e.g. welfare) rather than effort (which could lead to something else. e.g. GNP)

### Leverage points
Find small changes that cause large behavior shift (silver bullet) && push it with the right direction/amount (use the bullet correctly). However, note that knowing them won't help a ton (it's hard to figure out how to use them). Leverage points simply help you think more broadly about the system.

> "Seems that mastery is less about moving leverage points, but more about strategically, profoundly, madly, letting go and dancing with the system"

The following are leverages listed from highest to lowest. Higher the leverage, the more impact, but the more the system will resist. (the book start the list with lowest leverage, but I have my preference 🙃, but it might make it confusing for others)

1. Transcending paradigm
    - Being unattached to paradigms (they're all just made up anyway).
    - Listen to the universe with open-mind. Look at the spacious possibility, and pedal in all directions since nothing is guaranteed (be flexible).
2. Paradigm
    - Are unstated assumptions and shared belief society accepts to be true.
    - E.g.
      - money measures value. People who earn more is worth more.
      - nature is stock for human purposes. You can own land.
      - Growth is good.
      - Egyptians build pyramid because their belief of afterlife
      - We build skyscrapers because our belief that space is valuable
    - Paradigms are what create systems (goal, flow, stocks, etc). Those that intervene at this level can transform systems. Hard but nothing constrains us from changing it. All it takes is new perspective or an aha! moment.
    - To change paradigm: Voice out with assurance, work with active & open-minded public influencers. Keep pointing the anomalies in old paradigm. Build model that forces people to see system as a whole
3. Goal
    - Everything lower down the list will adjust to the goal. It's a high leverage if someone/leader can push it.
4. Self-Organization (social revolution / evolution)
    - Intervention point: encourage variability, experimentation, and diversity
    - Able to self-correct properties down this list (rules, feedback, delays, ..). Is the strongest form of resilience. System that evolve, can survive almost any change
    - Evolution requires
      1. a material stock (i.e. DNA, knowledge)
      2. that's highly variable (i.e. mutation, creativity)
      3. and a means of selecting and testing new patterns (e.g. changing environment/market where only some meets conditions for survival)
    - Diverse stock accumulated over time are source of potential for evolution. 🧬
      - E.g. Cultural diversity is a source of behavior repertoire, journals are source of technological potential,.. They're precious
      - Diversifying helps you evolve uncontrollably. ~~control~~ Invite surprises. Any system that wipes out diversity and experimentation is doomed in the long term in this highly-variable world.
5. Rules (incentives, punishments, constraints)
    - Rules define the game and our behaviours
      - E.g. imagine no degrees and students come to school when they want to learn something, suppose we're graded as a group not as individuals..
    - Those who make the rules have most leverage
    - E.g. The world trade system seem sketchy. Designed, run, and benefits corporations, confidential meetings exclude any feedback. Recipe to unleash the 'success to the successful' reinforcement until the centralized power grow and 💥.
      - Farting thoughts: Decentralize the rules in a blockchain :p
6. Information Flow (e.g. design for intrinsic responsibility)
    - People act on information, and flow of information creates that feedback for free.
    - Make sure the presented information (dis)incentivise people to do the right thing.
      - e.g. Price is not a good feedback to scarcity of fish. Scarce fish becomes expensive and can incentivise more fishing.
      - e.g. Pollution 📉 after simply releasing previously withheld information (publicize emission data and reporters making 'top 10 list of local polluters') is enough incentive for companies to act.
    - Information is power (and thus those who regulate them)
    - This leverage is popular with the masses, unpopular for those in power, because we tend to avoid accountability for our decisions.
7. Reinforcing Feedback loops (& adjusting strength)
    - Source of growth / collapse if kept unchecked
    - Leverage: Slowing down growth (reducing reinforcing gain) is usually higher leverage than strengthening balancing feedback.
    - e.g.
      - When driving too fast, better to slow down than installing responsive breaks and steering advances
      - Slowing population/economic growth allow many balancing loops (tech/markets) time to function.
      - Anti-poverty programs is weak balancing loop vs the strong "success to the successful". More effective to weaken reinforcing gain by leveling playing field from other side. (e.g.income/inheritance tax, universal quality public education)
8. Balancing Feedback loops (& adjusting strength)
    - Needs a goal, monitoring to detect deviation, and a response mechanism
    - Resillience: Some may seem inactive but critical for emergencies. So don't take them out even if there's no effect yet or it's costly. (i.e. sleep, socializing, eating healthy)
    - It's strength (ability to keep it close to goal) depends on:
      - monitoring accuracy/frequency
      - power/speed of response
      - directness/size of flow
9. Delays
    - Cause oscillation. Long delays can't respond to short-term changes.
    - Often easier to slow the flow (control faucet), rather than getting rid of delays.
    - But if delays can change, it's a huge leverage (good/bad. Push in right direction!)
10. Stock-flow structure (Rebuild poorly-laid out system)
    - Often slowest, expensive, unchangeable. (can't be agile)
    - Leverage after it's built: Understand limits, bottlenecks, fluctuations, efficiency
11. Buffer size (size of stable stocks relative to flows)
    - Big stock (and small flows) are more stable
      - But if too big, it reacts too slowly / inflexible, and hard to maintain
      - E.g. small project is unstable but react fast, just-in-time inventories
    - There's leverage but usually very hard to change.
12. Numbers/constants/parameters
    - If it's the same faucet plumbed to the old system, adjusting it won't change much.
    - e.g. spending, taxing, annual forestation limits, prices, min wage, firing,…
    - Parameters still matters, especially to those close to the flows (people care a lot about wage, but it rarely change the behavior of entire economy system.)
    - Parameters become leverage points when they kick off items higher in the list.
    - Most times, system don't evolve in the details. Boundary falls in a range rather than a critical threshold. Don't sweat it and move on!

### Living in world of system
- Problem: We tend to exaggerate our findings as expression of hope and expectations. In practice, system analysis won't give you prediction and control. Systems are unpredictable and uncontrollable (non-linear, self-organizing, feedbacks). Understandable in the most general way (uncertainties), and doing what you want it to do is only temporary at best.<b> We can't reduce complexity</b>, can't keep track of everything and optimize. We won't even know what to optimize..
- But there are plenty of things to 'do'! Envision the outcome instead of seeking control:
  - Can't predict, but can be envisioned and brought lovingly into being
  - Can’t control, but can be designed and redesigned
  - Can't charge 100%, but we can expect surprises, learn, and profit from them.
  - Can't impose our will, but we can listen to the system and discover properties/values that can work together to produce something even better.
  - Can't figure it out, but we can dance with them!
  - Like learning to rock climb, there are things you can/cannot control. Requires us to stay awake, pay close attention the universe, and lots of training and practice! It requires more than ability to calculate, but our full humanity (rationality, intuition, compassion, vision, morality ...)

### More Wisdoms/Tips
- Get the beat/history of the system before intervening.
  - Avoid non-factual hypothesis/theories. History hints the system structure.
  - Discover 'how it got there', 'other possible modes of behavior', 'what future might look like', understanding the elements and its connections.
  - Be careful to change stuff that destroys the self maintenance capability. Before changing pay attention to what's there and why. Investigate the right intervention
  - E.g. talk to customers and listen to what's in their way of growth.
- Expose your mental model. Drawing diagrams/equations (onenote, miro,..)
  - Expose our assumptions, help to clear thoughts, admit uncertainties, correct mistakes fast. Be willing to redraw boundaries, add new connections. Invite others to challenge your assumptions, add their own.
- Respect and distribute information. Don't distort, delay, withhold information (allow feedback to function).
- Use language with care and enrich them (Information == language)
  - "We don't talk about what we see, we see only what we can talk about" -Fred Kofman
    - We understand what we can describe. Language is foundation of all.
    - E.g. A society that don't talk about 'resilience' is likely not going to be one. The phrase 'companies creating jobs' won't inspire people to create their own.
    - Diction and phrasing change people (remember literature class). Exposure to more will only expand your perspectives (by reading/conversations).
  - Avoid language pollution. Make it clear, true and meaningful.
  - Enrich language (corpus expands with new expertise)
    - E.g. Eskimos have many words for snow, because they studied/use it in depth.
    - New words have to be invented as we pay closer attention to complexity.
- Focus on what's important, not just what's quantifiable
  - If you optimize for quantity, quantity will be the result.
  - Computer models often force us to make up scales to quantify what's qualitative. But don't just pretend something don't exist because it's hard to quantify.
  - Humans are endowed with ability to count AND ability to assess quality. SO use it!
    - Be a quality detector. If it's ugly, inappropriate, unsustainable, morally degrading, humanly demeaning, say so. Even if you can't put value on it.
- Feedback systems need dynamic policies structured for learning
  - Feedback (dynamic and self-adjusting) can't be governed by static policy. It's more effective/cheaper to design policy that also change depending on state of system.
    - Since we expect system to change, the policy should as well.
    - Implication: need to monitor the effect of policy as a feedback
  - The best policy contain feedback loops and meta-feedback loops (spins up, alter, and correct loops dynamically)
  - E.g. rather than spend money on guards/borders (static policy), one could spend money on Mexican economy to close the gap in living standards between Mexican and the US (dynamically designed)
- Aim for good of the whole. Don't optimize subsystem while ignoring the whole.
- Locate responsibility
  - When analyzing, find how behaviors are created (internal/externally)
  - When designing, design for 'intrinsic responsibility'
    - 'Intrinsic responsibility': system designed to send the consequences directly to the decision maker (strong feedback)
    - Privatizing the commons increase 'intrinsic responsibility', and centralizing the commons lowers it (longer feedback between downstream to upstream)
    - Its a weak feedback/irresponsible when decision makers can cause damage at a distance and never sees it.
- Learner forever
  - Remind yourself how little you know, how incomplete your mental models are.
    - When you don't know, experiment (trial-error), learn, and repeat. Take small steps, constant monitoring, be willing to change course. (thrive on change)
    - Pretending you're in control sets you up for mistakes and not learning from it.
  - Normalize errors as a condition for learning. Share mistakes and learn from another.
  - Follow the system wherever it leads, often cutting across disciplines. Share each other's lenses, willing to be taught, admit ignorance, and see the magic happens.
- Celebrate complexity (disorder, self-organization, variety). The mess in the universe is what makes it work beautifully.
- Expand boundary of time (👀 to both short & long term)
  - Project timelines don't extend long term (e.g. election, payback period, generations).
  - When you only think short-term, you also tend to loose capacity to deal with present problems. (analogy: tech debt builds up over time).
  - In systems, there's no distinction because short/long term since one's nested in another (actions just radiate at different speeds).
- Expand boundary of kindness. All systems are interconnected. If one looses everybody looses. Aside from moral standpoint, caring also makes sense systematically.
- Don't erode goal of goodness (is example of 'Drift to low performance')
  - Bad human behavior are often magnified/normalized. But the numerous kindness is left unnoticed (seen as exceptions). -> Expectations lowered -> feedback weakens
  - e.g. Public is full of cynicism, bad actors get away, it's much easier to talk about hate in public than love. We know what to do for this [archetype](#system-archetypes-traps--opportunities)!

### Final Thoughts
This book is a page-turner. The concepts are very well explained, with a topic that is novel to me. If there's one take-away, I'd like myself to remember that system problem comes from 'within' its structures. It's tempting to assume the cause/knob is 'out there', that you have no control over it - most of the time you do! You should begin by looking at how the stocks/flows/feedbacks are being set up and see actions you can leverage.

My favorite part of the book that hits hard was '[to dance with the system](#living-in-world-of-system)'. Our mental model will never be perfect and instead of trying to control the system, one should iteratively learn from it, redesign and envision them to be better than before. I felt like it brought a very hopeful message to a world we live in that could sometimes feel very bleak.

I would be very interested in doing a system analysis (drawing diagrams of stocks, flows, and feedbacks), and I know that I could do it for almost anything since systems are all around us. Seems like a really good mental exercise!

To be fair there's a lot of information in this book, and if someone were to ask me to describe the book it'll be general surface level description at best. What I do want this post to be is simply a quick reference I can come back later on. For example, If I find myself trying to fix a troublesome system behavior, I'd like to refer to the [System Archetypes](#system-archetypes-traps-opportunities) and see the options I could have. Or maybe if I'd like to pull a lever, I would refer to [the leverage](#leverage-points) points to see if there's a better intervention to take.