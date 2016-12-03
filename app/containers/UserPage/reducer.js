/**
 * Created by easub on 2016/12/3.
 */
import {
  FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_ERROR,
  LOG_OUT,
} from './constants';

import { fromJS } from 'immutable';

const initialState = fromJS({
  userDetails: {
  },
  login: Boolean(global.window.localStorage.access_token),
  requesting: false,
  error: '',
});

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOG_OUT: {
      const localStorage = global.window.localStorage;
      localStorage.removeItem('access_token');
      localStorage.removeItem('avatar_url');
      localStorage.removeItem('id');
      localStorage.removeItem('loginname');
      return state.set('login', false);
    }
    case FETCH_USER: {
      return state.set('requesting', true);
    }
    case FETCH_USER_SUCCESS: {
      return state.mergeDeep({ userDetails: action.data });
    }
    case FETCH_USER_ERROR: {
      return state.set('error', action.error)
        .set('requesting', false);
    }
    default:
      return state;
  }
}
