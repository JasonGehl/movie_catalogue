import chalk from 'chalk';
import express from 'express';
import path from 'path';
import webpack from 'webpack';
import config from '../webpack.config.dev';
/* eslint-disable no-console */

//set port number and start Express
const URL = "http://localhost"
const PORT_NUMBER = 3000;

const app = express();

//set up the webpack compiler
const compiler = webpack(config);

//set the app to use webpack
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

//handle routes with function
app.get('/', function(request, response){
  //return set file from filesystem
  response.sendFile(path.join(__dirname, '../src/index.html'));
});

//set express to listen on the port
app.listen(PORT_NUMBER, function(err){
  if (err){
    console.log(err);
  } else {
    console.log(chalk.green("Good to go! Server is running at " + URL + ":" + PORT_NUMBER))
  }
});
