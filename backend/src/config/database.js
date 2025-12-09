const { Sequelize } = require('sequelize');
require('dotenv').config();

const {
  DATABASE_URL,
  DB_NAME,
  DB_USER,
  DB_PASS,
  DB_HOST,
  DB_PORT,
  DB_DIALECT = 'postgres',
  NODE_ENV
} = process.env;

let sequelize;

const sslOptions = NODE_ENV === 'production' ? { require: true, rejectUnauthorized: false } : false;

if (DATABASE_URL) {
  sequelize = new Sequelize(DATABASE_URL, {
    dialect: DB_DIALECT,
    logging: false,
    dialectOptions: {
      ssl: sslOptions
    }
  });
} else if (DB_NAME && DB_USER) {
  sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS || null, {
    host: DB_HOST || 'localhost',
    port: DB_PORT ? parseInt(DB_PORT, 10) : undefined,
    dialect: DB_DIALECT,
    logging: false,
    dialectOptions: {
      ssl: sslOptions
    }
  });
} else {
  throw new Error('Database configuration missing: set `DATABASE_URL` or `DB_NAME` and `DB_USER` in your environment (.env)');
}

module.exports = sequelize;