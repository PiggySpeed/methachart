const Dotenv = require('dotenv-webpack');
const { HotModuleReplacementPlugin } = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

const config = {
  mode: 'development',
  devtool: 'eval-source-map',
  plugins: [
    new HotModuleReplacementPlugin(),
    new Dotenv({
      path: './.env.development'
    }),
    new CopyPlugin([
      { from: './src/components/print', to: './' },
    ]),
  ],
  devServer: {
    contentBase: 'dist',
    hot: true,
    port: 8000
  },
  node: {
    __dirname: true,
  }
};

module.exports = config;
