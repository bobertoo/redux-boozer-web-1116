export default function cocktailReducer(state = {}, action) {
  switch (action.type) {
    case 'SELECT_COCKTAIL':
      return action.payload;
    default:
      return state;
  }
}
