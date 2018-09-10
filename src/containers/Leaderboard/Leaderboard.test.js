import React from 'react';
import { shallow } from 'enzyme';

import Leaderboard from './Leaderboard';

describe('Leaderboard component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Leaderboard />);
  });

  it('it should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
