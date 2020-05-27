const initialState = {};

// ACTION CONSTANTS

const GET_USER = "GET_USER"; // Due to shared action with user

// ACTION CREATORS

// THUNKS

// REDUCER

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return action.data.gameState || {};
    default:
      return state;
  }
}

export default reducer;