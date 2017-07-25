import React, {Component} from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import ConnectedAllUserContainer, {AllUserContainer} from '../../../src/js/containers/all-user-container';
import {dummyData} from '../../../src/js/API';

describe('AllUserContainer Container renders correctly', () => {
  // it('renders correctly', () => {
  //   const tree = renderer.create(
  //     <AllUserContainer data={dummyData} />
  //   ).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AllUserContainer data={dummyData} />)
  });
  it('renders the Component', () => {
    expect(wrapper.length).toEqual(1);
  });
});
