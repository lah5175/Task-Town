const Sequelize = require('sequelize');
const db = require('../db');

const GOLD = 'GOLD';
const WOOD = 'WOOD';
const STONE = 'STONE';

// NOTE ABOUT REWARDS
// Types and amounts need to be fine-tuned.
// For now, the specified types/amount limits will suffice for testing purposes.

const Reward = db.define('reward', {
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
  },
  rewardType: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isIn: [[GOLD, WOOD, STONE]]
    }
  },
  rewardAmount: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 100,
    validate: {
      min: 0,
      max: 1000
    }
  } 
})

module.exports = Reward;