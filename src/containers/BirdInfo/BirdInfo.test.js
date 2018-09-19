import React from 'react';
import { shallow } from 'enzyme';
import { BirdInfo, mapStateToProps } from './BirdInfo';

import { mockBird, mockHotspotsWithBirds } from './mockBirdInfoData';

jest.mock('../../utils/apiCalls');

describe('BirdInfo component', () => {
  let wrapper;
  let expected;

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

    expected = {
      birdImage:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Kanadagans_Branta_canadensis.jpg/200px-Kanadagans_Branta_canadensis.jpg',
      birdInfo:
        'The Canada goose (Branta canadensis) is a large wild goose species with a black head and neck, white cheeks, white under its chin, and a brown body.',
      comName: 'Canada Goose',
      loading: false
    };
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
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

  it('should set the state on componentDidMount', async () => {
    await wrapper.instance().componentDidMount();
    expect(wrapper.state()).toEqual(expected);
  });

  it.skip('should render the proper text if there is no bird image', () => {
    wrapper.setState({
      birdImage: null
    });

    expect(wrapper.find('.not-found-text').text()).toEqual(
      'Sorry, we could not find an image of this bird at this time :('
    );
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

  describe('mapStateToProps', () => {
    it('should return an object with a hotspots array', () => {
      const expected = {
        hotspots: mockHotspotsWithBirds
      };
      const mockStore = {
        hotspots: mockHotspotsWithBirds
      };

      const mappedProps = mapStateToProps(mockStore);

      expect(mappedProps).toEqual(expected);
    });
  });
});
