export const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER_STATE':
      return action.user;

    case 'TOGGLE_BIRD_SIGHTING_STATE': {
      const alreadySeen = state.sightings.find(
        sighting =>
          sighting.locationId === action.newSighting.locationId &&
          sighting.speciesCode === action.newSighting.speciesCode
      );

      let newSightingArray;

      if (alreadySeen) {
        newSightingArray = state.sightings.filter(
          sighting => sighting.id !== action.sighting_id
        );
      } else {
        newSightingArray = [...state.sightings, action.newSighting];
      }
      return {
        ...state,
        sightings: newSightingArray
      };
    }
    default:
      return state;
  }
};
