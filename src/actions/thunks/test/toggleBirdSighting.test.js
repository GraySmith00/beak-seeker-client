import { toggleBirdSighting } from '../toggleBirdSighting';

import { mockUserWithSightings } from './mockThunksData';

describe('toggleBirdSighting thunk', () => {
  let mockDispatch;
  let thunk;

  beforeEach(() => {
    mockDispatch = jest.fn();
  });

  it('should dispatch toggleBirdSightingState with newSightings', async () => {
    thunk = toggleBirdSighting({
      user: mockUserWithSightings,
      locationId: 'L1743685',
      speciesCode: 'cangoo',
      comName: 'Canada Goose'
    });
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalled();
  });

  it('should remove a sighting if the bird has already been seen in that location', async () => {
    thunk = toggleBirdSighting({
      user: mockUserWithSightings,
      locationId: 'L1743685',
      speciesCode: 'norsho',
      comName: 'Northern shoveler'
    });
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalled();
  });
});
