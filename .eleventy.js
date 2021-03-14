module.exports = (eleventyConfig) => {
    // Copy the "assets" directory to the compiled "_site" folder.
    eleventyConfig.addPassthroughCopy('assets');
    eleventyConfig.addPassthroughCopy('favicon.ico');
    
    return {
      dir: {
        input: './',
        output: './_site',
        layouts: './_layouts',
      },
      templateFormats: [
        'md',
        'njk',
      ],
      pathPrefix: '/newsite/', // omit this line if using custom domain
    };
  };