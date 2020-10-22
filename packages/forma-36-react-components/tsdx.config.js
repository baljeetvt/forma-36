// Not transpiled with TypeScript or Babel, so use plain Es6/Node.js!
const path = require('path');
const postcss = require('rollup-plugin-postcss');
const svgr = require('@svgr/rollup').default

module.exports = {
  // This function will run for each entry/format/env combination
  rollup(config, _options) {
    config.plugins.push(
      postcss({
        config: {
          path: path.resolve(__dirname, './tools/postcss.config.js'),
        }
      })
    )
    
    config.plugins.push(
      svgr()
    )

    return config;
  },
};
