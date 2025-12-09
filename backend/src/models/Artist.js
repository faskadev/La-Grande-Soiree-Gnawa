const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Artist = sequelize.define('Artist', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  bio: {
    type: DataTypes.TEXT
  },
  photoUrl: {
    type: DataTypes.STRING
  },
  performanceTime: {
    type: DataTypes.STRING
  },
  genre: {
    type: DataTypes.STRING,
    defaultValue: 'Gnawa'
  }
}, {
  tableName: 'artists',
  timestamps: true
});

module.exports = Artist;