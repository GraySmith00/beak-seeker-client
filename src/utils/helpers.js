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

export const dashCaseNameHelper = name => {
  return name
    .split('(')
    .join('')
    .split(')')
    .join('')
    .split(' ')
    .join('-')
    .toLowerCase();
};

export const getBirdImage = async name => {
  const url = `http://en.wikipedia.org/w/api.php?action=query&titles=${name}&prop=pageimages&format=json&pithumbsize=200/`;
  const response = await fetch(url, { mode: 'no-cors' });
  const data = await response.json();
  console.log(data);
};
