import React from 'react';
import { shallow } from 'enzyme';
import Hotspot from './Hotspot';
import { mockHotspot } from './mockHotspotData';

describe('Hotspot component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Hotspot hotspot={mockHotspot} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
