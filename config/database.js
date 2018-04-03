require('dotenv').config();

module.exports = {
  username: process.env.DATABASE_USER || 'root',
  password: process.env.DATABASE_PASS || null,
  database: process.env.DATABASE_NAME || 'database',
  host: process.env.DATABASE_HOST || '127.0.0.1',
  dialect: 'mysql',
};
