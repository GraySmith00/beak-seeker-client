import React from 'react';
import { shallow } from 'enzyme';

import SignIn from './SignIn';

describe('SignIn component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SignIn />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
