import * as actions from '../hotspotActions';
import mockHotspots from './mockActionsData';

describe('hotspotActions', () => {
  it('should return an object with a type of HOTSPOTS_LOADING and an isLoading boolean', () => {
    const isLoading = true;
    const expected = {
      type: 'HOTSPOTS_LOADING',
      isLoading
    };

    const result = actions.hotspotsLoading(true);

    expect(result).toEqual(expected);
  });

  it('should return an object with a type of HOTSPOTS_ERRORED and a hotspotsErrored boolean', () => {
    const hasErrored = false;
    const expected = {
      type: 'HOTSPOTS_ERRORED',
      hasErrored
    };

    const result = actions.hotspotsErrored(false);

    expect(result).toEqual(expected);
  });

  it('should return an object with a type of HOTSPOTS_SUCCESS and a hotspots array', () => {
    const hotspots = mockHotspots;
    const expected = {
      type: 'HOTSPOTS_SUCCESS',
      hotspots
    };

    const result = actions.hotspotsSuccess(hotspots);

    expect(result).toEqual(expected);
  });
});
