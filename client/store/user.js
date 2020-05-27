import axios from "axios";
import history from "../history";

/**
 * ACTION TYPES
 */
const GET_USER = "GET_USER";
const REMOVE_USER = "REMOVE_USER";

/**
 * INITIAL STATE
 */
const defaultUser = {};

/**
 * ACTION CREATORS
 */
const getUser = data => ({ type: GET_USER, data });
const removeUser = () => ({ type: REMOVE_USER });

/**
 * THUNK CREATORS
 */
export const me = () => async dispatch => {
  try {
    const res = await axios.get("/auth/me");
    dispatch(getUser(res.data || defaultUser));
  } catch (err) {
    console.error(err);
  }
};

export const login = (user, password) => async dispatch => {
  let res;
  try {
    res = await axios.post(`/auth/login`, { user, password });
  } catch (authError) {
    return dispatch(getUser({ error: authError }));
  }

  console.log(res);
  try {
    dispatch(getUser(res.data));
    history.push("/home");
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr);
  }
};

export const signup = (username, email, password) => async dispatch => {
  let res;
  try {
    res = await axios.post(`/auth/signup`, { username, email, password });
  } catch (authError) {
    return dispatch(getUser({ error: authError }));
  }

  console.log(res);
  try {
    dispatch(getUser(res.data));
    history.push("/home");
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr);
  }
};

export const logout = () => async dispatch => {
  try {
    await axios.post("/auth/logout");
    dispatch(removeUser());
    history.push("/login");
  } catch (err) {
    console.error(err);
  }
};

/**
 * REDUCER
 */
export default function(state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.data.user || defaultUser;
    case REMOVE_USER:
      return defaultUser;
    default:
      return state;
  }
}
