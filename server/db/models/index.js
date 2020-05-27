const User = require('./user');
const Daily = require('./daily');
const ToDo = require('./todo');
const Checklist = require('./checklist');
const GameState = require('./gameState');

// This file serves as a centralized place to export db models
// and to form associations between them

// ASSOCIATIONS

User.hasOne(GameState);

User.hasMany(Daily);
User.hasMany(ToDo);

Daily.hasMany(Checklist);
ToDo.hasMany(Checklist);

module.exports = {
  User,
  Daily,
  ToDo,
  Checklist,
  GameState
}
