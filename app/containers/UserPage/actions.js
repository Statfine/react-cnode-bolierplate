/**
 * Created by easub on 2016/12/3.
 */
import {
  FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_ERROR, LOG_OUT,
} from './constants';

export function logOut() {
  return { type: LOG_OUT };
}

export function fetchUser() {
  return { type: FETCH_USER };
}

export function fetchUserSuccess(data) {
  return { type: FETCH_USER_SUCCESS, data };
}

export function fetchUserError(error) {
  return { type: FETCH_USER_ERROR, error };
}
