import React from 'react';
import { shallow } from 'enzyme';

import LoadingSpinner from './LoadingSpinner';

describe('LoadingSpinner component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<LoadingSpinner />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
