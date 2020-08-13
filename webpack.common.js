const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
           {
              test: /\.scss$/i,
              use: [
                { loader: MiniCssExtractPlugin.loader },
                { loader: "css-loader" },
                { loader: "sass-loader" }
              ],
           },
           {
              test: /\.(png|jpe?g|gif)$/i,
              use: [
                {
                  loader: 'file-loader',
                  options: {
                    outputPath: 'images',
                  },
                },
              ],
          },
          {
              test: /\.html$/i,
              loader: 'html-loader',
          }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
          filename: 'bundle.css'
        })
    ]
};