const path = require('path'); //path内置的模块，用来设置路径。
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',   // 入口文件
  output: {                     // 输出配置
    filename: 'main.js',      // 输出文件名
    path: path.resolve(__dirname, 'dist')   //输出文件路径配置
  },
  devServer:{
    static:{
      directory: path.join(__dirname)
    },
    hot: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: 'url-loader'
      }
    ]
  },
  plugins:[
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns:[
        { from: path.resolve(__dirname, 'src/assets/'), to: path.resolve(__dirname, 'dist/assets/')},
      ],
    })
  ],
  mode: 'none'
 
};