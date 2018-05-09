export function connection(state = {}, action) {
  switch (action.type) {
    case 'FETCH_CONNECTIONS':
      return action.payload;
    default:
      return state;
  }
};
