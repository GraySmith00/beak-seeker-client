import React from 'react';
import { shallow } from 'enzyme';

import { HotspotsList } from './HotspotsList';
import { mockHotspots } from './mockHotspotsListData';

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
});
