import {combineReducers} from 'redux';
import auth from './auth';
import app from './app';
import showsearch from './showsearch';

const reducer = combineReducers({
  app,
  auth,
  showsearch,
});

export default reducer;
