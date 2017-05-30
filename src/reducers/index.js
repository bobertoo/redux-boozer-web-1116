import { combineReducers } from 'redux';
import cocktailsReducer from './cocktails_reducer';
import cocktailReducer from './cocktail_reducer';

const rootReducer = combineReducers({
  cocktails: cocktailsReducer,
  cocktail: cocktailReducer
});

export default rootReducer;
