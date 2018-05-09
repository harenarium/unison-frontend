export function result(state = {}, action) {
  switch (action.type) {
    case 'FETCH_RESULTS':
    debugger
      return action.payload;
    default:
      return state;
  }
};
