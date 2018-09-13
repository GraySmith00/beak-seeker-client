import React from 'react';
import { shallow } from 'enzyme';
import { Hotspot, mapStateToProps } from './Hotspot';
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

  describe('mapStateToProps', () => {
    it('should return an object with a hotspots array', () => {
      const mockStore = {
        hotspots: mockHotspots
      };
      const expected = {
        hotspots: mockHotspots
      };

      const mappedProps = mapStateToProps(mockStore);

      expect(mappedProps).toEqual(expected);
    });
  });
});
