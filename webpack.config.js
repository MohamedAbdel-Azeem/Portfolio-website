const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
        {
            test: /\.css$/i,
            use: [
              'style-loader',
              'css-loader',
              'postcss-loader',
            ],
        },
        {
          test: /\.svg$/,
          loader: 'svg-inline-loader'
      },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),
  ],
};
