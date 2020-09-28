import { all, fork } from 'redux-saga/effects';
import { watchCheckLogin, watchUserById } from './autSaga';
import {
  watchAllSupply,
  watchInsertSupply,
  watchSupplyById,
  watchAllProduct,
  watchInsertProduct,
  watchProductById,
  watchAllPayment,
  watchPaymentById,
  watchInsertPayment,
  watchAllUser,
  watchInsertUser,
  watchUpdateUserById
} from './masterData';
import {
  watchAllInvExact,
  watchInvDK,
  watchInvKV,
  watchBCTK,
  watchBCTKTHEOKHO,
  watchBCTKNVL100,
  watchBCTKNVL200,
  watchBCTKTP100,
  watchBCTKTP200
} from './inventory';
import { watchAllPurchase } from './purchase';
export default function* rootSaga() {
  yield all([
    fork(watchCheckLogin),
    fork(watchUserById),
    //NHÀ CUNG CẤP
    fork(watchAllSupply),
    fork(watchInsertSupply),
    fork(watchSupplyById),
    //NGUYEN VAT LIEU
    fork(watchAllProduct),
    fork(watchAllPayment),
    fork(watchPaymentById),
    //CHÍNH SÁCH THANH TOÁN
    fork(watchInsertPayment),
    fork(watchInsertProduct),
    fork(watchProductById),
    //NHÂN VIÊN
    fork(watchAllUser),
    fork(watchInsertUser),
    fork(watchUpdateUserById),
    //Tồn kho
    fork(watchAllInvExact),
    fork(watchInvDK),
    fork(watchInvKV),
    fork(watchBCTK),
    fork(watchBCTKTHEOKHO),
    fork(watchBCTKNVL100),
    fork(watchBCTKNVL200),
    fork(watchBCTKTP100),
    fork(watchBCTKTP200),
    //Mua hàng
    fork(watchAllPurchase)
  ]);
}
