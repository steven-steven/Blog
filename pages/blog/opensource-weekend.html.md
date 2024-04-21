---
title: Open Source Weekend
publish_at: September 5, 2022
layout: post
---

![Power](/assets/blogAssets/opensource-weekend/meme.png "=400x400")

**Shameless plug**: Click the image below to checkout my opensource! You can easily generate the same card for your typeracer data, and use them in any readme!

[![Steven's Typeracer stats](https://typeracer-readme-stats.vercel.app/api?username=juninight29)](https://github.com/steven-steven/typeracer-readme-stats)

[![My github readme profile](/assets/blogAssets/opensource-weekend/readme.png)](https://github.com/steven-steven/steven-steven "=400x400")

It's a long labor day weekend, and what's better to do than to do more labor. I think the term 'labor' often connotes dreadful work done while being employed by someone. But by definition labor just means work in general, and the curse of having a hobby for programming is that now the line between 'labor' vs 'leisure' is also blurred.

With respect to labor day, I'd like to take this moment on kudos-ing fellow workers, and in all generations before us, who has continued to fight for the small/big improvements to our lives and the working conditions that I am lucky to enjoy today.

Ever since graduation, I've been trying to make this 'coding' thing a hobby instead of a work and I think 'open source' has always been the shining light at the end of the tunnel. Ya know, just have fun learning and making contributions with no commitment whatsoever (I'll take that back; you still need to commit and push - **pun intended**).

My journey started with a friend who wanted to improve his Github profile readme for an upcoming job hunt. Baffled, I realized I've never had one too! So I did what I have to do.

> I start off with a simple one, and came across an example readme profile with a cool automated card showing github stats, found that they came from a popular open-source called [github-readme-stats](https://github.com/anuraghazra/github-readme-stats), had an idea of displaying my typeracing data, looked up if there's an existing implementation - seems like none except that I found this other open-source called [typeracer-box](https://github.com/tobimori/typeracer-box) that uses Github Workflow cron job to query the typeracer api and update the contents of a github gist to visualize the data - pretty cool stuff, I forked and implemented my own gist showing my typeracer data which I can pin on my profile, but how about go further and implement my own version of github-readme-stats that shows the typeracer data in any readme? So I forked the repo, modify the card to display typeracer data, fix some tests, remove all upstream files/features that I don't need, update the readme, and by the time I'm happy with my new shiny open source project I call [typeracer-readme-stats](https://github.com/steven-steven/typeracer-readme-stats), I felt super confident with the ins-and-outs of the entire code - so why not tackle some issues? Look for an issue needing help, found an interesting one regarding failing github CI workflow, fix them in my repo, opens a PR contribution, WIN.

That's it as a TLDR pals! Aside from all the grammatical folks that got trigerred from reading that paragraph, if you're interested, below are some major learnings from this weekend. The rest of this post are few awesome things I learned this labor day weekend:

**Typeracer API** ([docs](https://typeracerdata.com/about)): A banger. The absence of an auth makes it perfect for simple projects.

**Github profile README** ([guide](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme))

**Anuraghazra/github-readme-stats** ([github](https://github.com/anuraghazra/github-readme-stats))(A [how-the-repo-works guide](https://codecrumbs.io/library/github-readme-stats))
  - Serves an endpoint that renders an SVG animation containing your real-time github stats. Then having the markdown/html pull in that svg as a source, I think it's brilliant. Who would've thought to serve SVG data dynamically through an endpoint.
  - SVG and CSS animation is a powerful combination.
  - The code is also super well-maintained. There is a `utils.js` page for all custom errors and logging, calculations of width/height, there's a I18n implementation from scratch that looks up the locale translation from an object, etc.
  - The served endpoint receives query parameters for high customizability.
  - Jest tests + codecov test coverage. I had to fix some tests while making all the changes, but it was pretty straight forward since there's not a lot of UI components in the card. You'd mock the api request and assert things about the response, headers, etc; or check that every theme is properly rendered onto the card elements

**Typeracer-box** ([github](https://github.com/tobimori/typeracer-box)). This repo auto populate the gist every hour with updated typeracer data. All you need is to give it a public gist and a github token with permission to write to the gist. Not as cool as animated svg in my opinion, but still super powerful. We're essentially using github gist to visualize some query (somewhat like a BI tool), and make that sharable. I suppose you can even embed gist to a markdown so I'll give 'em extra cool points.. The meat of the project lies mainly in the `index.js` script, and the github workflow that execute the script every hour with a scheduled cron job. My main struggles implementing this was figuring out how to make the github tokens work..

** Github API and tokens**. You can Request tokens of various permissions [here](https://github.com/settings/tokens). Apparently, if you hardcode the token in the code, github will automatically revoke the token. I spent a while before figuring out why my token isn't working... The tokens will allow you to make requests to GraphQL endpoint ([docs](https://docs.github.com/en/graphql)) and REST endpoints ([docs](https://docs.github.com/en/rest)). The API does cool shit like: querying for PR changes, making a bot PR comment, generating a README doc from a json file. When we power this with Github actions, ugh... Now I kind of get where services like dependabot get their magic.

**Github workflows and actions **
  - Make it run tests, run scripts, run shell commands. Can set it to trigger on PR, on cron schedule, on issue creation, on issue comment, on PR, on label, and many other events ([docs](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows)). Here are some good ones I saw:
    - [actions/labeler@v2](https://github.com/actions/labeler)
      - An action for automatically labelling pull requests. On PR submission, it checks on a yml file (with k-v pair of {label: path}), so any pr touching a particular file or directory will be auto labeled.
    - Every time someone adds a PR touching the `theme.js` file (`on: pull_request_target`), It'll trigger a script to create a github PR comment with some preview. The script uses the API to pull the diffs from the PR, convert them to object, and use that to generate the preview.
    - On push of the branch, run a shell script that updates a readme doc

**More Github repo maintenance tools:**
  - There are many github-specific files you can put in the `.github/*` folder. ([stackoverflow overview](https://stackoverflow.com/questions/60507097/is-there-an-overview-of-what-can-go-into-a-github-dot-github-directory)). Few that peaks my interest is `stale.yml`, `issues-templates`, `codeowners`, `dependabot.yml`... Just more stuff to explore
  - Badges are cool. You can use it to indicate status of a workflow ([github workflow status badge docs](https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/adding-a-workflow-status-badge)). There's also https://shields.io/ which lets you create badges of all types and purposes. You can use it for links (which I did in my profile readme), or pull data from an endpoint.

**SVG**: I've always knew how powerful svg was, but realizing it can run a css animation I was rendered speechless.. What? I thought svg is only for icons 😳
  - I broke the svg progress aniamation after changing the radius. This was the [codepen](https://codepen.io/nkunic/pen/jXBZWV) that helped me. After micro-adjusting the circle's `stroke-dasharray` attribute while making sure progress is full when `stroke-dashoffset` is 0 and progress is empty when it's 100, I was able to make it sort of work without entirely sure how it works 😅 (yet)

**Vercel dev** ([docs](https://vercel.com/blog/vercel-dev)): Vercel's serverless functions (without the next.js stuff). It just serves all endpoints defined under `api/*`. In this case, it fits our purpose perfectly since we just need an endpoint to serve our dynamically rendered svg asset. Can't get any simpler than that.

**Miscellaneous TIL**
  - `cache control` in HTTP request header
    - `max-age`: means the # sec it'll be cached in the browser.
    - `no-cache`: means it has to validate the data from the server every time (it doesn't mean don't cache)
  - Automating chrome using CLI headless chrome ([chrome documentation](https://developer.chrome.com/blog/headless-chrome/)).
    - ie. print the dom, take screenshot, convert the page to PDF, run JS in the browser...
    - There's a high level node library for it [Puppeteer](https://github.com/puppeteer/puppeteer).

**Last but not least**.., [here's a link to my first open source PR contribution](https://github.com/anuraghazra/github-readme-stats/pull/1999) I made for `github-readme-stats` 🥳 As described in that PR description link, adding prettier checks to the CI will enforce the trailing commas in the `themes.js` file so we get correct diffs in the right lines. (Update: It got approved and merged!!!)

[![PR contribution](/assets/blogAssets/opensource-weekend/contribution.png)](https://github.com/anuraghazra/github-readme-stats/pull/1999 "=400x400")

### Conclusion

Thought of some good follow-up projects when time permits:
  - Improve the visualization of the card. Fancy svg / animation tricks. Typeracer api returns other useful stuff like avatar images.
  - automate readme docs from code
  - automate a preview of the targeted code on PR request. Maybe using headless chrome

Definitely more comfortable with contributing compared to last year where just the thought of looking at a stranger's code and getting context overwhelms me. As my first open-source contribution this surprisingly felt effortless and rewarding - started off as something cool I want, doesn't exist yet, interesting technology to learn, within my ability, and at the end of day is open for anyone to use and extend off too. It just snowballs as I begin to discover new things along the way. So if I were to give advise to a year-ago me, I would say,
> "Start with something cool you want to make, and go from there"
