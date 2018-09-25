import { hotspotsErrored, hotspotsSuccess } from '../hotspotActions';
import { setLocation } from '../locationActions';

import {
  getHotspotBirds,
  getMostActive,
  getPosition,
  getHotspotData
} from '../../utils/apiCalls';

export const getNearbyHotspots = () => async dispatch => {
  try {
    const { latitude, longitude } = await getPosition();
    dispatch(setLocation({ latitude, longitude }));
    const hotspotData = await getHotspotData(latitude, longitude);
    const hotSpotsWithBirds = await getHotspotBirds(hotspotData);
    const mostActive = getMostActive(hotSpotsWithBirds);

    dispatch(hotspotsSuccess(mostActive));
  } catch (error) {
    dispatch(hotspotsErrored(true));
  }
};
