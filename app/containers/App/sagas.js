/*
 * App sagas
 */

import {
  USERINFO_REQUESTING,
} from './constants';

import {
  userinfoRequestSuccess,
  userinfoRequestError,
} from './actions';

import appRequest from './appRequests';
import { take, call, put } from 'redux-saga/effects';

export function* requestUserInfo() {
  try {
    yield take(USERINFO_REQUESTING);
    const userInfo = yield call(appRequest.userinfoRequest);
    yield put(userinfoRequestSuccess(userInfo));
  } catch (error) {
    yield put(userinfoRequestError(error));
  }
}

export default [
  requestUserInfo,
];
