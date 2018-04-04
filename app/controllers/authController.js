const { User } = require('../models');
const bcrypt = require('bcryptjs');

module.exports = {
  signin(req, res) {
    return res.render('auth/signin', { layout: '_layouts/auth' });
  },

  signup(req, res) {
    return res.render('auth/signup', { layout: '_layouts/auth' });
  },

  async register(req, res) {
    try {
      const { email } = req.body;

      if (await User.findOne({ where: { email } })) {
        return console.log('E-mail já cadastrado');
      }

      const password = await bcrypt.hash(req.body.password, 5);

      await User.create({ ...req.body, password });

      return res.redirect('/');
    } catch (err) {
      console.log(err);
      return res.send('/signup');
    }
  },
};
