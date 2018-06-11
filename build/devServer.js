import chalk from 'chalk';
import express from 'express';
import path from 'path';
/* eslint-disable no-console */

//set port number and start Express
const URL = "http://localhost"
const PORT_NUMBER = 3000;

const app = express();

//handle routes with function
app.get('/', function(request, response){
  //return set file from filesystem
  response.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/movies', function(req, res){
  // get list of all movies in catalogue
  res.json();
  // res.json([
  //   {'id': 1, 'firstName': 'Bob', 'lastName': 'Smith', 'email':'bob@gmail.com'},
  //   {'id': 2, 'firstName': 'Tammy', 'lastName': 'Norton', 'email':'tnorton@yahoo.com'},
  //   {'id': 3, 'firstName': 'Tina', 'lastName': 'Lee', 'email':'lee.tina@hotmail.com'}
  // ]);
});

app.get('/genres', function(req, res){
  // get list of all genres in catalogue
  res.json();
  // res.json([
  //   {'id': 1, 'firstName': 'Bob', 'lastName': 'Smith', 'email':'bob@gmail.com'},
  //   {'id': 2, 'firstName': 'Tammy', 'lastName': 'Norton', 'email':'tnorton@yahoo.com'},
  //   {'id': 3, 'firstName': 'Tina', 'lastName': 'Lee', 'email':'lee.tina@hotmail.com'}
  // ]);
});

//example API response
app.get('/actors', function(req, res){
  // get list of all actors in catalogue
  res.json();
  // res.json([
  //   {'id': 1, 'firstName': 'Bob', 'lastName': 'Smith', 'email':'bob@gmail.com'},
  //   {'id': 2, 'firstName': 'Tammy', 'lastName': 'Norton', 'email':'tnorton@yahoo.com'},
  //   {'id': 3, 'firstName': 'Tina', 'lastName': 'Lee', 'email':'lee.tina@hotmail.com'}
  // ]);
});

//set express to listen on the port
app.listen(PORT_NUMBER, function(err){
  if (err){
    console.log(err);
  } else {
    console.log(chalk.green("Good to go! Server is running at " + URL + ":" + PORT_NUMBER))
  }
});
