import { eBirdKey } from '../keys';

export const getHotspotBirds = hotspots => {
  return hotspots.map(async hotspot => {
    const url = `https://ebird.org/ws2.0/data/obs/${hotspot.locID}/recent/`;
    const response = await fetch(url, {
      headers: {
        'x-ebirdapitoken': eBirdKey
      }
    });
    const birds = await response.json();
    return { ...hotspot, birds };
  });
};

export const getMostActive = hotspots => {
  const mostActive = hotspots.sort((a, b) => {
    return b.birds.length - a.birds.length;
  });

  return mostActive.slice(0, 10);
};
