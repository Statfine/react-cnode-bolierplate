/**
 * Created by easub on 2016/12/3.
 */
import { SUBMIT } from './constants';
import { selectorSubmitData } from './selectors';
import {
  loginSuccess, loginError,
} from './actions';
import { takeLatest } from 'redux-saga';
import { push } from 'react-router-redux';
import { call, put, fork, select } from 'redux-saga/effects';
import loginApi from './loginApi';

export function* login(action) {
  try {
    const submitData = yield select(selectorSubmitData());
    const { accessToken } = submitData.toJS();
    const data = yield call(loginApi.login, accessToken);
    yield put(loginSuccess(data));
    const localStorage = global.window.localStorage;
    localStorage.access_token = accessToken;
    localStorage.avatar_url = data.avatar_url;
    localStorage.id = data.id;
    localStorage.loginname = data.loginname;
    yield put(push('/user'));
  } catch (error) {
    const msg = error.message ? error.message : error;
    yield put(loginError(msg));
  }
}


export function* watchLogin() {
  yield* takeLatest(SUBMIT, login);
}

export function* root() {
  yield fork(watchLogin);
}

export default [root];
