const express = require('express');
const router = express.Router();
const {Daily} = require('../db/models');

// Get all tasks for a user

router.get('/user/:userId', async (req, res, next) => {
  try {
    const tasks = await Daily.findAll({where: {userId: req.params.userId}});
    res.json(tasks);
  } 
  catch (error) {
    next(error);
  }
})

//Create a task and associate with a particular user

router.post('/user/:userId', async (req, res, next) => {
  try {
    const {name, description} = req.body;
    const daily = await Daily.create({
      name, 
      description, 
      userId: req.params.userId
    });

    res.json(daily);
  } 
  catch (error) {
    next(error);
  }
})

// Update a task

router.put('/', async (req, res, next) => {
  try {
    const task = await Daily.findByPk(req.body.id);
    if (task) {
      const updatedTask = await task.update(req.body);
      res.json(updatedTask);
    }
    else {
      res.sendStatus(404);
    }
  } 
  catch (error) {
    next(error);
  }
})

// Delete task

router.delete('/:taskId', async (req, res, next) => {
  try {
    const task = await Daily.findByPK(req.params.taskId);
    await task.destroy();
    res.sendStatus(204);
  } 
  catch (error) {
    next(error);
  }
})

module.exports = router;