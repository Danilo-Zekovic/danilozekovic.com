// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/home/danilo/PROJECTS/portfolio/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-blog-post-js": preferDefault(require("/home/danilo/PROJECTS/portfolio/src/templates/blog-post.js")),
  "component---src-pages-about-js": preferDefault(require("/home/danilo/PROJECTS/portfolio/src/pages/about.js")),
  "component---src-pages-contact-js": preferDefault(require("/home/danilo/PROJECTS/portfolio/src/pages/contact.js")),
  "component---src-pages-elements-js": preferDefault(require("/home/danilo/PROJECTS/portfolio/src/pages/elements.js")),
  "component---src-pages-generic-js": preferDefault(require("/home/danilo/PROJECTS/portfolio/src/pages/generic.js")),
  "component---src-pages-index-js": preferDefault(require("/home/danilo/PROJECTS/portfolio/src/pages/index.js")),
  "component---src-pages-landing-js": preferDefault(require("/home/danilo/PROJECTS/portfolio/src/pages/landing.js")),
  "component---src-pages-speaker-js": preferDefault(require("/home/danilo/PROJECTS/portfolio/src/pages/speaker.js")),
  "component---src-pages-work-js": preferDefault(require("/home/danilo/PROJECTS/portfolio/src/pages/work.js"))
}

exports.json = {
  "layout-index.json": require("/home/danilo/PROJECTS/portfolio/.cache/json/layout-index.json"),
  "hello-world.json": require("/home/danilo/PROJECTS/portfolio/.cache/json/hello-world.json"),
  "hi-folks.json": require("/home/danilo/PROJECTS/portfolio/.cache/json/hi-folks.json"),
  "my-second-post.json": require("/home/danilo/PROJECTS/portfolio/.cache/json/my-second-post.json"),
  "about.json": require("/home/danilo/PROJECTS/portfolio/.cache/json/about.json"),
  "contact.json": require("/home/danilo/PROJECTS/portfolio/.cache/json/contact.json"),
  "elements.json": require("/home/danilo/PROJECTS/portfolio/.cache/json/elements.json"),
  "generic.json": require("/home/danilo/PROJECTS/portfolio/.cache/json/generic.json"),
  "index.json": require("/home/danilo/PROJECTS/portfolio/.cache/json/index.json"),
  "landing.json": require("/home/danilo/PROJECTS/portfolio/.cache/json/landing.json"),
  "speaker.json": require("/home/danilo/PROJECTS/portfolio/.cache/json/speaker.json"),
  "work.json": require("/home/danilo/PROJECTS/portfolio/.cache/json/work.json")
}