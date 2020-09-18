const htmlmin = require("html-minifier");

module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("src/static");

  eleventyConfig.addLayoutAlias("base", "base.njk");

  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    if (outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }

    return content;
  });

  return {
    dir: {
      input: "src",
      layouts: "_layouts"
    }
  };
};
