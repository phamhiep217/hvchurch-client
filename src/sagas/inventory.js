import * as Types from '../actions/_actionTypes';
import { getProvider } from './get';
import { patchProvider } from './patch';
import { postProvider } from './post';
//Saga effects
import { put, takeLatest } from 'redux-saga/effects';

//Tồn Kho
function* getAllInvExact(action) {
  try {
    const result = yield postProvider.getAllInvExact(action.body);
    if (result.data) {
      yield put({ type: Types.GET_INVEXACT_STATE, data: result.data });
    } else {
      console.log('không lấy được dữ tồn kho');
      yield put({ type: Types.GET_INVERR });
    }
  } catch (error) {
    yield put({ type: Types.GET_INVERR });
  }
}
export function* watchAllInvExact() {
  yield takeLatest(Types.GET_INVEXACT, getAllInvExact);
}

function* getInvDK(action) {
  try {
    const result = yield postProvider.getInvDK(action.body);
    if (result.data) {
      yield put({ type: Types.GET_INVDK_STATE, data: result.data });
    } else {
      console.log('không lấy được dữ tồn kho exact 100');
      yield put({ type: Types.GET_INVERR });
    }
  } catch (error) {
    yield put({ type: Types.GET_INVERR });
  }
}
export function* watchInvDK() {
  yield takeLatest(Types.GET_INVDK, getInvDK);
}

function* getInvKV(action) {
  try {
    const result = yield postProvider.getInvKV(action.body);
    if (result.data) {
      yield put({ type: Types.GET_INVKV_STATE, data: result.data });
    } else {
      console.log('không lấy được dữ tồn kho exact 200');
      yield put({ type: Types.GET_INVERR });
    }
  } catch (error) {
    yield put({ type: Types.GET_INVERR });
  }
}
export function* watchInvKV() {
  yield takeLatest(Types.GET_INVKV, getInvKV);
}

function* getBCTK(action) {
  try {
    const result = yield postProvider.getBCTK(action.body);
    if (result.data) {
      //yield put({ type: Types.GET_INVKV_STATE, data: result.data });
      window.open(result.data);
      yield put({ type: Types.GET_BCTK_STATE });
    } else {
      console.log('không lấy được báo cáo tồn kho');
      yield put({ type: Types.GET_INVERR });
    }
  } catch (error) {
    yield put({ type: Types.GET_INVERR });
  }
}
export function* watchBCTK() {
  yield takeLatest(Types.GET_BCTK, getBCTK);
}

function* getBCTKTHEOKHO(action) {
  try {
    const result = yield postProvider.getBCTKTHEOKHO(action.body);
    if (result.data) {
      //yield put({ type: Types.GET_INVKV_STATE, data: result.data });
      window.open(result.data);
      yield put({ type: Types.GET_BCTKTHEOKHO_STATE });
    } else {
      console.log('không lấy được báo cáo tồn kho theo kho');
      yield put({ type: Types.GET_INVERR });
    }
  } catch (error) {
    yield put({ type: Types.GET_INVERR });
  }
}
export function* watchBCTKTHEOKHO() {
  yield takeLatest(Types.GET_BCTKTHEOKHO, getBCTKTHEOKHO);
}

function* getBCTKNVL100(action) {
  try {
    const result = yield postProvider.getBCTKNVL100(action.body);
    if (result.data) {
      var newWindow = window.open();
      newWindow.location = result.data;
      yield put({ type: Types.GET_BCTKNVL_STATE });
    } else {
      console.log('không lấy được báo cáo tồn kho');
      yield put({ type: Types.GET_INVERR });
    }
  } catch (error) {
    yield put({ type: Types.GET_INVERR });
  }
}
export function* watchBCTKNVL100() {
  yield takeLatest(Types.GET_BCTKNVL100, getBCTKNVL100);
}

function* getBCTKNVL200(action) {
  try {
    const result = yield postProvider.getBCTKNVL200(action.body);
    if (result.data) {
      var newWindow = window.open();
      newWindow.location = result.data;
      yield put({ type: Types.GET_BCTKNVL_STATE });
    } else {
      console.log('không lấy được báo cáo tồn kho');
      yield put({ type: Types.GET_INVERR });
    }
  } catch (error) {
    yield put({ type: Types.GET_INVERR });
  }
}
export function* watchBCTKNVL200() {
  yield takeLatest(Types.GET_BCTKNVL200, getBCTKNVL200);
}

function* getBCTKTP100(action) {
  try {
    const result = yield postProvider.getBCTKTP100(action.body);
    if (result.data) {
      var newWindow = window.open();
      newWindow.location = result.data;
      yield put({ type: Types.GET_BCTKTP_STATE });
    } else {
      console.log('không lấy được báo cáo tồn kho');
      yield put({ type: Types.GET_INVERR });
    }
  } catch (error) {
    yield put({ type: Types.GET_INVERR });
  }
}
export function* watchBCTKTP100() {
  yield takeLatest(Types.GET_BCTKTP100, getBCTKTP100);
}

function* getBCTKTP200(action) {
  try {
    const result = yield postProvider.getBCTKTP200(action.body);
    if (result.data) {
      var newWindow = window.open();
      newWindow.location = result.data;
      yield put({ type: Types.GET_BCTKTP_STATE });
    } else {
      console.log('không lấy được báo cáo tồn kho');
      yield put({ type: Types.GET_INVERR });
    }
  } catch (error) {
    yield put({ type: Types.GET_INVERR });
  }
}
export function* watchBCTKTP200() {
  yield takeLatest(Types.GET_BCTKTP200, getBCTKTP200);
}
