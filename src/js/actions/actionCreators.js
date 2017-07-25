import axios from 'axios';
// import 'whatwg-fetch';
import {
  GET_USER_DATA,
  GET_USER_DATA_ERROR,
  LOADED_INITIAL_USER_DATA
} from './types';
import {ROOT_URL} from '../API';

export const getUserData = (payload) => ({
  type: GET_USER_DATA,
  payload
});

export const getUserDataError = (payload) => ({
  type: GET_USER_DATA_ERROR,
  payload
});

export const loadedInitialUserData = () => ({
  type: LOADED_INITIAL_USER_DATA
});

/*****************************************************/
// USING AXIOS
/*****************************************************/
export const getUserDataAsync = () => {
  return function (dispatch) {
    return axios
    .get(ROOT_URL)
    .then(response => {
      dispatch(getUserData(response.data));
      dispatch(loadedInitialUserData());
    })
    .catch(err => {
      dispatch(getUserDataError(err.response.data));
    });
  };
};

/*****************************************************/
// USING FETCH
/*****************************************************/
/*
export const getUserDataAsync = () => {
  return function (dispatch) {
    return fetch(ROOT_URL)
    .then(response => response.json())
    .then(json => {
      if (json.error) {
        return dispatch(getUserDataError(json.error));
      }
      dispatch(getUserData(json));
      dispatch(loadedInitialUserData());
    })
    .catch(err => dispatch(getUserDataError(err)));
  };
};
*/
