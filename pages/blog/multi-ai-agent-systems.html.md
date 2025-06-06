---
title: Creating a Blog Builder with Multi AI Agent
subtitle: Beep! Bop! 🤖 Using CrewAI, I experimented creating a Multi-AI agent system that accepts my notes and generate a blog post.
publish_at: July 6, 2024
layout: post
tags: tech
---

👀 the project: [Crew AI Exploration](/works/crew_ai_exploration)

## Context

It was hackdays and I decided to explore multi-AI agent systems. The premise is that unlike your normal LLM interaction where the machine requires continuous human feedback each step of the way, you have multiple LLM agents (with separate roles, goals, and backstories) that collaborate and prompts one another.

On top of that, the agents can interact with tools like using API, reading personal data, etc. It is model agnostic so you could use OpenAI GPT models, Cohere, Llama, Huggingface, etc.

I completed the Deeplearning.ai quick course on [Multi AI Agent Systems with Crew AI](https://www.deeplearning.ai/short-courses/multi-ai-agent-systems-with-crewai/) in about a day and began tinkering with it.

![Completion certificate](multi-ai-agent-systems/certificate.png "=400x400")

In the next couple of days, I hacked together the following crew with 3 agents. A Content Strategist that writes an outline, Blog Writer, and an Editor that proofreads the work.

```python
content_strategist = Agent(
  role='Senior Content Strategist',
  goal="Plan an outline for a blog post content to highlight new discoveries and educate your readers about {topic}",
  backstory="""You work for a fun startup that loves to tinker with new technologies.
  You love your work and have a passion for structured communication.
  Your expertise lies in organizing content effectively so it's easy to follow and understand.
  You have a knack for dissecting huge chunks of information, highlighting the important points, creating lesson plans, and sharing your learnings with other people.""",
  verbose=True,
  allow_delegation=False,
  tools=[search_tool, scrape_tool, read_notes, semantic_search_notes],
  step_callback=lambda step: self.step_callback(step, "Content Strategist")
)
blog_writer = Agent(
  role='Tech Blogger',
  goal='Craft a compelling blog post about {topic} based on given outline and notes',
  backstory="""You are a renowned tech blogger, known for your insightful and engaging articles that are easy to follow and learn from.
  You have years of experience writing guides about {topic}, learning reflections, teaching and mentoring people.
  You are excellent at synthesizing lots of information with clarity and brevity.
  You like to make your articles fun to read, like metaphors and appropriately inserting emojis where suitable.
  You transform complex concepts into compelling narratives that is easy to understand.""",
  verbose=True,
  allow_delegation=True,
  tools=[read_notes, semantic_search_notes],
  step_callback=lambda step: self.step_callback(step, "Tech Blogger")
)
editor = Agent(
  role='Senior Blog Editor',
  goal='Proofread blogs to ensure the content is fun to read, informative, accurately includes the important points',
  backstory="""You work as a senior blog editor with years of experience in writing.
  You have great attention to details, ensuring the concepts are best delivered, well-written, and search engine optimized.
  You take pride in only publishing the very best writing.""",
  verbose=True,
  allow_delegation=True,
  tools=[read_notes, semantic_search_notes],
  step_callback=lambda step: self.step_callback(step, "Senior Blog Editor")
)
```

Prompting felt like another craft of its own. I wouldn't call it programming at all. As stated in the course, a great mental framework is to think like a manager. What is the goal? What is the process? What kind of people would I need to hire to get it done?

Here is a sample excerpt about Crew AI using the notes I wrote from the course. Written by yours truly, Crew AI Multi-AI Agent Systems.

> At the core of Crew AI lies the concept of multi-agent systems, where AI agents work collaboratively to achieve a common goal. These agents are trained to specialize in specific tasks, such as research, writing, or analysis, and can seamlessly interact with each other to accomplish complex objectives. By utilizing Crew AI, developers can create dynamic systems where agents can delegate tasks, share information, and work together to achieve optimal results.

> By structuring tasks into well-defined roles, goals, and backstories, Crew AI enables developers to create sophisticated workflows that mimic real-world scenarios. From content planning to customer support automation, Crew AI can streamline processes, improve efficiency, and enhance the overall user experience.

## Thoughts

Not bad.. It's not apparent that it's significantly better than directly prompting an LLM. But breaking down the tasks into chunks that each of your agents, with their expertise, will tackle allows the result to be more focused and tailored to its limited context. You could also let agents bounce ideas and delegate tasks to each other automatically.

I was excited about the tools that you can plug into the specific tasks, like:

- SerperDevTool which allow the agent to search the topic on google,
- ScrapeWebsiteTool which scrapes content from a particular URL,
- WebsiteSearchTool which does a RAG semantic search over the website,
- FileReadTool which reads a file,
- MDXSearchTool which does semantic search over markdown file.

Quite disappointed though, when I learned that `SerperDevTool` was paid API.

![API Error](multi-ai-agent-systems/error.png "=400x400")

## Spinning up a UI

I wasn't quite satisfied seeing the execution logs in the terminal, and decided to spin up a Streamlit UI to go along with it. I am new to streamlit so [this tutorial](https://www.youtube.com/watch?v=vhbfs38XmKk) was quite helpful to get me started.

![Streamlit UI app](multi-ai-agent-systems/streamlit.png "=400x400")

## Trying it out with my book notes

If you go through this blog, you would know that I love to write summaries for books I've read, but it is time-consuming. Tldr; on my process, I would make highlights and notes as I read a book, then I'd go through those notes while writing a summary for it.

Of course, there are more nuances that I don't expect the crew to capture as picking out only the important points to include in the summary is a matter of taste 🍩.

With the Blog Builder I created, I can now pass in a markdown file with all my exported notes as context, and try to generate a blog with it. It worked surprisingly well! Not gonna replace me, but it's a good start to overcome the curse of the blank page, and most of the work becomes editing work 🤓.

The notes that we passed as context. It looks super raw 🥩.

![The notes](multi-ai-agent-systems/notes.png "=400x400")

Here is the initial outline crafted by our Senior Content Strategist 🤖

![Outline generated](multi-ai-agent-systems/outline_generated.png "=400x400")

Here is the outline that was finalized by the Senior Blog Editor 🤖

![Blog generated 2](multi-ai-agent-systems/blog_generated2.png "=400x400")

![Blog generated](multi-ai-agent-systems/blog_generated1.png "=400x400")

## Future Ideas

Crew AI themselves has a couple of examples in [this repo](https://github.com/joaomdmoura/crewAI-examples), like a game builder, coming up with image description and copy for an instagram post (could feed this into image generation like Midjourney), create landing pages, marketing strategy, trip/activity planner, etc.

If you find yourself taking hours to do something, I think it's worth writing up a crew to do it for you or help guide you through it.

I do believe that AI makes great mentors and will replace tasks (not jobs). Crew AI seems to build off a good framework to extend what LLM brings to the table. Here's to many more prompts 🍻
