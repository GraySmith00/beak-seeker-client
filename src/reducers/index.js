import { combineReducers } from 'redux';
import { hotspotReducer, hotspotsErroredReducer } from './hotspotReducer';
import { userReducer } from './userReducer';

const rootReducer = combineReducers({
  hotspots: hotspotReducer,
  hotspotsErrored: hotspotsErroredReducer,
  currentUser: userReducer
});

export default rootReducer;
