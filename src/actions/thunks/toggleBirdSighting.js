import { toggleBirdSightingState } from '../userActions';

export const toggleBirdSighting = (
  user,
  locationId,
  speciesCode
) => async dispatch => {
  // create and add a new sighting to state
  const newSighting = {
    locationId,
    speciesCode
  };

  const newUser = {
    ...user,
    sightings: [...user.sightings, newSighting]
  };

  dispatch(toggleBirdSightingState(newSighting));

  // put request to update backend
  const url = `http://localhost:5000/api/users/${user._id}`;
  try {
    const response = await fetch(url, {
      method: 'PUT',
      body: JSON.stringify(newUser),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(response);
  } catch (error) {
    console.log(error.message);
  }
};
