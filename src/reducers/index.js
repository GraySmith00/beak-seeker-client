import { combineReducers } from 'redux';
import { hotspotReducer, hotspotsErroredReducer } from './hotspotReducer';
import { userReducer } from './userReducer';
import { locationReducer } from './locationReducer';

const rootReducer = combineReducers({
  hotspots: hotspotReducer,
  hotspotsErrored: hotspotsErroredReducer,
  currentUser: userReducer,
  location: locationReducer
});

export default rootReducer;
