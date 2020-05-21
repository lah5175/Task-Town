const express = require('express');
const router = express.Router();
const {Task} = require('../db');

// Get all tasks for a user

router.get('/user/:userId', async (req, res, next) => {
  try {
    const tasks = await Task.findAll({where: {userId: req.params.userId}});
    res.json(tasks);
  } 
  catch (error) {
    next(error);
  }
})

//Create a task and associate with a particular user

router.post('/user/:userId', async (req, res, next) => {
  try {
    const {name, description, complete, streak} = req.body;
    const task = await Task.create({
      name, 
      description, 
      complete, 
      streak, 
      userId: req.params.userId
    });

    res.json(task);
  } 
  catch (error) {
    next(error);
  }
})

// Update a task

router.put('/', async (req, res, next) => {
  try {
    const task = await Task.findByPK(req.body.id);
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
    const task = await Task.findByPK(req.params.taskId);
    await task.destroy();
    res.sendStatus(204);
  } 
  catch (error) {
    next(error);
  }
})

module.exports = router;