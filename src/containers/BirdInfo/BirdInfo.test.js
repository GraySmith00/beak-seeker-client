import React from 'react';
import { shallow } from 'enzyme';
import BirdInfo from './BirdInfo';

import { mockBird } from './mockBirdInfoData';

describe('BirdInfo component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BirdInfo bird={mockBird} />, {
      disableLifecycleMethods: true
    });
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
