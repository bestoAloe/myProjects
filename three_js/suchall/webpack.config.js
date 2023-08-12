const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, 'dist')
  },
  devServer:{
    static:{
      directory: path.join(__dirname)
    },
    hot: true,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(jpg|gif|png)$/,
        use: "url-loader"
      }
    ]
  },
  plugins:[
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns:[
        { from: path.resolve(__dirname, "src/assets/"), to: path.relative(__dirname, "dist/assets/") }
      ],
    })
  ],
  mode: 'none'
}