const express = require('express');

const routes = express.Router();

const authController = require('./controllers/authController');

// set locals
routes.use((req, res, next) => {
  res.locals.layout = 'layouts/default';
  res.locals.flashSuccess = req.flash('success');
  res.locals.flashError = req.flash('error');
  next();
});

/**
 * Auth
 */
routes.get('/', authController.signin);
routes.get('/signup', authController.signup);
routes.post('/register', authController.register);
// routes.post('/authenticate', authController.authenticate);

// catch 404
routes.use((req, res) => {
  res.render('errors/404');
});

// error handler
routes.use((err, req, res, _next) => {
  res.status(err.status || 500);
  res.render('errors/index', {
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {},
  });
});

module.exports = routes;
