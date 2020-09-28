import { API, getHeader } from '../helpers';
import axios from 'axios';

function* patchUserById(id, body) {
  let { data } = yield axios.patch(`${API}/aut/${id}`, body, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return data;
}

function* patchPaymentById(id, body) {
  let { data } = yield axios.patch(`${API}/payment/${id}`, body, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return data;
}

function* patchProductById(id, body) {
  let { data } = yield axios.patch(`${API}/product/${id}`, body, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return data;
}

function* patchSupplyById(id, body) {
  let { data } = yield axios.patch(`${API}/supply/${id}`, body, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return data;
}

export const patchProvider = {
  patchPaymentById,
  patchProductById,
  patchSupplyById,
  patchUserById
};
