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

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should set the state with the proper text', () => {
    expect(wrapper.state()).toEqual({
      tweetText:
        'Just spotted a sweet Canada Goose at Belmar Park and logged it on @BeakSeeker!!!'
    });
  });

  it('should post a tweet when the submit button is clicked', () => {
    const mockEvent = {
      target: {
        value:
          'Just spotted a sweet Canada Goose at Belmar Park and logged it on @BeakSeeker!!!'
      },
      preventDefault: jest.fn()
    };
    wrapper.find('.twitter-form').simulate('submit', mockEvent);
    expect(wrapper.state()).toEqual({
      tweetText: ''
    });
  });

  it('should call postTweetRequest when the submit button gets called', () => {
    const mockEvent = {
      target: {
        value:
          'Just spotted a sweet Canada Goose at Belmar Park and logged it on @BeakSeeker!!!'
      },
      preventDefault: jest.fn()
    };
    wrapper.find('.twitter-form').simulate('submit', mockEvent);

    expect(tweetPostRequest).toHaveBeenCalled();
  });
});
