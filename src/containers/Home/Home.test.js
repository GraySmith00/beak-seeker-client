import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

describe('Home component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Home />);
  });
  it('shuould match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
