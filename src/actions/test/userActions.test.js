import * as actions from '../userActions';
import { mockCurrentUser } from './mockActionsData';

describe('userActions', () => {
  it('should return an object with a type of SET_CURRENT_USER_STATE and a user object', () => {
    const user = mockCurrentUser;
    const expected = {
      type: 'SET_CURRENT_USER_STATE',
      user
    };

    const result = actions.setCurrentUserState(user);

    expect(result).toEqual(expected);
  });

  it('should return an object with a type of TOGGLE_BIRD_SIGHTING_STATE and a newSightings array', () => {
    const newSightings = mockCurrentUser.sightings;
    const expected = {
      type: 'TOGGLE_BIRD_SIGHTING_STATE',
      newSightings
    };

    const result = actions.toggleBirdSightingState(newSightings);

    expect(result).toEqual(expected);
  });
});
