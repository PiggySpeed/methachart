const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(less|css)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'less-loader' },
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg|png)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  output: {
    path: path.resolve(__dirname, '../', 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: false
    }),
    // new CopyPlugin([
    //   { from: './src/assets', to: 'assets' },
    //   { from: './src/content_scripts', to: 'content_scripts' },
    //   { from: './src/manifest.json', to: './' }
    // ])
  ]
};

module.exports = config;
