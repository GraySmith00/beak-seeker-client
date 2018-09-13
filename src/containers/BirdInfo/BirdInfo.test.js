import React from 'react';
import { shallow } from 'enzyme';
import { BirdInfo } from './BirdInfo';

import { mockBird } from './mockBirdInfoData';

describe('BirdInfo component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <BirdInfo locId={mockBird.locId} speciesCode={mockBird.speciesCode} />,
      {
        disableLifecycleMethods: true
      }
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
