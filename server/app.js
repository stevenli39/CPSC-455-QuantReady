const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require ('cors');
require('dotenv').config();
require('./models/User');
require('./models/Question');

const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const authRouter = require('./routes/auth');
<<<<<<< HEAD
// const questionRouter = require('./routes/questionsMongo');
const questionRouter = require('./routes/questions');
const questionsRouter2 = require('./routes/questionsMongo');

=======
const questionRouter = require('./routes/questions');
>>>>>>> 2576115863ebf4b23d39ec10959680267c91edb4
mongoose.connect(process.env.MONGO_URI);

const app = express();

// Allow requests from http://localhost:3000
const corsOptions = {
    origin: ['http://localhost:3000', 'https://quantready455.com'],
    credentials: true, // Set 'Access-Control-Allow-Credentials' to true
  };

app.use(cors(corsOptions));
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in milliseconds
        keys: [process.env.COOKIE_KEY]
    })
); 
app.use(passport.initialize());
app.use(passport.session());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/questions', questionRouter);
app.use('/questions2', questionsRouter2);

module.exports = app;
