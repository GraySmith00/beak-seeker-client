export const setCurrentUserState = user => ({
  type: 'SET_CURRENT_USER_STATE',
  user
});

export const toggleBirdSightingState = newSightings => ({
  type: 'TOGGLE_BIRD_SIGHTING_STATE',
  newSightings
});

export const logout = () => ({
  type: 'LOGOUT'
});
