const Sequelize = require('sequelize');
const db = require('../db');

const Checklist = db.define('checklist', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  complete: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
})

module.exports = Checklist;

/*
!!!!!!!!!!!!!!!!!!!!!!!!!
!! ADD TO THIS SECTION !!
!!!!!!!!!!!!!!!!!!!!!!!!!

1. Hook to validate that length of name is reasonable
*/