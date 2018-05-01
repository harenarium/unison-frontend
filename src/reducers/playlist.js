export function playlist(state = [], action) {
  switch (action.type) {
    case 'FETCH_PLAYLISTS':
      debugger
      return [...action.payload];
    case 'CREATE_PLAYLIST':
      return [...action.payload]
    default:
      return state;
  }
};
