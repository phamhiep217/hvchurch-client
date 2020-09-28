import * as Types from '../actions/_actionTypes';
import { getProvider } from './get';
import { patchProvider } from './patch';
import { postProvider } from './post';
//Saga effects
import { put, takeLatest } from 'redux-saga/effects';

//CRUD NHÂN VIÊN
function* getAllUser(action) {
  try {
    const result = yield getProvider.getAllUser();
    if (result.data) {
      yield put({ type: Types.GET_ALL_USER_STATE, data: result.data });
    } else {
      console.log('không lấy được dữ liệu nhân viên');
      yield put({ type: Types.GET_USER_ERR });
    }
  } catch (error) {
    yield put({ type: Types.GET_USER_ERR });
  }
}
export function* watchAllUser() {
  yield takeLatest(Types.GET_ALL_USER, getAllUser);
}

function* insertUser(action) {
  try {
    const result = yield postProvider.insertUser(action.body);
    if (result.data) {
      yield put({ type: Types.GET_USER_ADD_STATE, data: result.data });
    } else {
      console.log('không lấy được dữ liệu payment');
      yield put({ type: Types.GET_USER_ERR });
    }
  } catch (error) {
    yield put({ type: Types.GET_USER_ERR });
  }
}
export function* watchInsertUser() {
  yield takeLatest(Types.GET_USER_ADD, insertUser);
}

function* patchUserById(action) {
  try {
    const result = yield patchProvider.patchUserById(action.id, action.body);
    if (result.data) {
      yield put({ type: Types.GET_USER_UP_STATE, data: result.data });
    } else {
      console.log('không lấy được dữ liệu payment');
      yield put({ type: Types.GET_USER_ERR });
    }
  } catch (error) {
    yield put({ type: Types.GET_USER_ERR });
  }
}
export function* watchUpdateUserById() {
  yield takeLatest(Types.GET_USER_UP, patchUserById);
}

// CRUD NHA CUNG CAP
function* getAllSupply(action) {
  try {
    const result = yield getProvider.getAllSupply();
    if (result.data) {
      yield put({ type: Types.GET_SUPPLY_STATE, data: result.data });
    } else {
      console.log('không lấy được dữ liệu nhà cung cấp');
      yield put({ type: Types.GET_SUPPLY_ERR });
    }
  } catch (error) {
    yield put({ type: Types.GET_SUPPLY_ERR });
  }
}
export function* watchAllSupply() {
  yield takeLatest(Types.GET_SUPPLY, getAllSupply);
}

function* insertSupply(action) {
  try {
    const result = yield postProvider.insertSupply(action.body);
    if (result.data) {
      yield put({ type: Types.GET_SUPPLY_ADD_STATE, data: result.data });
    } else {
      console.log('không lấy được dữ liệu nha cung cap');
      yield put({ type: Types.GET_SUPPLY_ERR });
    }
  } catch (error) {
    yield put({ type: Types.GET_SUPPLY_ERR });
  }
}
export function* watchInsertSupply() {
  yield takeLatest(Types.GET_SUPPLY_ADD, insertSupply);
}

function* patchSupplyById(action) {
  try {
    const result = yield patchProvider.patchSupplyById(action.id, action.body);
    if (result.data) {
      yield put({ type: Types.GET_SUPPLY_UP_STATE, data: result.data });
    } else {
      console.log('không lấy được dữ liệu nhà cung cấp');
      yield put({ type: Types.GET_SUPPLY_ERR });
    }
  } catch (error) {
    yield put({ type: Types.GET_SUPPLY_ERR });
  }
}
export function* watchSupplyById() {
  yield takeLatest(Types.GET_SUPPLY_UP, patchSupplyById);
}

// CRUD NGUYEN VAT LIEU
function* getAllProduct(action) {
  try {
    const result = yield getProvider.getAllProduct();
    if (result.data) {
      yield put({ type: Types.GET_PRODUCT_STATE, data: result.data });
    } else {
      console.log('không lấy được dữ liệu nvl');
      yield put({ type: Types.GET_PRODUCT_ERR });
    }
  } catch (error) {
    yield put({ type: Types.GET_PRODUCT_ERR });
  }
}
export function* watchAllProduct() {
  yield takeLatest(Types.GET_PRODUCT, getAllProduct);
}

function* insertProduct(action) {
  try {
    const result = yield postProvider.insertProduct(action.body);
    if (result.data) {
      yield put({ type: Types.GET_PRODUCT_ADD_STATE, data: result.data });
    } else {
      console.log('không lấy được dữ liệu payment');
      yield put({ type: Types.GET_PRODUCT_ERR });
    }
  } catch (error) {
    yield put({ type: Types.GET_PRODUCT_ERR });
  }
}
export function* watchInsertProduct() {
  yield takeLatest(Types.GET_PRODUCT_ADD, insertProduct);
}

function* patchProductById(action) {
  try {
    const result = yield patchProvider.patchProductById(action.id, action.body);
    if (result.data) {
      yield put({ type: Types.GET_PRODUCT_UP_STATE, data: result.data });
    } else {
      console.log('không lấy được dữ liệu payment');
      yield put({ type: Types.GET_PRODUCT_ERR });
    }
  } catch (error) {
    yield put({ type: Types.GET_PRODUCT_ERR });
  }
}
export function* watchProductById() {
  yield takeLatest(Types.GET_PRODUCT_UP, patchProductById);
}

// CRUD CHÍNH SÁCH THANH TOÁN
function* getAllPayment(action) {
  try {
    const result = yield getProvider.getAllPayment();
    if (result.data) {
      yield put({ type: Types.GET_PAYMENT_STATE, data: result.data });
    } else {
      console.log('không lấy được dữ liệu payment');
      yield put({ type: Types.GET_PAYMENT_ERR });
    }
  } catch (error) {
    yield put({ type: Types.GET_PAYMENT_ERR });
  }
}
export function* watchAllPayment() {
  yield takeLatest(Types.GET_PAYMENT, getAllPayment);
}

function* patchPaymentById(action) {
  try {
    const result = yield patchProvider.patchPaymentById(action.id, action.body);
    if (result.data) {
      yield put({ type: Types.GET_PAYMENT_UP_STATE, data: result.data });
    } else {
      console.log('không lấy được dữ liệu payment');
      yield put({ type: Types.GET_PAYMENT_ERR });
    }
  } catch (error) {
    yield put({ type: Types.GET_PAYMENT_ERR });
  }
}
export function* watchPaymentById() {
  yield takeLatest(Types.GET_PAYMENT_UP, patchPaymentById);
}

function* insertPayment(action) {
  try {
    const result = yield postProvider.insertPayment(action.body);
    if (result.data) {
      yield put({ type: Types.GET_PAYMENT_ADD_STATE, data: result.data });
    } else {
      console.log('không lấy được dữ liệu payment');
      yield put({ type: Types.GET_PAYMENT_ERR });
    }
  } catch (error) {
    yield put({ type: Types.GET_PAYMENT_ERR });
  }
}
export function* watchInsertPayment() {
  yield takeLatest(Types.GET_PAYMENT_ADD, insertPayment);
}
