export const hotspotsLoadingReducer = (state = false, action) => {
  switch (action.type) {
    case 'HOTSPOTS_LOADING':
      return action.isLoading;
    default:
      return state;
  }
};

export const hotspotsErroredReducer = (state = false, action) => {
  switch (action.type) {
    case 'HOTSPOTS_ERRORED':
      return action.hasErrored;
    default:
      return state;
  }
};

export const hotspotReducer = (state = [], action) => {
  switch (action.type) {
    case 'HOTSPOTS_SUCCESS':
      return action.hotspots;
    default:
      return state;
  }
};
