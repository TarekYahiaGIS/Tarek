const path = require("path");
const webpack = require("webpack");

module.exports = function override(config, env) {
  // Include tsparticles packages in babel-loader
  const babelLoader = config.module.rules
    .find(rule => Array.isArray(rule.oneOf))
    .oneOf.find(rule => rule.loader && rule.loader.includes("babel-loader"));

  babelLoader.include = [
    path.resolve("src"),
    path.resolve("node_modules/tsparticles"),
    path.resolve("node_modules/@tsparticles"),
    path.resolve("node_modules/react-tsparticles")
  ];

  // Fix "process is not defined"
  config.plugins.push(
    new webpack.ProvidePlugin({
      process: "process/browser",
    })
  );

  return config;
};
