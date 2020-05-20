const Sequelize = require('sequelize');
const db = require('../db');

const ToDo = db.define('todo', {
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
  dueDate: {
    type: Sequelize.DATE
  },
  complete: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

module.exports = ToDo;

/*
!!!!!!!!!!!!!!!!!!!!!!!!!
!! ADD TO THIS SECTION !!
!!!!!!!!!!!!!!!!!!!!!!!!!

1. Hook to validate that length of name is reasonable
2. Hook to validate that description is reasonable
3. Hooks to ensure that name/description do not contain any dangerous characters
4. Additional validations for date?
5. How to determine completion status for todos that have checklists?
*/