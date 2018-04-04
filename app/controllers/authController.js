const { User } = require('../models');
const bcrypt = require('bcryptjs');

module.exports = {
  signin(req, res) {
    return res.render('auth/signin', { layout: 'layouts/auth' });
  },

  signup(req, res) {
    return res.render('auth/signup', { layout: 'layouts/auth' });
  },

  async register(req, res) {
    try {
      const { email } = req.body;

      if (await User.findOne({ where: { email } })) {
        req.flash('error', 'E-mail já cadastrado');
        return res.redirect('/signup');
      }

      const password = await bcrypt.hash(req.body.password, 5);

      await User.create({ ...req.body, password });

      req.flash('success', 'Usuário cadastrado com sucesso');
      return res.redirect('/');
    } catch (err) {
      console.log(err);
      return res.send('/signup');
    }
  },
};
