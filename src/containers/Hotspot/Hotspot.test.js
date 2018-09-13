import React from 'react';
import { shallow } from 'enzyme';
import { Hotspot } from './Hotspot';
import { mockHotspot, mockHotspots } from './mockHotspotData';

describe('Hotspot component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Hotspot hotspotId={mockHotspot.locId} hotspots={mockHotspots} />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
