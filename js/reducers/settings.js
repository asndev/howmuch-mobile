import { RECEIVE_LOGIN } from '../actions';

const settingsInitialState = {
  // The user is set via the Reducer after a successful login
  user: null
};
const testState = {
  user: {
    token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1NzA2YmU0YWVkZTg1OTViMDAyYmEzMWMiLCJpYXQiOjE0NjA1NzM4MDI3OTYsImV4cCI6MTQ2MDY2MDIwMjc5Nn0.KGejQJ45vyt4mvkudJok_JeSG2xMkIT4G-7hxmI1GRY"
  }
};

const settings = (state = testState, action) => {
  switch (action.type) {
    case RECEIVE_LOGIN:
      if (action.payload.success) {
        return {
          ...state,
          user: {
            token: action.payload.token
          }
        };
      }
      return state;
    default:
      return state;
  }
};

export default settings;
