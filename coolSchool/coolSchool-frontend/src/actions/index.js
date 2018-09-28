import axios from 'axios';
import {
  GET_RIDES_ASYNC,
  ADD_RIDE_ASYNC,
  EDIT_RIDE_ASYNC,
  DELETE_RIDE_ASYNC,
  LOGIN_USER_ASYNC,
  GET_USER_ASYNC,
  ADD_USER_ASYNC,
  EDIT_USER_ASYNC,
  DELETE_USER_ASYNC
} from '../constants'


/**
 *    Here are some sample asynchronous action creators that you'll likely want to use
 *    to handle basic CRUD routes from your REST API / DB
 *    
 *    Not all are necessary and they are not fully implemented as well. 
 *    Treat this as guidance.
 */

// ####################### RIDES #######################

export const getRides = () => async dispatch => {
  let response = await axios.get('');
  dispatch({ type: GET_RIDES_ASYNC });
}

export const addRide = ride => async dispatch => {
  let response = await axios.post('', ride);
  dispatch({ type: ADD_RIDE_ASYNC });
}

export const editRide = ride => async dispatch => {
  let response = await axios.put('', ride);
  dispatch({ type: EDIT_RIDE_ASYNC });
}

export const deleteRide = id => async dispatch => {
  let response = await axios.delete('');
  dispatch({ type: DELETE_RIDE_ASYNC });
}

// ####################### USERS #######################

export const loginUser = user => async dispatch => {
  let response = axios.post('');
  dispatch({ type: LOGIN_USER_ASYNC });
}

export const getUser = userID => async dispatch => {
  let response = await axios.get('');
  dispatch({ type: GET_USER_ASYNC });
}

export const addUser = user => async dispatch => {
  let response = await axios.post('', user);
  dispatch({ type: ADD_USER_ASYNC });
}

export const editUser = user => async dispatch => {
  let response = await axios.put('', user);
  dispatch({ type: EDIT_USER_ASYNC });
}

export const deleteUser = id => async dispatch => {
  let response = await axios.delete('');
  dispatch({ type: DELETE_USER_ASYNC });
}
