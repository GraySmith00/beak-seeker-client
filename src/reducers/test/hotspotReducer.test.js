import {
  hotspotsLoadingReducer,
  hotspotsErroredReducer,
  hotspotReducer
} from '../hotspotReducer';
import * as actions from '../../actions/hotspotActions';
import { mockHotspots } from './mockReducerData';

describe('hotspotReducer', () => {
  describe('hotspotsLoadingReducer', () => {
    it('should return the initial state', () => {
      const expected = false;
      const result = hotspotsLoadingReducer(undefined, {});
      expect(result).toEqual(expected);
    });
    it('should return true if the HOTSPOTS_LOADING', () => {
      const expected = true;
      const result = hotspotsLoadingReducer(
        undefined,
        actions.hotspotsLoading(true)
      );
      expect(result).toEqual(expected);
    });
  });

  describe('hotspotsErroredReducer', () => {
    it('should return the initial state', () => {
      const expected = false;
      const result = hotspotsErroredReducer(undefined, {});
      expect(result).toEqual(expected);
    });
    it('should return true if HOTSPOTS_ERRORED is true', () => {
      const expected = true;
      const result = hotspotsErroredReducer(
        undefined,
        actions.hotspotsErrored(true)
      );
      expect(result).toEqual(expected);
    });
  });

  describe('hotspotReducer', () => {
    it('should return the initial state', () => {
      const expected = [];
      const result = hotspotReducer(undefined, {});
      expect(result).toEqual(expected);
    });
    it('should return the proper state if HOTSPOTS_SUCCESS', () => {
      const expected = mockHotspots;
      const result = hotspotReducer(
        undefined,
        actions.hotspotsSuccess(mockHotspots)
      );
      expect(result).toEqual(expected);
    });
  });
});
