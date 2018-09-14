import { userReducer } from '../userReducer';
import * as actions from '../../actions/userActions';
import { mockUser } from './mockReducerData';

describe('userReducer', () => {
  it('should return the initial state', () => {
    const expected = null;
    const result = userReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return the proper state if a new user is set', () => {
    const expected = mockUser;
    const result = userReducer(
      undefined,
      actions.setCurrentUserState(mockUser)
    );

    expect(result).toEqual(expected);
  });
});
