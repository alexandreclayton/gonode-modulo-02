module.exports = {
  secret: process.env.SECRET_TOKEN,
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
  },
};
