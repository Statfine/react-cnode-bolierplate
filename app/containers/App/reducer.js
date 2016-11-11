/*
 * App reducer
 */

import {
  SET_AUTH,
  USERINFO_REQUEST_SUCCESS,
  USERINFO_REQUEST_ERROR,
  LOGOUT,
  GLOBAL_ERROR,
} from './constants';

import {
  TOKEN_ERROR,
} from './errors';

import { fromJS } from 'immutable';

const initialState = fromJS({
  userInfo: {
    avatar: '',
    email: '',
    mobile: '',
    name: '',
    policy: {},
    socials: [],
    uid: '',
    error: '',
  },
  loggedIn: localStorage.access_token && Date.now() < localStorage.expires_in,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTH:
      return state.set('loggedIn', action.newAuthState);
    case USERINFO_REQUEST_SUCCESS:
      return state.mergeDeep(fromJS({ userInfo: action.userInfo }));
    case USERINFO_REQUEST_ERROR:
      return state.setIn(['userInfo', 'error'], action.error);
    case LOGOUT: {
      const localStorage = global.window.localStorage;
      localStorage.removeItem('access_token');
      localStorage.removeItem('expires_in');
      localStorage.removeItem('refresh_token');
      window.location.href = window.location.origin;
      return state;
    }
    case GLOBAL_ERROR:
      switch (action.code) {
        case TOKEN_ERROR:
          window.location.href = window.location.origin;
          break;
        default:
          break;
      }
      return state;
    default:
      return state;
  }
}

export default appReducer;
