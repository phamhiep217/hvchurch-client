import * as Types from '../actions/_actionTypes';

const initState = { error: false, loading: true };

export const auth = (state = initState, { type, payload }) => {
  switch (type) {
    case Types.AUTH_SUCCEEDED:
      return { ...state, ...payload, error: false, loading: true };

    case Types.AUTH_FAILED:
      return !state.error ? { ...state, error: true, loading: true } : state;

    case Types.CLEAR_AUTH:
      return state.token ? { ...state, token: '', loading: true } : state;

    default:
      return state;
  }
};
