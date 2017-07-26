import React from 'react';
import {shallow} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import ConnectedAllUserContainer, {AllUserContainer} from '../../../src/js/containers/all-user-container';
import {dummyData} from '../../../src/js/API';
import {intialStateUserData} from '../../../src/js/reducers/userData';

describe('AllUserContainer', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AllUserContainer data={dummyData} />)
  });
  it('renders the component', () => {
    expect(wrapper.length).toEqual(1);
  });
});

describe('Connected:AllUserContainer', () => {
  const mockStore = configureMockStore();
  let store, container;
  beforeEach(() => {
    store = mockStore({userData: intialStateUserData});
    container = shallow(<ConnectedAllUserContainer store={store} />);
  });
  it('renders connected:component', () => {
    expect(container.length).toEqual(1);
  });
  it('contains props that match initialStateUserData', () => {
    expect(container.prop('data')).toEqual(intialStateUserData.data);
  });
});
