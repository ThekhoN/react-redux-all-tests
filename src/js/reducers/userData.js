import {
  GET_USER_DATA,
  LOADED_INITIAL_USER_DATA
} from '../actions/types';

export const intialStateUserData = {
  firstLoaded: false,
  loaded: false,
  data: [],
  error: ''
};

const userData = (state = intialStateUserData, action) => {
  switch (action.type) {
    case GET_USER_DATA:
      return {...state, data: action.payload};
    case LOADED_INITIAL_USER_DATA:
      return {...state, firstLoaded: true};
    default:
      return state;
  }
};

export default userData;
