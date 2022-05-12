const util = require('util');
const sass = require('sass'); // `npm i -D sass`
const renderSass = util.promisify(sass.render);
const inputFile = '_includes/_scss/index.scss'; // the path to your main SCSS file
const outputFile = 'css/style.css'; // the filename you want this template to be saved as

module.exports = class {
  data() {
    return {
      permalink: outputFile,
      eleventyExcludeFromCollections: true,
    };
  }
  async render() {
    const result = await renderSass({
      file: inputFile,
    });

    return result.css;
  }
};
