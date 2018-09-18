// export const getPosition = jest.fn();
// export const getHotspotData = jest.fn();
// export const getHotspotBirds = jest.fn();
// export const getMostActive = jest.fn();
// export const getBirdImage = jest.fn();
// export const getBirdInfo = jest.fn();
import {
  mockPosition,
  mockHotspots,
  mockHotspotsWithBirds,
  mockMostActive,
  mockBirdImage,
  mockGetBirdInfo
} from './mockApiCallsData';

export const getPosition = jest
  .fn()
  .mockImplementation(() => Promise.resolve(mockPosition));

export const getHotspotData = jest
  .fn()
  .mockImplementation(() => Promise.resolve(mockHotspots));

export const getHotspotBirds = jest
  .fn()
  .mockImplementation(() => Promise.resolve(mockHotspotsWithBirds));

export const getMostActive = jest
  .fn()
  .mockImplementation(() => Promise.resolve(mockMostActive));

export const getBirdImage = () => {
  return 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Kanadagans_Branta_canadensis.jpg/200px-Kanadagans_Branta_canadensis.jpg';
};

export const getBirdInfo = () => {
  return 'The Canada goose (Branta canadensis) is a large wild goose species with a black head and neck, white cheeks, white under its chin, and a brown body.';
};
