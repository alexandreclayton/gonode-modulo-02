require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./app/routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/', routes);

app.listen(process.env.PORT || 3000);
