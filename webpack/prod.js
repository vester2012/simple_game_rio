const merge = require("webpack-merge");
const path = require("path");
const base = require("./base");
const TerserPlugin = require("terser-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(base, {
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../dist"), // Папка назначения для сборки
  },
  devtool: false,
  performance: {
    maxEntrypointSize: 900000,
    maxAssetSize: 900000,
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false, // Удаляем комментарии
          },
        },
      }),
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // Очистка папки dist перед сборкой
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "../src"), // Путь к папке src
          to: path.resolve(__dirname, "../dist/src"), // Целевая папка
        },
      ],
    }),
  ],
  mode: "production",
});
