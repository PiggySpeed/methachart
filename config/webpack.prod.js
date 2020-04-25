const Dotenv = require('dotenv-webpack');

// TODO: for webpack prod, use copyplugin for print directory
const config = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new Dotenv({
      path: './.env.production'
    })
  ]
};

module.exports = config;
