import { API, getHeader } from '../helpers';
import axios from 'axios';

function* getUserById(id, token) {
  const { data } = yield axios.get(`${API}/aut/${id}`, getHeader(token));
  return data;
}

function* getAllUser() {
  const { data } = yield axios.get(`${API}/aut`);
  return data;
}

function* getAllSupply() {
  const { data } = yield axios.get(`${API}/supply`);
  return data;
}

function* getAllProduct() {
  const { data } = yield axios.get(`${API}/product`);
  return data;
}

function* getAllPayment() {
  const { data } = yield axios.get(`${API}/payment`);
  return data;
}

function* getAllPurchase() {
  const { data } = yield axios.get(`${API}/purchase`);
  return data;
}

export const getProvider = {
  getUserById,
  getAllSupply,
  getAllProduct,
  getAllPayment,
  getAllUser,
  getAllPurchase
};
