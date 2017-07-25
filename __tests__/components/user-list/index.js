import React from 'react';
import renderer from 'react-test-renderer';
import UserList from '../../../src/js/components/user-list';
import {dummyData} from '../../../src/js/API';

describe('UserList Component renders correctly', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <UserList userData={dummyData[0]} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
