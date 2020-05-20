const Sequelize = require('sequelize');
const db = require('../db');

const Daily = db.define('daily', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT
  },
  complete: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  streak: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
    validate: {
      min: 0,
      max: 50000
    }
  }
})

module.exports = Daily;

/*
!!!!!!!!!!!!!!!!!!!!!!!!!
!! ADD TO THIS SECTION !!
!!!!!!!!!!!!!!!!!!!!!!!!!

1. Hook to validate that length of name is reasonable
2. Hook to validate that description is reasonable
3. Hooks to ensure that name/description do not contain any dangerous characters
4. Different types of dailies - daily/weekly/monthly
5. Reset days for monthly/weekly tasks
*/