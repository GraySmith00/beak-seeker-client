import {
  getPosition,
  getHotspotData,
  getHotspotBirds,
  getMostActive
} from '../../../utils/apiCalls';

import * as actions from '../../hotspotActions';
import { mockMostActive } from './mockThunksData';
import { getNearbyHotspots } from '../getNearbyHotspots';
import thunk from 'redux-thunk';

describe('getNearbyHotspots', () => {
  let mockDispatch;
  let thunk;

  beforeEach(() => {
    thunk = getNearbyHotspots();
    mockDispatch = jest.fn();
  });

  it('should dispatch hasErrored(true) if the response is not ok', async () => {
    // window.fetch = jest
    //   .fn()
    //   .mockImplementation(() => Promise.reject(new Error('failed to fetch')));

    const thunk = getNearbyHotspots();
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(actions.hotspotsErrored(true));
  });
});
