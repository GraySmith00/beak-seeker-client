import { hotspotsErrored, hotspotsSuccess } from '../hotspotActions';

import {
  getHotspotBirds,
  getMostActive,
  getPosition,
  getHotspotData
} from '../../utils/apiCalls';

export const getNearbyHotspots = () => async dispatch => {
  try {
    const { latitude, longitude } = await getPosition();
    const hotspotData = await getHotspotData(latitude, longitude);
    const hotSpotsWithBirds = await getHotspotBirds(hotspotData);
    const mostActive = getMostActive(hotSpotsWithBirds);

    dispatch(hotspotsSuccess(mostActive));
  } catch (error) {
    dispatch(hotspotsErrored(true));
  }
};
