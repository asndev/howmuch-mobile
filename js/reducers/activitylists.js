import {
  OPEN_NAVIGATION,
  RECEIVE_LOGIN,
  RECEIVE_ATIVITY_LISTS,
  RECEIVE_ACTIVITIES
} from '../actions';

const activitylists = (state ={ data: [], activities: {}}, action) => {
  let newActivities = { ...state.activities };

  switch (action.type) {
    case RECEIVE_ATIVITY_LISTS:
      return {
        ...state,
        data: action.payload.data
      };
    case RECEIVE_ACTIVITIES:
      newActivities[action.payload._id] = {
        data: action.payload.data,
        details: action.payload.details
      };
      return {
        ...state,
        activities: Object.assign({}, state.activities, newActivities)
      };
    default:
      return state;
  }
};

export default activitylists;
