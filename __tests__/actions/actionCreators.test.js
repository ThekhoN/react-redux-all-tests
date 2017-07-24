import moxios from 'moxios';
// import {spy} from 'sinon';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  GET_USER_DATA,
  LOADED_INITIAL_USER_DATA,
  GET_USER_DATA_ERROR
} from '../../src/js/actions/types';
import {
  getUserData,
  getUserDataAsync
} from '../../src/js/actions/actionCreators';
import {dummyData} from '../../src/js/API';
import {intialStateUserData} from '../../src/js/reducers/userData';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
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
    const store = mockStore({userData: {}});
    return store.dispatch(getUserDataAsync())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
