const Dotenv = require('dotenv-webpack');
const { HotModuleReplacementPlugin } = require('webpack');

const config = {
  mode: 'development',
  devtool: 'eval-source-map',
  plugins: [
    new HotModuleReplacementPlugin(),
    new Dotenv({
      path: './.env.development'
    })
  ],
  devServer: {
    contentBase: 'dist',
    hot: true,
    port: 8000
  }
};

module.exports = config;
