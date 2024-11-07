const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            query: {
              presets: ["@babel/preset-env"],
            },
          },
          "eslint-loader",
        ],
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: [
                require("postcss-nested-ancestors"),
                require("postcss-nested"),
              ],
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader?removeSVGTagAttrs=false",
      },
    ],
  },
  optimization: {
    minimize: false, // 코드 압축 비활성화
  },
  output: {
    path: path.join(__dirname, "/dist"),
    publicPath: "/",
    filename: "bundle.js",
    library: "VideoTool",
    libraryTarget: "umd",
    libraryExport: "default",
  },
};
