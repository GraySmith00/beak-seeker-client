import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

describe('Header component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header currentPage={'Home'} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
