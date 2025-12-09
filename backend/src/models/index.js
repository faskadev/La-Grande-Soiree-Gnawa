const sequelize = require('../config/database');
const EventInfo = require('./EventInfo');
const Artist = require('./Artist');
const Booking = require('./Booking');

const models = {
  EventInfo,
  Artist,
  Booking
};

module.exports = { sequelize, ...models };