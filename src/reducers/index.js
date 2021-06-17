import { combineReducers } from 'redux';
import reducer from './favoriteReducer';
import movieReducer from './movieReducer';

export const reducerCombine = combineReducers({
    movie: movieReducer,
    favorite: reducer
  });

export default movieReducer;