import React from 'react';
import { shallow } from 'enzyme';

import Footer from './Footer';

describe('Footer component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Footer />);
  });

  it('it should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
