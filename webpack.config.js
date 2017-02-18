let path = require('path');
let pkg = require('./package');

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
        test: /\.json$/,
        use: ['json']
      },
      {
        test: /\.ts$/,
        use: ['awesome-typescript-loader']
      }
    ]
  }
};