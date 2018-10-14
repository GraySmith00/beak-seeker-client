import {
  getPosition,
  getHotspotData,
  getHotspotBirds,
  getMostActive,
  getBirdImage,
  getBirdInfo
} from '../apiCalls';
import {
  mockPosition,
  mockHotspots,
  mockHotspotsWithBirds,
  mockBirdImageData,
  mockFailedBirdImageData,
  mockFailedBirdImageDataWithHyphen,
  mockBirdInfoData,
  mockBirdInfoNotFoundData
} from './mockHelpersData';

describe('apiCalls', () => {
  describe('getPosition', () => {
    it.skip('should return a position object', async () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(mockPosition)
        })
      );

      const expected = mockPosition;

      const result = await getPosition();

      expect(result).toEqual(expected);
    });
  });

  describe('getHotspotData', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(mockHotspots)
        })
      );
    });

    it('should call fetch with correct params', () => {
      getHotspotData(39.7506463, -104.9966687);
      const url = [
        'https://crossorigin.me/https://ebird.org/ws2.0/ref/hotspot/geo?lat=39.7506463&lng=-104.9966687&fmt=json&dist=10',
        { headers: { 'x-ebirdapitoken': process.env.REACT_APP_EBIRD_KEY } }
      ];

      expect(window.fetch).toHaveBeenCalledWith(...url);
    });

    it('should return an array of hotspots if the response is ok', async () => {
      const result = await getHotspotData(39.7506463, -104.9966687);
      expect(result).toEqual(mockHotspots);
    });

    it.skip('should throw an error if the fetch fails', async () => {
      const expected = new Error('failed to fetch');
      window.fetch = jest
        .fn()
        .mockImplementation(() => Promise.reject(new Error('failed to fetch')));

      await expect(getHotspotData(39.7506463, -104.9966687)).rejects.toEqual(
        expected
      );
    });
  });

  describe('getHotspotBirds', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(mockHotspotsWithBirds)
        })
      );
    });

    it('should call fetch with the correct params', () => {
      getHotspotBirds(mockHotspots);
      const url = [
        `https://crossorigin.me/https://ebird.org/ws2.0/data/obs/L4174538/recent/`,
        { headers: { 'x-ebirdapitoken': process.env.REACT_APP_EBIRD_KEY } }
      ];
      expect(window.fetch).toHaveBeenCalledWith(...url);
    });

    it('should return an array of hotspots which includes a key of birds with a birds array if the response is ok', async () => {
      const result = await getHotspotBirds(mockHotspots);
      expect(result.length).toEqual(4);
      expect(result[0].hasOwnProperty('birds')).toEqual(true);
    });
  });

  describe('getMostActive', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          json: Promise.resolve(mockHotspotsWithBirds)
        })
      );
    });

    it('should sort the hotspots by the amount of birds that have been recently seen', async () => {
      const result = await getMostActive(mockHotspotsWithBirds);
      expect(result[0].birds.length).toBeGreaterThan(result[1].birds.length);
    });
  });

  describe('getBirdImage', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(mockBirdImageData)
        })
      );
    });

    it('should call fetch with the correct params', async () => {
      const url =
        'https://en.wikipedia.org/w/api.php?action=query&origin=*&titles=canada goose&prop=pageimages&format=json&pithumbsize=200/';
      getBirdImage('Canada Goose');
      expect(window.fetch).toHaveBeenCalledWith(url);
    });

    it('should call the method again without the dashes if an image was not found', async () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(mockFailedBirdImageDataWithHyphen)
        })
      );

      const result = await getBirdImage('Black-crowned Night-Heron');
      expect(result).toEqual('');
    });

    it('should return an empty string if the image was not found', async () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(mockFailedBirdImageData)
        })
      );
      const result = await getBirdImage('Rock Pigeon');
      expect(result).toEqual('');
    });

    it('should return this image url if the image was found', async () => {
      const result = await getBirdImage('Northern shoveler');
      const expected =
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Northern_shoveler_Steve_Sinclair_outreach_use_only_%2819838806616%29.jpg/200px-Northern_shoveler_Steve_Sinclair_outreach_use_only_%2819838806616%29.jpg';
      expect(result).toEqual(expected);
    });
  });

  describe('getBirdInfo', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(mockBirdInfoData)
        })
      );
    });

    it('should call fetch with the correct params', async () => {
      const url =
        'https://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=gadwall';
      await getBirdInfo('Gadwall');
      expect(window.fetch).toHaveBeenCalledWith(url);
    });

    it('should return a description string when the bird info was found', async () => {
      const expected =
        'The Canada goose (Branta canadensis) is a large wild goose species with a black head and neck, white cheeks, white under its chin, and a brown body.';

      const result = await getBirdInfo('Canada Goose');
      expect(result).toEqual(expected);
    });

    it('should return expected message when the bird info was not found', async () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(mockBirdInfoNotFoundData)
        })
      );

      const expected = 'Sorry, no information was found on this bird :(';

      const result = await getBirdInfo(
        'Graylag x Swan Goose (Domestic type) (hybrid)'
      );

      expect(result).toEqual(expected);
    });
  });
});
