import React from 'react';
import { shallow } from 'enzyme';
import { BirdInfo } from './BirdInfo';

import { mockBird, mockHotspotsWithBirds } from './mockBirdInfoData';

jest.mock('../../utils/apiCalls');

describe('BirdInfo component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <BirdInfo
        locId={mockBird.locId}
        speciesCode={mockBird.speciesCode}
        hotspots={mockHotspotsWithBirds}
      />,
      {
        disableLifecycleMethods: true
      }
    );
  });

  it('should have an initial local state', () => {
    const expected = {
      comName: '',
      birdImage: '',
      birdInfo: '',
      loading: true
    };

    expect(wrapper.state()).toEqual(expected);
  });

  describe('loadBirdInfo', () => {
    it('should set the proper state of the bird that was passed in', async () => {
      const expected = {
        birdImage:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Kanadagans_Branta_canadensis.jpg/200px-Kanadagans_Branta_canadensis.jpg',
        birdInfo:
          'The Canada goose (Branta canadensis) is a large wild goose species with a black head and neck, white cheeks, white under its chin, and a brown body.',
        comName: 'Canada Goose',
        loading: false
      };

      await wrapper.instance().loadBirdInfo();

      expect(wrapper.state()).toEqual(expected);
    });
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
