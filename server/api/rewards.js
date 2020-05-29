const express = require('express');
const router = express.Router();
const {Reward, RewardObjective} = require('../db/models');

// Get all rewards for a single user

router.get('/users/:userId', async (req, res, next) => {
  try {
    const rewards = await Reward.findAll({
      where: {userId: req.params.userId},
      include: RewardObjective
    });
    res.json(rewards);
  } 
  catch (error) {
    next(error);
  }
})

// Add a new reward

router.post('/users/:userId', async (req, res, next) => {
  try {
    const {name, rewardType, rewardAmount} = req.body;
    const newReward = await Reward.create({
      name,
      rewardType,
      rewardAmount,
      userId: req.params.userId
    })

    res.status(201).json(newReward);
  } 
  catch (error) {
    next(error);
  }
})

// Add a new reward objective

router.post('/reward/:rewardId', async (req, res, next) => {
  try {
    const {objective} = req.body;
    const newObjective = await RewardObjective.create({
      objective,
      rewardId: req.params.rewardId
    })

    res.status(201).json(newObjective);
  } 
  catch (error) {
    next(error);
  }
})

// Update a reward

router.put('/reward/:rewardId', async (req, res, next) => {
  try {
    const reward = await Reward.findByPk(req.params.rewardId);

    if (reward) {
      const updatedReward = await reward.update(req.body);
      res.json(updatedReward);
    }
    else {
      res.sendStatus(404);
    }
  } 
  catch (error) {
    next(error);
  }
})

// Update a reward objective

router.put('/rewObj/:objId', async (req, res, next) => {
  try {
    const objective = await RewardObjective.findByPk(req.params.objId);

    if (objective) {
      const updatedObj = await objective.update(req.body);
      res.json(updatedObj);
    }
    else {
      res.sendStatus(404);
    }
  } 
  catch (error) {
    next(error);
  }
})

// Delete a reward

router.delete('/reward/:rewardId', async (req, res, next) => {
  try {
    const reward = await Reward.findByPk(req.params.rewardId);

    if (reward) {
      await reward.destroy();
      res.sendStatus(204);
    }
    else {
      res.sendStatus(404);
    }
  } 
  catch (error) {
    next(error);
  }
})

// Delete a reward objective

router.delete('/rewObj/:objId', async (req, res, next) => {
  try {
    const objective = await RewardObjective.findByPk(req.params.objId);

    if (objective) {
      await objective.destroy();
      res.sendStatus(204);
    }
    else {
      res.sendStatus(404);
    }
  } 
  catch (error) {
    next(error);
  }
})

module.exports = router;