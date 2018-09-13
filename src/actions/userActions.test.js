import * as actions from './userActions';
import { mockUser } from './mockActionsData';

describe('userActions', () => {
  it('should return an object with a type of SET_CURRENT_USER_STATE and a user object', () => {
    const user = mockUser;
    const expected = {
      type: 'SET_CURRENT_USER_STATE',
      user
    };

    const result = actions.setCurrentUserState(user);

    expect(result).toEqual(expected);
  });
});
