import { setCurrentUser } from '../setCurrentUser';
import * as actions from '../../userActions';
import { mockUserWithSightings } from './mockThunksData';

describe('setCurrentUser thunk', () => {
  let mockDispatch;
  let thunk;

  beforeEach(() => {
    mockDispatch = jest.fn();
  });

  it('should dispatch setCurrentUserState with the user if the response is ok', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockUserWithSightings)
      })
    );

    thunk = setCurrentUser(mockUserWithSightings._id);
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(
      actions.setCurrentUserState(mockUserWithSightings)
    );
  });
});
