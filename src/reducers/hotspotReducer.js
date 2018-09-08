export const hotspotReducer = (state = [], action) => {
  switch (action.type) {
    case 'HOTSPOTS_SUCCESS':
      return action.hotspots;
    default:
      return state;
  }
};
