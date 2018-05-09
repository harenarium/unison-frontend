export function setting(state = {}, action) {
  switch (action.type) {
    case 'FETCH_SETTINGS':
      return action.payload
    case 'SETTINGS':
      return action.payload
    default:
      return state;
  }
};
