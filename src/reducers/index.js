import { combineReducers } from 'redux';
import {
  hotspotReducer,
  hotspotsErroredReducer,
  hotspotsLoadingReducer
} from './hotspotReducer';
import { userReducer } from './userReducer';

const rootReducer = combineReducers({
  hotspots: hotspotReducer,
  hotspotsLoading: hotspotsLoadingReducer,
  hotspotsErrored: hotspotsErroredReducer,
  currentUser: userReducer
});

export default rootReducer;
