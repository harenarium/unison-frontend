export function connection(state = {}, action) {
  switch (action.type) {
    case 'CONNECT_USER':
      return action.payload;
    default:
      return state;
  }
};
