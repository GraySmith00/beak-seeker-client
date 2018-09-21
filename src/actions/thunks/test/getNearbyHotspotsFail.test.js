import * as actions from '../../hotspotActions';

import { getNearbyHotspots } from '../getNearbyHotspots';

describe('getNearbyHotspots', () => {
  let mockDispatch;
  let thunk;

  beforeEach(() => {
    thunk = getNearbyHotspots();
    mockDispatch = jest.fn();
  });

  it('should dispatch hasErrored(true) if the response is not ok', async () => {
    thunk = getNearbyHotspots();
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(actions.hotspotsErrored(true));
  });
});
