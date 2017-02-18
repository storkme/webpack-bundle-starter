let path = require('path');
let pkg = require('./package');
let webpack = require('webpack');

module.exports = {
  // Specify the entry point for our app
  entry: [
    path.join(__dirname, 'src', 'index.ts')
  ],
  // Specify the output file containing our bundled code
  output: {
    path: path.join(__dirname, 'build'),
    filename: `${pkg.name}.js`
  },
  // Let webpack know to generate a Node.js bundle
  target: "node",
  module: {
    /**
     * Tell webpack how to load JSON files.
     * When webpack encounters a 'require()' statement
     * where a JSON file is being imported, it will use
     * the json-loader
     */
    rules: [
      {
        test: /\.ts$/,
        use: ['awesome-typescript-loader']
      }
    ]
  },
  externals: {
    hjson: 'void 0',
    toml: 'void 0',
    cson: 'void 0',
    yaml: 'void 0',
    properties: 'void 0',
    x2js: 'void 0',
    'js-yaml': 'void 0',
    'coffee-script': 'void 0',
    'iced-coffee-script': 'void 0'
  }
};