export const mockHotspots = [
  {
    locId: 'L1743685',
    locName: 'Belmar Park',
    countryCode: 'US',
    subnational1Code: 'US-CO',
    subnational2Code: 'US-CO-059',
    lat: 39.7044793,
    lng: -105.0857735,
    locID: 'L1743685',
    birds: [
      {
        speciesCode: 'cangoo',
        comName: 'Canada Goose',
        sciName: 'Branta canadensis',
        locId: 'L1743685',
        locName: 'Belmar Park',
        obsDt: '2018-09-09 12:15',
        howMany: 10,
        lat: 39.7044793,
        lng: -105.0857735,
        obsValid: true,
        obsReviewed: false,
        locationPrivate: false
      },
      {
        speciesCode: 'gragoo4',
        comName: 'Graylag Goose (Domestic type) x Canada Goose (hybrid)',
        sciName: 'Anser anser (Domestic type) x Branta canadensis',
        locId: 'L1743685',
        locName: 'Belmar Park',
        obsDt: '2018-09-09 12:15',
        howMany: 1,
        lat: 39.7044793,
        lng: -105.0857735,
        obsValid: true,
        obsReviewed: false,
        locationPrivate: false
      },
      {
        speciesCode: 'mallar3',
        comName: 'Mallard',
        sciName: 'Anas platyrhynchos',
        locId: 'L1743685',
        locName: 'Belmar Park',
        obsDt: '2018-09-09 12:15',
        howMany: 14,
        lat: 39.7044793,
        lng: -105.0857735,
        obsValid: true,
        obsReviewed: false,
        locationPrivate: false
      },
      {
        speciesCode: 'ribgul',
        comName: 'Ring-billed Gull',
        sciName: 'Larus delawarensis',
        locId: 'L1743685',
        locName: 'Belmar Park',
        obsDt: '2018-09-09 12:15',
        howMany: 2,
        lat: 39.7044793,
        lng: -105.0857735,
        obsValid: true,
        obsReviewed: false,
        locationPrivate: false
      },
      {
        speciesCode: 'doccor',
        comName: 'Double-crested Cormorant',
        sciName: 'Phalacrocorax auritus',
        locId: 'L1743685',
        locName: 'Belmar Park',
        obsDt: '2018-09-09 12:15',
        howMany: 4,
        lat: 39.7044793,
        lng: -105.0857735,
        obsValid: true,
        obsReviewed: false,
        locationPrivate: false
      },
      {
        speciesCode: 'grbher3',
        comName: 'Great Blue Heron',
        sciName: 'Ardea herodias',
        locId: 'L1743685',
        locName: 'Belmar Park',
        obsDt: '2018-09-09 12:15',
        howMany: 1,
        lat: 39.7044793,
        lng: -105.0857735,
        obsValid: true,
        obsReviewed: false,
        locationPrivate: false
      }
    ]
  }
];

export const mockUser = {
  sightings: [],
  _id: '5b98223ce17b1dbfc1b26ada',
  email: 'greg.smith00@gmail.com',
  username: 'greg_savoy',
  image:
    'https://pbs.twimg.com/profile_images/1001553154146615296/Jab4V7G0_normal.jpg',
  __v: 0
};

export const mockSightings = [
  { _id: 1537200989704, locationId: 'L1743685', speciesCode: 'norsho' },
  { _id: 1537202195031, locationId: 'L1743685', speciesCode: 'moudov' },
  { _id: 1537203456306, locationId: 'L1743685', speciesCode: 'cangoo' },
  { _id: 1537228328356, locationId: 'L1743685', speciesCode: 'gadwal' }
];

export const mockNewSighting = {
  _id: 1537200989704,
  locationId: 'L1743685',
  speciesCode: 'norsho'
};

export const mockUserWithSightings = {
  sightings: [
    { _id: 1537200989704, locationId: 'L1743685', speciesCode: 'norsho' }
  ],
  _id: '5b98223ce17b1dbfc1b26ada',
  email: 'greg.smith00@gmail.com',
  username: 'greg_savoy',
  image:
    'https://pbs.twimg.com/profile_images/1001553154146615296/Jab4V7G0_normal.jpg',
  __v: 0
};
