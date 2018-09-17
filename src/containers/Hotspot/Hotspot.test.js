import React from 'react';
import { shallow } from 'enzyme';
import { Hotspot, mapStateToProps } from './Hotspot';
import { mockHotspot, mockHotspots, mockCurrentUser } from './mockHotspotData';

describe('Hotspot component', () => {
  let wrapper;
  let mockToggleBirdSighting;

  beforeEach(() => {
    mockToggleBirdSighting = jest.fn();
    wrapper = shallow(
      <Hotspot
        hotspotId={mockHotspot.locId}
        hotspots={mockHotspots}
        toggleBirdSighting={mockToggleBirdSighting}
        currentUser={mockCurrentUser}
      />
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
