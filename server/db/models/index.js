const User = require('./user');
const Daily = require('./daily');
const ToDo = require('./todo');
const Checklist = require('./checklist');
const GameState = require('./gameState');
const Reward = require('./reward');
const RewardObjective = require('./rewardObjective');

// This file serves as a centralized place to export db models
// and to form associations between them

// ASSOCIATIONS

User.hasOne(GameState);

User.hasMany(Daily);
User.hasMany(ToDo);
User.hasMany(Reward);

Daily.hasMany(Checklist);
ToDo.hasMany(Checklist);

Reward.hasMany(RewardObjective);

module.exports = {
  User,
  Daily,
  ToDo,
  Checklist,
  GameState,
  Reward,
  RewardObjective
}
