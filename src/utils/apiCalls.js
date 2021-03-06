export const getPosition = async options => {
  const position = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
  return position.coords;
};

export const getHotspotData = async (lat, long) => {
  const url = `https://cors-anywhere.herokuapp.com/https://ebird.org/ws2.0/ref/hotspot/geo?key=${
    process.env.REACT_APP_EBIRD_KEY
  }&lat=${lat}&lng=${long}&fmt=json&dist=10`;
  const response = await fetch(url);
  const hotspotData = await response.json();
  return hotspotData;
};

export const getHotspotBirds = async hotspots => {
  const unresolvedPromises = hotspots.map(async hotspot => {
    const url = `https://cors-anywhere.herokuapp.com/https://ebird.org/ws2.0/data/obs/${
      hotspot.locID
    }/recent?key=${process.env.REACT_APP_EBIRD_KEY}`;
    const response = await fetch(url);
    const birds = await response.json();
    return { ...hotspot, birds };
  });

  return await Promise.all(unresolvedPromises);
};

export const getMostActive = hotspots => {
  const mostActive = hotspots.sort((a, b) => {
    return b.birds.length - a.birds.length;
  });
  return mostActive.slice(0, 10);
};

export const getBirdImage = async name => {
  const url = `https://en.wikipedia.org/w/api.php?action=query&origin=*&titles=${name.toLowerCase()}&prop=pageimages&format=json&pithumbsize=200/`;
  const response = await fetch(url);
  const data = await response.json();

  const pagesObj = data.query.pages;
  const firstPage = pagesObj[Object.keys(pagesObj)[0]];
  if (!firstPage.thumbnail && !name.includes('-')) {
    return '';
  } else if (!firstPage.thumbnail) {
    return getBirdImage(name.split('-').join(' '));
  } else {
    const imgSrc = firstPage.thumbnail.source;
    return imgSrc;
  }
};

export const getBirdInfo = async name => {
  const url = `https://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${name.toLowerCase()}`;
  const response = await fetch(url);
  const data = await response.json();
  const pagesObj = data.query.pages;
  const firstPage = pagesObj[Object.keys(pagesObj)[0]];
  if (!firstPage.extract) {
    return 'Sorry, no information was found on this bird :(';
  } else {
    return firstPage.extract;
  }
};

export const tweetPostRequest = async payload => {
  const url = `${process.env.REACT_APP_SERVER}/twitter/posttweet`;
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return response;
};

export const getLeaderboard = async () => {
  const url = `${process.env.REACT_APP_SERVER}/api/users`;
  const response = await fetch(url);
  let users = await response.json();
  users = users.map(user => ({
    name: user.username,
    numSightings: user.sightings.length
  }));
  const leaderboard = users.sort((a, b) => b.numSightings - a.numSightings);
  return leaderboard;
};

export const getUser = async id => {
  const url = `${process.env.REACT_APP_SERVER}/api/users/${id}`;
  const response = await fetch(url);
  const user = await response.json();
  return user;
};

export const getMyHotspotsData = async locIds => {
  const unresolvedPromises = locIds.map(async locId => {
    const url = `https://cors-anywhere.herokuapp.com/https://ebird.org/ws2.0/ref/hotspot/${locId}?key=${
      process.env.REACT_APP_EBIRD_KEY
    }&fmt=json`;
    const response = await fetch(url);
    const hotspotData = await response.json();
    return hotspotData;
  });

  const hotspots = await Promise.all(unresolvedPromises);
  return hotspots.map(hotspot => hotspot[0]);
};
