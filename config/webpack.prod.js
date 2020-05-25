const Dotenv = require('dotenv-webpack');
const CopyPlugin = require('copy-webpack-plugin');

const config = {
  mode: 'production',
  devtool: 'source-map',
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  plugins: [
    new Dotenv({
      path: './.env.production'
    }),
    new CopyPlugin([
      { from: './src/print', to: './' },
      { from: './src/assets', to: './assets/' },
      { from: './src/assets/icon.png', to: './icon.png' }
    ]),
  ]
};

module.exports = config;
