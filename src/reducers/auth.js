export function auth(state = {}, action) {
  switch (action.type) {
    case 'LOGIN':
      return action.payload
    case 'FETCH_USER':
      return action.payload;
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};
