import {
  getPosition,
  getHotspotData,
  getHotspotBirds,
  getMostActive
} from '../../../utils/apiCalls';

import { getNearbyHotspots } from '../getNearbyHotspots';

jest.mock('../../../utils/apiCalls');

describe('getNearbyHotspots', () => {
  let mockDispatch;
  let thunk;

  beforeEach(() => {
    thunk = getNearbyHotspots();
    mockDispatch = jest.fn();
  });

  it('should call getPosition with the correct params', async () => {
    await thunk(mockDispatch);
    expect(getPosition).toHaveBeenCalled();
  });

  it('should call getHotspotData with the correct params', async () => {
    await thunk(mockDispatch);
    expect(getHotspotData).toHaveBeenCalled();
  });

  it('should call getHotspotBirds with the correct params', async () => {
    await thunk(mockDispatch);
    expect(getHotspotBirds).toHaveBeenCalled();
  });

  it('should call getMostActive with the correct params', async () => {
    await thunk(mockDispatch);
    expect(getMostActive).toHaveBeenCalled();
  });

  it('should call dispatch with the hotspotsSuccess action', async () => {
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalled();
  });

  it('should dispatch hotspotsSuccess if the response is ok', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resove({
        ok: true,
        json: () => Promise.resolve()
      })
    );

    thunk = getNearbyHotspots();
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalled();
  });
});
