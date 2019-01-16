const path = require('path');
const HWP = require('html-webpack-plugin');
module.exports = {
   entry: 'main.js',
   output: {
       filename: 'build.js',
       path: 'app/dist'},
   module:{
       rules:[{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
       }]
   },
   plugins:[
       new HWP(
          {template: 'index.html'}
       )
   ]
}
