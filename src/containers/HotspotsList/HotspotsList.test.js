import React from 'react';
import { shallow } from 'enzyme';

import {
  HotspotsList,
  mapStateToProps,
  mapDispatchToProps
} from './HotspotsList';
import { mockHotspots } from './mockHotspotsListData';
import { getNearbyHotspots } from '../../actions/thunks/getNearbyHotspots';

describe('HotspotsList component', () => {
  let wrapper;
  let mockGetNearbyHotspots;

  beforeEach(() => {
    mockGetNearbyHotspots = jest.fn();

    wrapper = shallow(
      <HotspotsList
        getNearbyHotspots={mockGetNearbyHotspots}
        hotspots={mockHotspots}
        loading={false}
      />
    );
  });

  it('should match the snapshot when the data is still loading', () => {
    wrapper = shallow(
      <HotspotsList
        getNearbyHotspots={mockGetNearbyHotspots}
        hotspots={[]}
        loading={true}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot when the data is has been populated', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should return an object with a hotspots array and a loading boolean', () => {
      const mockStore = {
        hotspots: mockHotspots,
        hotspotsLoading: true
      };

      const expected = {
        hotspots: mockHotspots,
        loading: true
      };

      const mappedProps = mapStateToProps(mockStore);

      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should dispatch a function from mapDispatchToProps', () => {
      const mockDispatch = jest.fn();

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.getNearbyHotspots();

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
