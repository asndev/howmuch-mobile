export const DO_LOGIN = 'DO_LOGIN';
export const RECEIVE_LOGIN = 'RECEIVE_LOGIN';

export const CREATE_ACTIVITY = 'CREATE_ACTIVITY';
export const RECEIVE_ATIVITY_LISTS = 'RECEIVE_ATIVITY_LISTS';
export const RECEIVE_ACTIVITIES = 'RECEIVE_ACTIVITIES';

function receiveLogin(payload) {
  console.log('Received login');
  return {
    type: RECEIVE_LOGIN,
    payload
  };
}

export function doLogin(email, password) {
  console.log('Doing loggin');
  return dispatch => {
    return fetch('http://howmuch-api.herokuapp.com/signin', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })
    .then(response => response.json())
    .then(json => dispatch(receiveLogin(json)));
  };
}

function receiveActivities(payload) {
  return {
    type: RECEIVE_ACTIVITIES,
    payload
  };
}

export function fetchActivityList(id) {
  return (dispatch, getState) => {
    const user = getState().settings.user;
    if (!user) {
      console.warn('No User');
      return;
    }
    return fetch(`http://howmuch-api.herokuapp.com/v1/activitylist/${id}/activity`, {
      headers: {
        'authorization': user.token
      }
    })
    .then(response => response.json())
    .then(json => dispatch(receiveActivities({ _id: id, ...json })));
  };
}

export function createActivity(id) {
  return (dispatch, getState) => {
    const user = getState().settings.user;
    if (!user) {
      console.warn('No User');
      return;
    }

    return fetch(`http://howmuch-api.herokuapp.com/v1/activitylist/${id}/activity`, {
      headers: {
        'authorization': user.token
      },
      method: 'POST'
    })
    .then(() => { dispatch(fetchActivityList(id)); });
  };
}

function receiveActivityLists(payload) {
    return {
      type: RECEIVE_ATIVITY_LISTS,
      payload
    };
}

export function fetchActivityLists() {
  return (dispatch, getState) => {
    const user = getState().settings.user;
    if (!user) {
      console.warn('No User');
      return;
    }
    return fetch('http://howmuch-api.herokuapp.com/v1/activitylist', {
      headers: {
        'authorization': user.token
      }
    })
    .then(response => response.json())
    .then(json => dispatch(receiveActivityLists(json)));
  };
}
