import userData, {intialStateUserData} from '../../src/js/reducers/userData';
import {
  GET_USER_DATA,
  LOADED_INITIAL_USER_DATA
} from '../../src/js/actions/types';
import {dummyData} from '../../src/js/API';

describe('userData reducer', () => {
  it ('returns correct intialStateUserData by default', () => {
    expect(userData(undefined, {})).toEqual(intialStateUserData);
  });

  it ('returns with data:DATA on GET_USER_DATA', () => {
    expect(userData(intialStateUserData, {
      type: GET_USER_DATA,
      payload: dummyData
    })).toEqual({...intialStateUserData, data: dummyData});
  });

  it ('return with firstLoaded:TRUE on LOADED_INITIAL_USER_DATA', () => {
    expect(userData(intialStateUserData, {
      type: LOADED_INITIAL_USER_DATA
    })).toEqual({...intialStateUserData, firstLoaded: true});
  });
});
