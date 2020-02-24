const Dotenv = require('dotenv-webpack');

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
