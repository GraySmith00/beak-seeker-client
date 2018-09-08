import {
  hotspotsLoading,
  hotspotsErrored,
  hotspotsSuccess
} from '../hotspotActions';

import { getHotspotBirds, getMostActive } from '../../utils/helpers';
import { eBirdKey } from '../../keys';

export const getNearbyHotspots = () => async dispatch => {
  const url =
    'https://ebird.org/ws2.0/ref/hotspot/geo?lat=39.744245&lng=-105.0025553&fmt=json&dist=10';
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
    console.log(error.message);
  }
};
