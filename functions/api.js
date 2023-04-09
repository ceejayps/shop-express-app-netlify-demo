const express = require('express');
const serverless = require('serverless-http');
const app = express();
const router = express.Router();
const hello = require('./controllers/helloWorld');
const bodyParser = require("body-parser");
require('dotenv').config();


//parse request with body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let records = [];

//Get all students
router.get('/', (req, res) => {
  res.send('App is running..');
});

//Create new record
router.post('/add', (req, res) => {
  res.send('New record added.');
});

//delete existing record
router.delete('/', (req, res) => {
  res.send('Deleted existing record');
});

//updating existing record
router.put('/', (req, res) => {
  res.send('Updating existing record');
});

//showing demo records
router.get('/demo', (req, res) => {
  res.json([
    {
      id: '001',
      name: 'Smith',
      email: 'smith@gmail.com',
    },
    {
      id: '002',
      name: 'Sam',
      email: 'sam@gmail.com',
    },
    {
      id: '003',
      name: 'lily',
      email: 'lily@gmail.com',
    },
  ]);
});

app.use('/.netlify/functions/api/v01', router);
app.use('/.netlify/functions/api/v01/home',hello)
module.exports.handler = serverless(app);
