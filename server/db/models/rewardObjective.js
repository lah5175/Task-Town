const Sequelize = require('sequelize');
const db = require('../db');

// NOTE ABOUT REWARD OBJECTIVES
// A player has the option to create a checklist of objectives for their reward.
// When they check off all objectives, the reward will auto-complete.
// The same will also work in reverse.

const RewardObjective = db.define('rewardObjective', {
  objective: {
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

module.exports = RewardObjective;