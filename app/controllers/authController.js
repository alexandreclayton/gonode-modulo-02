// const { User } = require('../models');

module.exports = {
  signin(req, res) {
    return res.render('auth/signin', { layout: '_layouts/auth' });
  },

  signup(req, res) {
    return res.render('auth/signup', { layout: '_layouts/auth' });
  },
};
