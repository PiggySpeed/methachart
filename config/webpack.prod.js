const Dotenv = require('dotenv-webpack');
const CopyPlugin = require('copy-webpack-plugin');

const config = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new Dotenv({
      path: './.env.production'
    }),
    new CopyPlugin([
      { from: './src/print', to: './' },
    ]),
  ]
};

module.exports = config;
