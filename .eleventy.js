const { DateTime } = require("luxon");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginNavigation = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {

  // Plugins
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginNavigation);

  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/.nojekyll");

  // Watch CSS files for changes
  eleventyConfig.addWatchTarget("src/assets/css/");

  // Markdown configuration
  const markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  }).use(markdownItAnchor, {
    permalink: markdownItAnchor.permalink.ariaHidden({
      placement: "after",
      class: "header-anchor",
      symbol: "#",
      ariaHidden: false,
    }),
    level: [1, 2, 3, 4],
    slugify: eleventyConfig.getFilter("slugify")
  });
  eleventyConfig.setLibrary("md", markdownLibrary);

  // Filters
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("dd LLL yyyy");
  });

  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('yyyy-LL-dd');
  });

  eleventyConfig.addFilter("head", (array, n) => {
    if (!Array.isArray(array) || array.length === 0) {
      return [];
    }
    if (n < 0) {
      return array.slice(n);
    }
    return array.slice(0, n);
  });

  eleventyConfig.addFilter("min", (...numbers) => {
    return Math.min.apply(null, numbers);
  });

  eleventyConfig.addFilter("getAllTags", collection => {
    let tagSet = new Set();
    for (let item of collection) {
      (item.data.tags || []).forEach(tag => tagSet.add(tag));
    }
    return Array.from(tagSet);
  });

  eleventyConfig.addFilter("filterTagList", function filterTagList(tags) {
    return (tags || []).filter(tag => ["all", "nav", "post", "posts", "project", "projects"].indexOf(tag) === -1);
  });

  // Collections
  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/*.md").reverse();
  });

  eleventyConfig.addCollection("projects", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/projects/*.md").sort((a, b) => {
      return (b.data.order || 0) - (a.data.order || 0);
    });
  });

  // Custom shortcodes
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Layout aliases
  eleventyConfig.addLayoutAlias("base", "layouts/base.njk");
  eleventyConfig.addLayoutAlias("page", "layouts/page.njk");
  eleventyConfig.addLayoutAlias("post", "layouts/post.njk");
  eleventyConfig.addLayoutAlias("project", "layouts/project.njk");

  // Browsersync configuration
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, browserSync) {
        const content_404 = require("fs").readFileSync('_site/404.html');

        browserSync.addMiddleware("*", (req, res) => {
          // Provides the 404 content without redirect.
          res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
          res.write(content_404);
          res.end();
        });
      },
    },
    ui: false,
    ghostMode: false
  });

  return {
    templateFormats: ["md", "njk", "html", "liquid"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    pathPrefix: "/218_portfolio/"  // GitHub Pages path prefix
  };
};
