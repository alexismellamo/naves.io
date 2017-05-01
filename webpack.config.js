const path = require('path');
require("babel-polyfill");

module.exports = {
  entry: { gamebundle: "./js/index.js", control: "./js/controls/index.js" },
  output: { filename: "./public/js/[name].js" },

	module: {
		loaders: [
			{
				test: /\.json$/,
				include: path.join(__dirname, 'node_modules', 'pixi.js'),
				loader: 'json',
			}
		],
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
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
