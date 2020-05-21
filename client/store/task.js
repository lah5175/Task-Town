import axios from 'axios';

const initialState = [];

// ACTION CONSTANTS

const SET_USER_TASKS = 'SET_USER_TASKS';
const ADD_NEW_TASK = 'ADD_NEW_TASK';
const UPDATE_TASK = 'UPDATE_TASK';
const DELETE_TASK = 'DELETE_TASK';

// ACTION CREATORS

const setTasks = tasks => ({
  type: SET_USER_TASKS,
  tasks
})

const addTask = task => ({
  type: ADD_NEW_TASK,
  task
})

const updateTask = task => ({
  type: UPDATE_TASK,
  task
})

const deleteTask = taskId => ({
  type: DELETE_TASK,
  taskId
})

// THUNKS

export const fetchTasks = userId => async dispatch => {
  try {
    const {data} = await axios.get(`/tasks/user/${userId}`);
    dispatch(setTasks(data));
  } 
  catch (error) {
    console.error(error);
  }
}

export const addTaskThunk = (userId, task) => async dispatch => {
  try {
    const {data} = await axios.post(`/tasks/user/${userId}`, task);
    dispatch(addTask(data));
  } 
  catch (error) {
    console.error(error);
  }
}

export const updateTaskThunk = task => async dispatch => {
  try {
    const {data} = await axios.put('/tasks', task);
    dispatch(updateTask(data));
  } 
  catch (error) {
    console.error(error);
  }
}

export const deleteTaskThunk = taskId => async dispatch => {
  try {
    await axios.delete(`/tasks/${taskId}`);
    dispatch(deleteTask(taskId));
  } 
  catch (error) {
    console.error(error);
  }
}

// REDUCER

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_TASKS:
      return action.tasks;
    case ADD_NEW_TASK:
      return [...state, action.task];
    case UPDATE_TASK:
      return state.map(task => task.id === action.task.id ? action.task : task);
    case DELETE_TASK:
      return state.filter(task => task.id !== action.taskId);
    default:
      return state;
  }
}

export default reducer;