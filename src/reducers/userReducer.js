export const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER_STATE':
      return action.user;

    case 'TOGGLE_BIRD_SIGHTING_STATE': {
      return {
        ...state,
        sightings: action.newSightings
      };
    }

    case 'LOGOUT':
      return null;

    default:
      return state;
  }
};
