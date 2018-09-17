import { hotspotsErrored, hotspotsSuccess } from '../hotspotActions';

import {
  getHotspotBirds,
  getMostActive,
  getPosition,
  getHotspotData
} from '../../utils/apiCalls';

export const getNearbyHotspots = () => async dispatch => {
  try {
    const position = await getPosition();
    const { latitude, longitude } = position.coords;
    const hotspotData = await getHotspotData(latitude, longitude);
    const hotSpotsWithBirds = await getHotspotBirds(hotspotData);
    console.log(hotSpotsWithBirds);
    const mostActive = getMostActive(hotSpotsWithBirds);

    dispatch(hotspotsSuccess(mostActive));
  } catch (error) {
    dispatch(hotspotsErrored(true));
  }
};
