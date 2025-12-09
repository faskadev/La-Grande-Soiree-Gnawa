const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const EventInfo = sequelize.define('EventInfo', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false
  },
  bannerUrl: {
    type: DataTypes.STRING
  },
  ticketPrice: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  }
}, {
  tableName: 'event_info',
  timestamps: true
});

module.exports = EventInfo;