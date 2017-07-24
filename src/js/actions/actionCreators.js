import {
  GET_USER_DATA,
  GET_USER_DATA_ERROR,
  LOADED_INITIAL_USER_DATA
} from './types';
import {ROOT_URL} from '../API';
import axios from 'axios';

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

export const getUserDataAsync = () => {
  return function (dispatch) {
    return axios
    .get(ROOT_URL)
    .then(response => {
      // console.log('data: ', data);
      dispatch(getUserData(response.data));
      dispatch(loadedInitialUserData());
    })
    .catch(err => {
      console.log('error in getUserDataAsync: ', err);
      dispatch(getUserDataError(err));
    });
  };
};
