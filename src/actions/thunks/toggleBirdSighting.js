import { toggleBirdSightingState } from '../userActions';

export const toggleBirdSighting = ({
  user,
  locationId,
  locationName,
  speciesCode,
  comName
}) => dispatch => {
  // create and add a new sighting to state

  const newSighting = {
    _id: Date.now(),
    locationId,
    locationName,
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
  const url = `${process.env.REACT_APP_SERVER}/api/users/${user._id}`;
  try {
    fetch(url, {
      method: 'PUT',
      body: JSON.stringify(newUser),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return error.message;
  }

  return newSightings;
};
