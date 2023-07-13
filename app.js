require('dotenv').config();
require('express-async-errors');

// express
const express = require('express');
const app = express();

// rest of the packages
const morgan = require('morgan');

// db
const connectDb = require('./db/connect');

// middlewares
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

const port = process.env.PORT || 5000;

app.use(morgan('tiny'));
app.use(express.json()); // to access json in req.body

app.get('/', (req, res) => {
  res.send('ecommerce');
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(port, console.log('http://localhost:5000'));
  } catch (error) {
    console.log(error);
  }
};

start();
