/******************************************************************************/
  // USING AXIOS & MOXIOS
/******************************************************************************/
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  GET_USER_DATA,
  LOADED_INITIAL_USER_DATA,
  GET_USER_DATA_ERROR
} from '../../src/js/actions/types';
import {
  getUserDataAsync
} from '../../src/js/actions/actionCreators';
import {dummyData} from '../../src/js/API';
import {intialStateUserData} from '../../src/js/reducers/userData';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const errorGetUserDataAsync = 'SERVER ERROR';
describe('actionCreatorsAsync: getUserDataAsync', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it('returns GET_USER_DATA with DATA, LOADED_INITIAL_USER_DATA on getUserDataAsync SUCCESS', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: dummyData
      });
    });
    const expectedActions = [
      {type: GET_USER_DATA, payload: dummyData},
      {type: LOADED_INITIAL_USER_DATA}
    ];
    const store = mockStore({userData: intialStateUserData});
    return store.dispatch(getUserDataAsync())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
  it('returns GET_USER_DATA_ERROR on getUserDataAsync FAIL', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 422,
        response: errorGetUserDataAsync
      });
    });
    const expectedActions = [
      {type: GET_USER_DATA_ERROR, payload: errorGetUserDataAsync}
    ];
    const store = mockStore({userData: intialStateUserData});
    return store.dispatch(getUserDataAsync())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});

/******************************************************************************/
  // USING FETCH
/******************************************************************************/
/*
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  GET_USER_DATA,
  LOADED_INITIAL_USER_DATA,
  GET_USER_DATA_ERROR
} from '../../src/js/actions/types';
import {
  getUserDataAsync
} from '../../src/js/actions/actionCreators';
import {dummyData} from '../../src/js/API';
import {intialStateUserData} from '../../src/js/reducers/userData';
import mockResponse from '../../__test-helpers/mockResponse';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const errorGetUserDataAsync = 'SERVER ERROR';

describe('actionCreatorsAsync: getUserDataAsync', () => {
  it('returns GET_USER_DATA with DATA, LOADED_INITIAL_USER_DATA on getUserDataAsync SUCCESS', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve(mockResponse(200, null, JSON.stringify(dummyData)))
    });
    const store = mockStore({userData: intialStateUserData});
    const expectedActions = [
      {type: GET_USER_DATA, payload: dummyData},
      {type: LOADED_INITIAL_USER_DATA}
    ];
    return store.dispatch(getUserDataAsync())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
  it ('returns GET_USER_DATA_ERROR on getUserDataAsync FAIL', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve(mockResponse(422, errorGetUserDataAsync, JSON.stringify({error: errorGetUserDataAsync})));
    });
    const store = mockStore({userData: intialStateUserData});
    const expectedActions = [
      {type: GET_USER_DATA_ERROR, payload: errorGetUserDataAsync}
    ];
    return store.dispatch(getUserDataAsync())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
*/
