const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;

module.exports = {
  entry: "./script.js",
  mode: "development",
  devServer: {
    port: 8082,
  },
  output: {
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "mf_video",
      filename: "remoteEntry.js",
      exposes: {
        "./VideoModule": "./script.js",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};
