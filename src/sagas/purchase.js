import * as Types from '../actions/_actionTypes';
import { getProvider } from './get';
import { patchProvider } from './patch';
import { postProvider } from './post';
//Saga effects
import { put, takeLatest } from 'redux-saga/effects';

function* getAllPurchase(action) {
  try {
    const result = yield getProvider.getAllPurchase();
    if (result.data) {
      yield put({ type: Types.GET_PURCHASE_STATE, data: result.data });
    } else {
      console.log('không lấy được dữ liệu đơn đặt hàng');
      yield put({ type: Types.GET_PURCHASE_ERR });
    }
  } catch (error) {
    yield put({ type: Types.GET_PURCHASE_ERR });
  }
}
export function* watchAllPurchase() {
  yield takeLatest(Types.GET_PURCHASE, getAllPurchase);
}
