import { eBirdKey } from '../../keys';
import {
  getPosition,
  getHotspotData,
  getHotspotBirds,
  getMostActive,
  getBirdImage,
  getBirdInfo
} from '../apiCalls';
import { mockHotspots, mockHotspotsWithBirds } from './mockHelpersData';

describe('apiCalls', () => {
  describe('getPosition', () => {
    it.skip('should return a position object', () => {});
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
        'https://ebird.org/ws2.0/ref/hotspot/geo?lat=39.7506463&lng=-104.9966687&fmt=json&dist=10',
        { headers: { 'x-ebirdapitoken': eBirdKey } }
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
        `https://ebird.org/ws2.0/data/obs/L4174538/recent/`,
        { headers: { 'x-ebirdapitoken': eBirdKey } }
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
});
