import { combineReducers } from 'redux';
import { auth } from './auth';
import { playlist } from './playlist';
import { otheruser } from './otheruser';
import { connection } from './connection';
import { result } from './result';

export default combineReducers({
  auth,
  playlist,
  otheruser,
  connection,
  result
});
