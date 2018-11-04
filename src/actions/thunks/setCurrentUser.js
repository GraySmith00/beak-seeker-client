import { setCurrentUserState } from '../userActions';

export const setCurrentUser = id => async dispatch => {
  const url = `${process.env.REACT_APP_SERVER}/api/users/${id}`;
  const response = await fetch(url);
  const user = await response.json();
  dispatch(setCurrentUserState(user));
};
