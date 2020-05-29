import axios from 'axios';

const initialState = [];

// ACTION CONSTANTS

const GET_REWARDS = 'GET_REWARDS';
const ADD_REWARD = 'ADD_REWARD';
const ADD_REWARD_OBJECTIVE = 'ADD_REWARD_OBJECTIVE';
const UPDATE_REWARD = 'UPDATE_REWARD';
const UPDATE_REWARD_OBJECTIVE = 'UPDATE_REWARD_OBJECTIVE';
const DELETE_REWARD = 'DELETE_REWARD';
const DELETE_REWARD_OBJECTIVE = 'DELETE_REWARD_OBJECTIVE';

// ACTION CREATORS

const getRewards = rewards => ({
  type: GET_REWARDS,
  rewards
})

const addReward = reward => ({
  type: ADD_REWARD,
  reward
})

const addRewardObjective = (rewardId, objective) => ({
  type: ADD_REWARD_OBJECTIVE,
  rewardId,
  objective
})

const updateReward = reward => ({
  type: UPDATE_REWARD,
  reward
})

const updateRewardObjective = (rewardId, objective) => ({
  type: UPDATE_REWARD_OBJECTIVE,
  rewardId,
  objective
})

const deleteReward = rewardId => ({
  type: DELETE_REWARD,
  rewardId
})

const deleteRewardObjective = (rewardId, objId) => ({
  type: DELETE_REWARD_OBJECTIVE,
  rewardId,
  objId
})

// THUNKS

export const getRewardsThunk = userId => async dispatch => {
  try {
    const {data} = await axios.get(`/api/rewards/user/${userId}`);
    dispatch(getRewards(data));
  } 
  catch (error) {
    console.error(error);
  }
}

export const addRewardThunk = (userId, reward) => async dispatch => {
  try {
    const {data} = await axios.post(`/api/rewards/user/${userId}`, reward);
    dispatch(addReward(data));
  } 
  catch (error) {
    console.error(error);
  }
}

export const addRewardObjThunk = (rewardId, objective) => async dispatch => {
  try {
    const {data} = await axios.post(`/api/rewards/reward/${rewardId}`, objective);
    dispatch(addRewardObjective(data));
  } 
  catch (error) {
    console.error(error);
  }
}

export const updateRewardThunk = (rewardId, reward) => async dispatch => {
  try {
    const {data} = await axios.put(`/api/rewards/reward/${rewardId}`, reward);
    dispatch(updateReward(data));
  } 
  catch (error) {
    console.error(error);
  }
}

export const updateRewardObjThunk = (rewardId, objective) => async dispatch => {
  try {
    const {data} = await axios.put(`/api/rewards/rewObj/${objective.id}`, objective);
    dispatch(updateRewardObjective(rewardId, data));
  } 
  catch (error) {
    console.error(error);
  }
}

export const deleteRewardThunk = rewardId => async dispatch => {
  try {
    await axios.delete(`/api/rewards/reward/${rewardId}`);
    dispatch(deleteReward(rewardId));
  } 
  catch (error) {
    console.error(error);
  }
}

export const deleteRewardObjThunk = (rewardId, objectiveId) => async dispatch => {
  try {
    await axios.delete(`/api/rewards/rewObj/${objectiveId}`);
    dispatch(deleteRewardObjective(rewardId, objectiveId));
  } 
  catch (error) {
    console.error(error);
  }
}

// REDUCER

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REWARDS:
      return action.rewards;

    case ADD_REWARD:
      return [...state, action.reward];

    case ADD_REWARD_OBJECTIVE:
      const addCopy = [...state];
      return addCopy.map(reward => {
        if (reward.id === action.rewardId) {
          reward.rewardObjectives.push(action.objective);
        }
        return reward;
      })

    case UPDATE_REWARD:
      return state.map(reward => reward.id === action.reward.id ? action.reward : reward);

    case UPDATE_REWARD_OBJECTIVE:
      const updateCopy = [...state];
      let updateReward = updateCopy.find(reward => reward.id === action.rewardId);
      updateReward.rewardObjectives = updateReward.rewardObjectives.map(obj => {
        if (obj.id === action.objective.id) return action.objective;
        else return obj;
      })
      return updateCopy;

    case DELETE_REWARD:
      return state.filter(reward => reward.id !== action.rewardId);

    case DELETE_REWARD_OBJECTIVE:
      const deleteCopy = [...state];
      let deleteReward = deleteCopy.find(reward => reward.id === action.rewardId);
      deleteReward.rewardObjectives = deleteReward.rewardObjectives.filter(obj => obj.id !== action.objId);
      return deleteCopy;
      
    default:
      return state;
  }
}

export default reducer;