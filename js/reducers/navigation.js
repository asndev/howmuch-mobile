// import { RECEIVE_LOGIN } from '../actions';

const initial = {
  tab: 'login'
};

const navigation = (state = initial, action) => {
  if (action.type === 'SWITCH_TAB') {
    return {...state, tab: action.tab};
  }
  return state;
};

export default navigation;
