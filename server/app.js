const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require ('cors');
const bodyParser = require('body-parser');

require('./models/User');
require('./models/Question');

const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');
const questionRouter = require('./routes/questions');
const commentRouter = require('./routes/comments')

mongoose.connect(keys.mongoURI);

const app = express();

app.use(cors());
app.use(bodyParser.json())
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in milliseconds
        keys: [keys.cookieKey]
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
app.use('/questions', questionRouter);
app.use('/comments', commentRouter)

module.exports = app;
