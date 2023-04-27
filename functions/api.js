const express = require('express');
const serverless = require('serverless-http');
const app = express();
const router = express.Router();
const hello = require('./controllers/helloWorld');
const bodyParser = require("body-parser");
require('dotenv').config();

const mongoose = require('mongoose');

// Set up default mongoose connection
const mongoDB = 'mongodb://localhost/my_database';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const BusinessEmailList = require('./models/emailSchema')

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

router.post('/addEmail', async (req, res)=>{
  try {
    // Connect to MongoDB database
    const mongoDB = 'mongodb://localhost/my_database';
    await mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

    // Create a new email list document
    const newEmail = new BusinessEmailList({
      businessName: businessName,
      email: email
    });

    // Save the document to the database
    await newEmail.save();

    console.log(`Added email ${email} for business ${businessName} to the email list`);

    // Disconnect from the database
    await mongoose.disconnect();
  } catch (err) {
    console.error(`Error adding email ${email} for business ${businessName} to the email list: ${err.message}`);
  }
})

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
