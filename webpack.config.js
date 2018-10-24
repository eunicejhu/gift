const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const glob = require("glob");
const GoogleFontsPlugin = require("google-fonts-webpack-plugin");
var ManifestPlugin = require("webpack-manifest-plugin");

const parts = require("./config/webpack.parts");

const PATHS = {
  app: path.join(__dirname, "src")
};

const commonConfig = merge([
  {
    entry: "./src/index.js",
    output: {
      filename: "[name].[hash].js",
      path: path.resolve(__dirname, "docs")
    },
    plugins: [
      new CleanWebpackPlugin(["docs", "build"]),
      new HtmlWebpackPlugin({
        title: "Webpack demo",
        filename: path.resolve(__dirname, "docs/index.html"),
        template: path.resolve(__dirname, "src/assets/custom.html")
      }),
      new webpack.HotModuleReplacementPlugin(),
      new ManifestPlugin(),
      new webpack.HashedModuleIdsPlugin()
    ],
    optimization: {
      runtimeChunk: "single",
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all"
          }
        }
      }
    }
  }
]);
const developmentConfig = merge([
  parts.devServer({ host: process.env.HOST, porst: process.env.PORT }),
  parts.loadCSS(),
  parts.loadImages()
]);
const productionConfig = merge([
  parts.extractCSS({
    use: ["css-loader", parts.autoprefix(), parts.yeticss()]
  }),
  parts.purifyCSS({
    paths: glob.sync(`${PATHS.app}/**/*.js`, { nodir: true })
  }),
  parts.loadImages({
    options: {
      limit: 15000,
      name: "[name].[ext]"
    }
  })
]);

module.exports = mode => {
  if (mode === "production") {
    console.log("*****production******");
    return merge([
      commonConfig,
      productionConfig,
      { mode: "production", devtool: "source-map" }
    ]);
  }
  console.log("*****development******");
  return merge([commonConfig, developmentConfig, mode]);
};
