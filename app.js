require('dotenv').config();

// express
const express = require('express');
const app = express();

// db
const connectDb = require('./db/connect');

const port = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('hi tenzin'));

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(port, console.log('http://localhost:5000'));
  } catch (error) {
    console.log(error);
  }
};

start();
