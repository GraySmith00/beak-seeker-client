import { combineReducers } from 'redux';
import {
  hotspotReducer,
  hotspotsErroredReducer,
  hotspotsLoadingReducer
} from './hotspotReducer';

const rootReducer = combineReducers({
  hotspots: hotspotReducer,
  hotspotsLoading: hotspotsLoadingReducer,
  hotspotsErrored: hotspotsErroredReducer
});

export default rootReducer;
