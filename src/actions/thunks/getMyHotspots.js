import { setMyHotspotsState } from '../myHotspotsActions';

import { getMyHotspotsData, getHotspotBirds } from '../../utils/apiCalls';

export const getMyHotspots = locIds => async dispatch => {
  const hotspotsData = await getMyHotspotsData(locIds);
  const hotspotsWithBirds = await getHotspotBirds(hotspotsData);
  dispatch(setMyHotspotsState(hotspotsWithBirds));
};
