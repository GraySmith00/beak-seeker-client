export const setCurrentUserState = user => ({
  type: 'SET_CURRENT_USER_STATE',
  user
});

export const toggleBirdSightingState = newSighting => ({
  type: 'TOGGLE_BIRD_SIGHTING_STATE',
  newSighting
});
