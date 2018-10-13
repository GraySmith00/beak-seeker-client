import { setCurrentUserState } from '../userActions';

export const setCurrentUser = id => async dispatch => {
  const url = `https://gs-beakseeker-server.herokuapp.com/api/users/${id}`;
  const response = await fetch(url);
  const user = await response.json();
  dispatch(setCurrentUserState(user));
};
