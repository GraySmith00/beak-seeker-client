import { setCurrentUserState } from '../userActions';

export const setCurrentUser = id => async dispatch => {
  const url = `http://localhost:5000/api/users/${id}`;
  try {
    const response = await fetch(url);
    const user = await response.json();
    dispatch(setCurrentUserState(user));
  } catch (error) {
    console.log(error.message);
    return;
  }
};
