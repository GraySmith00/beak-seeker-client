import { toggleBirdSightingState } from '../userActions';

export const toggleBirdSighting = (
  user,
  locationId,
  speciesCode
) => async dispatch => {
  const newSighting = {
    locationId,
    speciesCode
  };

  const newUser = {
    ...user,
    sightings: [...user.sightings, newSighting]
  };

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

  dispatch(toggleBirdSightingState(newSighting));
};
