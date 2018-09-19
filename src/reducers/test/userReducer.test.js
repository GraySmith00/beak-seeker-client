import { userReducer } from '../userReducer';
import * as actions from '../../actions/userActions';
import {
  mockUser,
  mockNewSighting,
  mockUserWithSightings
} from './mockReducerData';

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

  it('should return the proper state if a user logs out', () => {
    const expected = null;
    const result = userReducer(undefined, actions.logout);

    expect(result).toEqual(expected);
  });

  it('should return the proper state if a user sightings has changed', () => {
    const expected = mockUserWithSightings;

    const result = userReducer(
      mockUser,
      actions.toggleBirdSightingState([mockNewSighting])
    );

    expect(result).toEqual(expected);
  });
});
