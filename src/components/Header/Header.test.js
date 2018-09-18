import React from 'react';
import { shallow } from 'enzyme';

import { Header } from './Header';

describe('Header component', () => {
  let wrapper;
  let mockHistory;
  let mockFn;

  beforeEach(() => {
    mockFn = jest.fn();
    mockHistory = {
      goBack: mockFn
    };
    wrapper = shallow(<Header currentPage={'Home'} history={mockHistory} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call the goBack method on history when clicked', () => {
    wrapper.find('.back-icon').simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });
});
