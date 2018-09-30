import { combineReducers } from 'redux';
import { hotspotReducer, hotspotsErroredReducer } from './hotspotReducer';
import { userReducer } from './userReducer';
import { locationReducer } from './locationReducer';
import { myHotspotsReducer } from './myHotspotsReducer';

const rootReducer = combineReducers({
  hotspots: hotspotReducer,
  hotspotsErrored: hotspotsErroredReducer,
  currentUser: userReducer,
  location: locationReducer,
  myHotspots: myHotspotsReducer
});

export default rootReducer;
