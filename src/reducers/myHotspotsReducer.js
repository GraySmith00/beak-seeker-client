export const myHotspotsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_MY_HOTSPOTS_STATE':
      return action.hotspots;

    default:
      return state;
  }
};
