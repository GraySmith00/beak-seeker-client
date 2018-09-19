import React from 'react';
import { shallow } from 'enzyme';
import { Home, mapDispatchToProps } from './Home';

import { mockUser } from './mockHomeData';

jest.mock('../../actions/thunks/setCurrentUser');

describe('Home component', () => {
  let wrapper;
  let setCurrentUser;

  beforeEach(() => {
    setCurrentUser = jest.fn();
    wrapper = shallow(<Home setCurrentUser={setCurrentUser} />);
  });

  it('shuould match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapDispatchToProps', () => {
    it('should dispatch setCurrentUser using a function from mapDispatchToProps', async () => {
      // setup
      const mockDispatch = jest.fn();
      const acitonToDispatch = setCurrentUser(mockUser._id);

      // expectution
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.setCurrentUser(mockUser._id);

      // expectation
      expect(mockDispatch).toHaveBeenCalledWith(acitonToDispatch);
    });
  });
});
