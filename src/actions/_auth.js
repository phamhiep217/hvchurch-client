import * as Types from './_actionTypes';

export const authFailed = () => {
  return {
    type: Types.AUTH_FAILED
  };
};
export const authSucceeded = payload => {
  return {
    type: Types.AUTH_SUCCEEDED,
    payload
  };
};
export const clearAuth = () => {
  return {
    type: Types.CLEAR_AUTH
  };
};
export const checkLogin = (body, remember, history) => {
  return {
    type: Types.AUTH_REQUEST,
    body,
    remember,
    history
  };
};

export const getUserById = (id, token) => {
  return {
    type: Types.GET_USER,
    id,
    token
  };
};
