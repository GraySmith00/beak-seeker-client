import { toggleBirdSighting } from '../toggleBirdSighting';
import * as actions from '../../userActions';
import { mockUserWithSightings } from './mockThunksData';
import thunk from 'redux-thunk';

describe('toggleBirdSighting thunk', () => {
  let mockDispatch;
  let thunk;
  let mockSightings;
  let mockSighting;

  beforeEach(() => {
    mockDispatch = jest.fn();
    mockSightings = mockUserWithSightings.sightings;
    mockSighting = mockUserWithSightings.sightings[0];
  });

  it('should dispatch toggleBirdSightingState with newSightings', async () => {
    const thunk = toggleBirdSighting({
      user: mockUserWithSightings,
      locationId: 'L1743685',
      speciesCode: 'cangoo',
      comName: 'Canada Goose'
    });
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalled();
  });

  it('should remove a sighting if the bird has already been seen in that location', async () => {
    const thunk = toggleBirdSighting({
      user: mockUserWithSightings,
      locationId: 'L1743685',
      speciesCode: 'norsho',
      comName: 'Northern shoveler'
    });
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalled();
  });
});
