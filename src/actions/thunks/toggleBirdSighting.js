import { toggleBirdSightingState } from '../userActions';

export const toggleBirdSighting = ({
  user,
  locationId,
  speciesCode,
  comName
}) => async dispatch => {
  // create and add a new sighting to state

  const newSighting = {
    _id: Date.now(),
    locationId,
    speciesCode,
    comName
  };

  // check whether sighting already exists
  const alreadySeen = user.sightings.find(
    sighting =>
      sighting.locationId === locationId && sighting.speciesCode === speciesCode
  );

  // determine new sightings array based on whether siting already existed
  let newSightings;
  if (alreadySeen) {
    newSightings = user.sightings.filter(
      sighting => sighting._id !== alreadySeen._id
    );
  } else {
    newSightings = [...user.sightings, newSighting];
  }

  // dispatch action to state
  dispatch(toggleBirdSightingState(newSightings));

  // create new user object for backend put request
  const newUser = {
    ...user,
    sightings: newSightings
  };

  // put request to update backend
  const url = `http://localhost:5000/api/users/${user._id}`;
  try {
    await fetch(url, {
      method: 'PUT',
      body: JSON.stringify(newUser),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return error.message;
  }
};
