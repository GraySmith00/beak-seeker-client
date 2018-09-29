import { setMyHotspotsState } from '../myHotspotsActions';

import { getMyHotspotsData, getHotspotBirds } from '../../utils/apiCalls';

export const getMyHotspots = locIds => async dispatch => {
  console.log('hiiiii');
  const hotspotsData = await getMyHotspotsData(locIds);
  const hotspotsWithBirds = await getHotspotBirds(hotspotsData);
  console.log(getHotspotBirds);
  dispatch(setMyHotspotsState(hotspotsWithBirds));
};
