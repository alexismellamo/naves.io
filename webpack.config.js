const path = require('path');
require("babel-polyfill");

module.exports = {
  entry: { game: "./js/index.js", control: "./js/controls/index.js" },
  output: { filename: "./views/[name].js.erb" },

	module: {
		loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
		],
    resolve: {
      extensions: ['', '.json', '.jsx', '.js']
    },
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'es2017'],
            plugins: ['transform-runtime', require('babel-plugin-transform-object-rest-spread')]
          }
        }
      }
    ]
	}
};
