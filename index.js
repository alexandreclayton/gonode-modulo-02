require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./app/routes');
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');
const nunjucks = require('nunjucks');
const sessionConfig = require('./config/session');
const methodOverride = require('method-override');

const app = express();

app.use(express.static(path.join('app', 'public')));

nunjucks.configure(path.join('app', 'views'), {
  autoescape: true,
  express: app,
});

app.set('view engine', 'njk');

app.use(session(sessionConfig));
app.use(flash());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

// Routes
app.use('/', routes);

app.listen(process.env.PORT || 3000);
