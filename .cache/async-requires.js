// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-post-js": require("gatsby-module-loader?name=component---src-templates-blog-post-js!/home/danilo/PROJECTS/portfolio/src/templates/blog-post.js"),
  "component---src-pages-elements-js": require("gatsby-module-loader?name=component---src-pages-elements-js!/home/danilo/PROJECTS/portfolio/src/pages/elements.js"),
  "component---src-pages-generic-js": require("gatsby-module-loader?name=component---src-pages-generic-js!/home/danilo/PROJECTS/portfolio/src/pages/generic.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/home/danilo/PROJECTS/portfolio/src/pages/index.js"),
  "component---src-pages-landing-js": require("gatsby-module-loader?name=component---src-pages-landing-js!/home/danilo/PROJECTS/portfolio/src/pages/landing.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/home/danilo/PROJECTS/portfolio/.cache/json/layout-index.json"),
  "hello-world.json": require("gatsby-module-loader?name=path---hello-world!/home/danilo/PROJECTS/portfolio/.cache/json/hello-world.json"),
  "hi-folks.json": require("gatsby-module-loader?name=path---hi-folks!/home/danilo/PROJECTS/portfolio/.cache/json/hi-folks.json"),
  "my-second-post.json": require("gatsby-module-loader?name=path---my-second-post!/home/danilo/PROJECTS/portfolio/.cache/json/my-second-post.json"),
  "elements.json": require("gatsby-module-loader?name=path---elements!/home/danilo/PROJECTS/portfolio/.cache/json/elements.json"),
  "generic.json": require("gatsby-module-loader?name=path---generic!/home/danilo/PROJECTS/portfolio/.cache/json/generic.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/home/danilo/PROJECTS/portfolio/.cache/json/index.json"),
  "landing.json": require("gatsby-module-loader?name=path---landing!/home/danilo/PROJECTS/portfolio/.cache/json/landing.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/home/danilo/PROJECTS/portfolio/.cache/layouts/index.js")
}