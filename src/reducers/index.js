import { combineReducers } from 'redux';
import { hotspotReducer } from './hotspotReducer';

const rootReducer = combineReducers({
  hotspots: hotspotReducer
});

export default rootReducer;
