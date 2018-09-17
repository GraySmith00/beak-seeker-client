import { hotspotsErrored, hotspotsSuccess } from '../hotspotActions';

import {
  getHotspotBirds,
  getMostActive,
  getPosition
} from '../../utils/helpers';
import { eBirdKey } from '../../keys';

export const getNearbyHotspots = () => async dispatch => {
  const position = await getPosition();
  const { latitude, longitude } = position.coords;

  const url = `https://ebird.org/ws2.0/ref/hotspot/geo?lat=${latitude}&lng=${longitude}&fmt=json&dist=10`;

  try {
    const response = await fetch(url, {
      headers: {
        'x-ebirdapitoken': eBirdKey
      }
    });
    const hotspotData = await response.json();
    const hotSpotWithBirdsPromises = await getHotspotBirds(hotspotData);
    const hotSpotsWithBirds = await Promise.all(hotSpotWithBirdsPromises);
    const mostActive = getMostActive(hotSpotsWithBirds);

    dispatch(hotspotsSuccess(mostActive));
  } catch (error) {
    dispatch(hotspotsErrored(true));
  }
};
