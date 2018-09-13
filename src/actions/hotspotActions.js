export const hotspotsLoading = bool => ({
  type: 'HOTSPOTS_LOADING',
  isLoading: bool
});

export const hotspotsErrored = bool => ({
  type: 'HOTSPOTS_ERRORED',
  hasErrored: bool
});

export const hotspotsSuccess = hotspots => ({
  type: 'HOTSPOTS_SUCCESS',
  hotspots
});
