import React from 'react';
import { shallow } from 'enzyme';
import { Hotspot, mapStateToProps, mapDispatchToProps } from './Hotspot';
import { mockHotspot, mockHotspots, mockCurrentUser } from './mockHotspotData';

import { toggleBirdSighting } from '../../actions/thunks/toggleBirdSighting';

jest.mock('../../actions/thunks/toggleBirdSighting');

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

  describe('mapDispatchToProps', () => {
    it('should dispatch a toggleBirdSighting function from mapDispatchToProps', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = toggleBirdSighting(
        mockCurrentUser,
        'L1743685',
        'norsho'
      );

      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.toggleBirdSighting(mockCurrentUser, 'L1743685', 'norsho');

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
