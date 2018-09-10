import React from 'react';
import { shallow } from 'enzyme';
import BirdInfo from './BirdInfo';

import { mockBird } from './mockBirdInfoData';

describe('BirdInfo component', () => {
  let wrapper;

  beforeEach(() => {
    // wrapper = shallow(<BirdInfo bird={mockBird} />);
  });

  it('should match the snapshot', () => {
    // window.fetch = jest.fn().mockImplementation(() =>
    //   Promise.resolve({
    //     json: () => Promise.resolve()
    //   })
    // );
    // expect(wrapper).toMatchSnapshot();
  });
});
