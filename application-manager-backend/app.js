
var connectMDB = require('./db/connectMongo.js');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cors =require('cors');
require('dotenv').config()
let userModel = require('./models/user.js');

var urlDB = process.env.DATABASE_URL;
var app = express();



connectMDB(urlDB);

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//Routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var appilcationRouter = require("./routes/application");

// Routes Configuration
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/applications', appilcationRouter);


app.listen(process.env.PORT,() => {
  console.log("Server Has Started Running at: ",process.env.PORT);
}
)
module.exports = app;
