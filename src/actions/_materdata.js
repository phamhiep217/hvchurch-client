import * as Types from './_actionTypes';

export const getAllSupply = () => {
  return {
    type: Types.GET_SUPPLY
  };
};

export const patchSupplybyID = (id, body) => {
  return {
    type: Types.GET_SUPPLY_UP,
    id: id,
    body: body
  };
};

export const insertSupply = body => {
  return {
    type: Types.GET_SUPPLY_ADD,
    body: body
  };
};

export const getAllPayment = () => {
  return {
    type: Types.GET_PAYMENT
  };
};

export const patchPaymentbyID = (id, body) => {
  return {
    type: Types.GET_PAYMENT_UP,
    id: id,
    body: body
  };
};

export const insertPayment = body => {
  return {
    type: Types.GET_PAYMENT_ADD,
    body: body
  };
};

export const getAllProduct = () => {
  return {
    type: Types.GET_PRODUCT
  };
};

export const patchProductbyID = (id, body) => {
  return {
    type: Types.GET_PRODUCT_UP,
    id: id,
    body: body
  };
};

export const insertProduct = body => {
  return {
    type: Types.GET_PRODUCT_ADD,
    body: body
  };
};

export const getAllUser = () => {
  return {
    type: Types.GET_ALL_USER
  };
};

export const patchUserbyID = (id, body) => {
  return {
    type: Types.GET_USER_UP,
    id: id,
    body: body
  };
};

export const insertUser = body => {
  return {
    type: Types.GET_USER_ADD,
    body: body
  };
};

export const getAllPartship = id => {
  return {
    type: Types.GET_PARTSHIP,
    id
  };
};

export const patchPartshipbyID = (id, body) => {
  return {
    type: Types.GET_PARTSHIP_UP,
    id: id,
    body: body
  };
};

export const insertPartship = body => {
  return {
    type: Types.GET_PARTSHIP_ADD,
    body: body
  };
};
