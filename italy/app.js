const express = require('express');
const app = express();
const path = require('path');
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
const routes = require('./routes/index');

app.use('/', routes);

module.exports = app;
