import React from 'react';
import { shallow } from 'enzyme';
import { Home } from './Home';

describe('Home component', () => {
  let wrapper;
  let setCurrentUser;

  beforeEach(() => {
    setCurrentUser = jest.fn();
    wrapper = shallow(<Home setCurrentUser={setCurrentUser} />);
  });
  it('shuould match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
