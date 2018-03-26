const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const APIError = require('./apierror.js');

const twitRouter = require('./routes/twit.js');
const userRouter = require('./routes/user.js');

const app = express();
const dbName = process.env.DB || 'test';
const cache = [];

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/twits', twitRouter);
app.use('/users', userRouter);

mongoose.connect(`mongodb://localhost/${dbName}`);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  if (err instanceof APIError) {
    res.status(err.status).json({ error: err.message });
  } else {
    res.status(400).json({ error: err.message });
  }
});

module.exports = app;
