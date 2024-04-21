<p align="center">
  <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2NjZGZyNW42NjBwOWNidWluYjh6MmFobmt6eW5pMXZiOTJ5YmN3byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xUNd9F6HjZ5uUzfZ1m/giphy.gif" width="300">
</p>

# Hello World

and this is my little corner of the internet. There's a few things you'll need to know to get around:

## Running locally

This website is built with [Sitepress](https://sitepress.cc), [Tailwind](https://tailwindcss.com/), [Stimulus](https://stimulus.hotwired.dev/) which requires running multiple processes in development [overmind](https://github.com/DarthSim/overmind).

To begin, install dependencies:

```cmd
$ bundle
$ yarn
```

Then kickoff the processes with overmind.

```sh
$ overmind start -f Procfile.dev
```

## File locations

The files in sitepress is organized as follows:

* `pages` - Where all content files live. `erb` and `md` files are rendered and served.
* `layouts` - Code for page layouts.
* `partials` - Reusable `erb` code.
* `helpers` - Like Rails helpers.
* `assets` - Files here will be included in Sprockets asset pipeline, finger-printed, and served.
* `config` - Configurations and initializers.

## Deployment

- `sitepress compile` to build the static files into `./build`.
- `fly deploy` to deploy to fly.io
