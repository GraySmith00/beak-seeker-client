import React from 'react';
import { shallow } from 'enzyme';

import { PostTweet, mapStateToProps } from './PostTweet';
import {
  mockUserWithSightings,
  mockHotspots,
  mockCurrentUser
} from './mockPostTweetData';
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
      error: '',
      tweetText:
        'Just spotted a sweet Canada Goose at Belmar Park and logged it on @BeakSeeker!!!'
    });
  });

  it('should change the text when the input is changed', () => {
    wrapper.find('.text-box').simulate('change', {
      target: { name: 'tweetText', value: 'I love birds!' }
    });

    expect(wrapper.state().tweetText).toEqual('I love birds!');
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
      error: '',
      tweetText:
        'Tweet sent! Tweet @BeakSeeker about another bird sighting if you want!'
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

  describe('mapStateToProps', () => {
    const expected = {
      currentUser: mockCurrentUser,
      hotspots: mockHotspots
    };
    const mockStore = {
      currentUser: mockCurrentUser,
      hotspots: mockHotspots
    };

    const mappedProps = mapStateToProps(mockStore);
    expect(mappedProps).toEqual(expected);
  });
});
