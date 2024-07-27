const path = require("path");
const { CopyHTML } = require("../code-snippet/webpack/CopyHTML");

const copyHTML = new CopyHTML(
  path.resolve(__dirname, "./browser"),
  path.resolve(__dirname, "./dist")
);

module.exports = [
  {
    //mode: "development",
    mode: "production",
    //devtool: "cheap-source-map",
    target: "web", // <=== 默认为 'web'，可省略
    entry: copyHTML.entry,
    output: copyHTML.output,
    plugins: [copyHTML],
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".js"],
    },
  },
];
