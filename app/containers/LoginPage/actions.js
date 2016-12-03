/**
 * Created by easub on 2016/12/3.
 */
import {
  CHANGE_DATA, SUBMIT, SUBMIT_SUCCESS, SUBMIT_ERROR, INITIALIZATION,
} from './constants';

export function initialization() {
  return { type: INITIALIZATION };
}

export function changeData(data) {
  return { type: CHANGE_DATA, data };
}

export function login() {
  return { type: SUBMIT };
}

export function loginSuccess(data) {
  return { type: SUBMIT_SUCCESS, data };
}

export function loginError(error) {
  return { type: SUBMIT_ERROR, error };
}
