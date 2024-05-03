---
title: First Blog Post - Creating This Site
publish_at: October 14, 2019 01:40
layout: post
---

I've probably created too much web portfolios in my life, and I wish I could settle on a simple site that reflects who I am. But I'm a man that adapts and changes as I grow. So I'd like to rebrand my site - not as a portfolio, but as a blog. I'd like to share what matters most as a learner - reflection.

As a first blog post, I'll start off with reflecting how I created this site. Note that I will probably change/add some more things in the future, so this really is essentially just a first-draft.

> "Art is never finished, only abandoned" - Leornardo Da Vinci

## Table of Contents

-   [Inspiration and Credits](#inspiration-and-credits)
-   [Web Tech](#web-tech)
    -   [Next.js](#next.js)
    -   [Yarn](#yarn)
    -   [Styled-components](#styled-components)
    -   [NavBar](#navbar)
    -   [Avatar](#avatar)
    -   [MDX](#mdx)
    -   [Syntax Highlighting](#syntax-highlighting)
-   [Development Tools](#development-tools)
    -   [Eslint and Prettifier](#eslint-and-prettifier)
    -   [VSCode Extentions](#vscode-extentions)
-   [Todo](#todo)

## Inspiration and Credits

This blog is inspired by https://leerob.io and [https://yihui.name](https://yihui.name). Give it a look and hopefully it will inspire you like it did for me. When I saw Lee's site and his implementation of next-mdx, I knew I had to try it. At the same time, Yihui's site inspires me of its simplicity in design and high-grade in content. Truly amazing.

Not to mention all the great JS libraries I used, which really simplify lots of the work needed. (Reminds me of the time I made a purely static site without a JS framework :confounded: Glad that generation is long gone). Below is a few that had helped me!

## Web Tech

### Next.js

I've done work with Next.js before, and it really does all the boilerplate for you. From page routing, SSR, CSR, and prefetching. I didn't use all it's features because I didn't want to over-engineer, but there are other features I'd like to try in the future; like creating API routes (all you need is to add file onto the /api folder), error-handling, AMP pages, and fetching asynchronous data within 'getInitialProps'.

### Yarn

This is my first time using Yarn. It's a package manager just like NPM (I heard its better performing so I gave it a chance)

### Styled-components

My experiences with CSS is very bittersweet (Mostly bitter). I went over LeeRob's implementation of his site, and I realized that styled-component really made everything super neat, so I gave it a try and I loved it. It provide great features like theming, and it seems much more intuitive than other CSS-in-JS I've used since it defines the styles outside the JSX.

I tried looking into CSS Component Libraries to see if I can avoid too much CSS. I've used Material UI before and it was pretty heavy. Rebass was lightweight but it defines the CSS as a prop to the JSX components (which I think is ugly compared to styled-components since the JSX code can get pretty crowded). __ Update from Sept 2020: __ I love [Tailwind](https://tailwindcss.com/)!

### Navbar

Re-learn the amazing flexbox so I can create a simple navigation bar. It goes to 2 columns when the screen is small. I love the [navbar animation by Nikolas Type](https://www.nikolastype.com/), and thought about making it. But nah! ~~Too much work~~ I don't want to over-engineer..

### Avatar

I googled 'generate online avatar' - and boom! found [avataaars generator](https://getavataaars.com/). It looks wonderful and it _kinda_ looks like me. You can even export it as a PNG, SVG, or React code.

I wanted to use SVG, but importing it to React seems pretty dirty and the cleaner way is to install an external package. So I went for the cleanest way - PNG.

### MDX

I don't have much experience with Markdown except for writing README files, but the idea of writing a blog in Markdown excites me. The fact that you can integrate Markdown with JSX.. is very sexy.

### Syntax Highlighting

_Sigh..._ I spent at least 5 hours, a McDonalds, and a bubble tea to get this working. This is basically highlighting markdown code blocks based on MDX.

``` javascript
const example = "Just like this - Javascript";
```

``` bash
echo "or this - bash"
```

I have the [MDX docs on Syntax Highlighting](https://mdxjs.com/guides/syntax-highlighting), lots of example of @mapbox/rehype-prism and react-syntax-highlighter from LeeRob's site and [the internet](https://medium.com/young-developer/react-markdown-code-and-syntax-highlighting-632d2f9b4ada), but it didn't work for me! :cry:
I got all kinds of errors like '_unexpected token export_', '_react-syntax-highlighter expects a children of type String, but found [Object object]'_, played around with webpack configuration, installed a bunch of npm libraries, ... And eventually I came across this [Egghead.io lesson](https://egghead.io/lessons/react-syntax-highlighting-code-blocks-using-components-with-prism-react-renderer-and-gatsby-mdx) and thank god it works.

## Development Tools

### Eslint and Prettifier

My first time setting up Eslint and Prettifier. Decided to go for the Eslint's Airbnb config since I heard it works best with React. I still had to disable some rules that I found unnecessary like 'jsx-props-no-spreading' (I thought spreading objects is a core feature of JS?) and 'jsx-filename-extension' (jsx files doesn't work with next.js pages).

But with a couple of VSCode extentions I can specify the size of my tabs, and auto-format whenever I save the file. Which makes development process much preetier.

### VSCode Extentions

I had ‘colorize’ vscode extension, which detect and highlight color codes (like #efefef) with its color. It detects even ‘javascript’ and ‘jsx’ files which I needed since I'm defining my styles in these files. (Had to define colorize.languages in the settings)
I also had extention for Prettier. I defined `"prettier.tabWidth": 4` so it would auto pretty my code.

## TODO

-   Would love to implement Google Analytics on this site (I like numbers).
-   Provide Indonesian translation (so I can practice my Indo writing skills too).
-   Provide metadata to improve SEO
-   Implement tags to categorize my posts
-   Comment section
