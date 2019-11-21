const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(config) {
  // pass some assets right through
  config.addPassthroughCopy("./site/css")
  config.addPassthroughCopy("./site/img")
  config.addPassthroughCopy("./site/js")
  config.addPassthroughCopy("./site/_redirects")
  config.addPassthroughCopy("./site/humans.txt")
  config.addPassthroughCopy("./site/favicon.png")
  config.addPassthroughCopy("./site/podcast-icon.png")
  config.addPlugin(pluginRss);
  return {
    dir: {
      input: "site",
      output: "dist"
    }
  }
}

 