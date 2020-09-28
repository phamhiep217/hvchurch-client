import * as Types from '../actions/_actionTypes';
import { getProvider } from './get';
import { postProvider } from './post';
//Saga effects
import { put, takeLatest } from 'redux-saga/effects';

function* checkLogin(action) {
  try {
    const result = yield postProvider.checkAutFromServer(action.body);
    if (result.token) {
      // if (action.remember) {
      //   localStorage.setItem('account', JSON.stringify(action.body));
      // } else {
      //   localStorage.removeItem('account');
      // }
      yield put({ type: Types.AUTH_SUCCEEDED, payload: result });
      //localStorage.setItem('token', result.token);
      action.history.push('/home');
    }
  } catch (error) {
    yield put({ type: Types.AUTH_FAILED });
  }
}
export function* watchCheckLogin() {
  yield takeLatest(Types.AUTH_REQUEST, checkLogin);
}

function* getUserById(action) {
  try {
    const result = yield getProvider.getUserById(action.id, action.token);
    if (result.data) {
      yield put({ type: Types.GET_USER_STATE, data: result.data });
    } else {
      console.log('userbyid không lấy được dữ liệu');
    }
  } catch (error) {
    yield put({ type: Types.AUTH_FAILED });
  }
}
export function* watchUserById() {
  yield takeLatest(Types.GET_USER, getUserById);
}
