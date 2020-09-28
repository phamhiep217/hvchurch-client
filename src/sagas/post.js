import { API, getHeader } from '../helpers';
import axios from 'axios';

function* checkAutFromServer(body) {
  let { data } = yield axios.post(`${API}/aut/login`, body, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return data;
}

function* insertUser(body) {
  let { data } = yield axios.post(`${API}/aut/signup`, body, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return data;
}

function* insertPayment(body) {
  let { data } = yield axios.post(`${API}/payment`, body, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return data;
}

function* insertProduct(body) {
  let { data } = yield axios.post(`${API}/product`, body, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return data;
}

function* insertSupply(body) {
  let { data } = yield axios.post(`${API}/supply`, body, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return data;
}

function* getAllInvExact(body) {
  let { data } = yield axios.post(`${API}/inventory/getinv`, body, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return data;
}

function* getInvDK(body) {
  let { data } = yield axios.post(`${API}/inventory/calcinv`, body, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return data;
}

function* getInvKV(body) {
  let { data } = yield axios.post(`${API}/inventory/calcinv200`, body, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return data;
}

function* getBCTK(body) {
  let { data } = yield axios.post(`${API}/inventory/BCTK`, body, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return data;
}

function* getBCTKTHEOKHO(body) {
  let { data } = yield axios.post(`${API}/inventory/BCTONTHEOKHO`, body, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return data;
}

function* getBCTKNVL100(body) {
  let { data } = yield axios.post(`${API}/inventory/BCXNTNVL100`, body, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return data;
}

function* getBCTKNVL200(body) {
  let { data } = yield axios.post(`${API}/inventory/BCXNTNVL200`, body, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return data;
}

function* getBCTKTP100(body) {
  let { data } = yield axios.post(`${API}/inventory/BCXNTTP100`, body, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return data;
}

function* getBCTKTP200(body) {
  let { data } = yield axios.post(`${API}/inventory/BCXNTTP200`, body, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return data;
}

export const postProvider = {
  checkAutFromServer,
  insertPayment,
  insertProduct,
  insertSupply,
  insertUser,
  getAllInvExact,
  getInvDK,
  getInvKV,
  getBCTKTHEOKHO,
  getBCTK,
  getBCTKNVL100,
  getBCTKNVL200,
  getBCTKTP100,
  getBCTKTP200
};
