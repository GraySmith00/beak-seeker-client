import React from 'react';
import { shallow } from 'enzyme';

import { PostTweet } from './PostTweet';
import { mockUserWithSightings, mockHotspots } from './mockPostTweetData';
import { tweetPostRequest } from '../../utils/apiCalls';

jest.mock('../../utils/apiCalls');

describe('PostTweet component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <PostTweet currentUser={mockUserWithSightings} hotspots={mockHotspots} />
    );
  });

  it.skip('should set the error state when the tweet post has been rejected', () => {});
});
