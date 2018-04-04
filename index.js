require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./app/routes');
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');
const hbs = require('hbs');
const sessionConfig = require('./config/session');

const app = express();

app.use(express.static(path.join(__dirname, 'app', 'public')));
app.set('views', path.join(__dirname, 'app', 'views'));
app.set('view engine', 'hbs');

hbs.registerPartials(path.join(__dirname, 'app', 'views', 'partials'));

app.use(session(sessionConfig));
app.use(flash());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/', routes);

app.listen(process.env.PORT || 3000);
