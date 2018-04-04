require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./app/routes');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'app', 'public')));
app.set('views', path.join(__dirname, 'app', 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/', routes);

app.listen(process.env.PORT || 3000);
