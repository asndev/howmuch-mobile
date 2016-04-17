import { combineReducers } from 'redux';
import settings from './settings';
import navigation from './navigation';
import activitylists from './activitylists';

const rootReducer = combineReducers({
  settings,
  navigation,
  activitylists
});

export default rootReducer;
