import React from 'react';
import { shallow } from 'enzyme';

import { PostTweet } from './PostTweet';
import { mockUserWithSightings, mockHotspots } from './mockPostTweetData';

jest.mock('../../utils/apiCalls');

describe('PostTweet component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <PostTweet currentUser={mockUserWithSightings} hotspots={mockHotspots} />
    );
  });

  it('should set the error state when the tweet post has been rejected', () => {
    window.fetch = jest
      .fn()
      .mockImplementation(() => Promise.reject(new Error('failed to fetch')));
    expect(wrapper.state().error).toEqual('');
  });
});
