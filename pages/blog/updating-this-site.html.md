---
title: Updating this site
subtitle: It's been 5 years since I created this site 🤯 where has time go?
publish_at: April 21, 2024
layout: post
---

It has long been in my todo list to migrate this site, soo treat this post as a housewarming party! 🥳 In the past codebase, making a post requires me to touch multiple files, npm library updates started creeping in, and 5-year old technology felt so outdated! I just thought it would make more sense (efficiency-wise, cost-wise, and fun-wise) to ditch it and spin up a new simpler home.

For nostalgia, here was very first blog post about building the old site: [blog/creating-this-site](/blog/creating-this-site)

Here is some tech involved:

- Sitepress
- Markdown-rails
- Sprocket Asset Pipeline
- Fly.io + Docker
- Stimulus
- Tailwind

I wanted to stick with simplicity, and with 5 blogging years behind me I'm pretty familiar with the essential features I actually need.

### Sitepress
Sitepress first caught my eye while reading [Fly.io's blog on semi-static app](https://fly.io/ruby-dispatch/semi-static-websites/). Sitepress works as a Ruby site generator for static websites, and could also be embedded in a Rails app. This was great because although a static app is ideal enough for a stateless blog site, there's extra room to extend this into a full Rails app if I wish to in the future. Since working with Rails at work, it's become my specialty and this repo feels more like home compared to the javascript predecessor where my knowledge is a little bit out-of-date.

Sitepress gives a intuitive structure similar to Next.js where files defined in the /pages folder has auto-configured routes. Similar to Rails you could define reusable view templates and partials, and it works with various templating engine like erb (and markdown! talk about that in a sec).

There is model concept in Sitepress (inheriting `Sitepress::Model`), which can be used to define a collection of files as object and define their behaviors. The collection are defined with a glob pattern (ie. `blog/*.html.*`). With that, I can now do `BlogPage.all` and define its behaviors like `obj.published?`

``` ruby
def published?
 data.fetch("publish_at") < Time.current
end
```

Notice `data.fetch("publish_at")`. That is fetching the metadata that can be defined at the top of the page ([frontmatter](https://sitepress.cc/basics/frontmatter))

```
---
title: Updating this site
publish_at: April 21, 2024
layout: post
---
```

### Markdown-Rails
With markdown-rails ([gem](https://github.com/sitepress/markdown-rails)), I can comfortably write pure markdown and have the engine convert it to HTML behind the scenes. There's a lot of configurations you can play with and it even lets you override the default HTML and style for the markdown elements.

My markdown configuration as of now:

```ruby
class ApplicationMarkdown < MarkdownRails::Renderer::Rails
  include Redcarpet::Render::SmartyPants
  include MarkdownRails::Helper::Rouge

  def enable
    [:fenced_code_blocks, :highlight, :strikethrough, :superscript]
  end

  def renderer
    ::Redcarpet::Markdown.new(self.class.new(with_toc_data: true), **features)
  end

  def image(link, title, alt_text)
    # e.g. ![alt =100x100](url.png)
    if title =~ /=(\d+)x(\d+)/
      %(<img src="#{link}" width="#{$1}" height="#{$2}" alt="#{alt_text}" style="margin: 1.5rem auto;">)
    else
      %(<img src="#{link}" title="#{title}" alt="#{alt_text}" style="margin: 1.5rem auto;">)
    end
  end
end

MarkdownRails.handle :md, :markdown do
  ApplicationMarkdown.new
end
```

See how I had to override the image markdown element to include the flexibility of defining the image size. Oh, I wish markdown has an image size configuration by default, but this is good enough. 🫶

I had to override the renderer to include low-level [Redcarpet](https://github.com/vmg/redcarpet) options such as `with_toc_data`, which renders the header elements with id so I could reference them in the table-of-contents. I wished markdown-rails lets you configure the render options without having to override the renderer yourself (I'll be watching [this issue](https://github.com/sitepress/markdown-rails/issues/4) for that).

### Sprocket & Serving assets via Github

Sitepress uses sprocket to build the asset pipeline. That is, building all the images, javascripts, and stylesheets. The manifest.js file defines the assets I want to load.

```js
//= link_directory ../stylesheets .css
//= link_directory ../javascripts .js
//= link_directory ../javascripts/build .js
```

Initially, I also build my images `//= link_tree ../images` but I realized that my blog assets are pretty big (the gifs and images took up >1GB).  It makes the build time take a while, and I'm pretty sure I'll hit a limit at one point. After thinking long and hard, I came up with using Github to host my images. I setup github pages which will serve the files for me. One downside is I now have to prepend all my image links with `https://steven-steven.github.io/Blog/assets/images/blogAssets/` but that's easy to do since I'm already overriding the markdown-rails images. I thought that was ingenius, who needs S3 amiright 😉

### Deployment

If it was a Rails app, I would use [Fly.io](https://fly.io/) to launch whole VMs with a free hobby plan. But since this is just a static app, I think [Vercel.com](vercel.com) should work too. I moved my Nameserver from Domain.com to Cloudflare in hope that it would do its DNS magic to speed up page load.

### Stimulus

I'm used to having Stiumulus for defining complex JS interactions in erb templates. Currently I'm only using this for the dark-mode toggle. In the future, maybe I could stick with a more lightweight solution like [AlpineJS](https://alpinejs.dev/).

### Tailwind

This is a must-have for all my projects. I breathe and live by my tailwind classes. `flex`

## Summary

and Yes I haven't been writing in a while. There's so much to update, but too little time and motivation. But with this shiny new site I setup, it'll hopefully bring by habit back. Stay tuned.
