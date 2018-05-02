export function otheruser(state = {}, action) {
  switch (action.type) {
    case 'FIND_USER':
      return action.payload;
    default:
      return state;
  }
};
