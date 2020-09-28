import * as Types from '../actions/_actionTypes';

const initState = { error: false, loading: true };

export const inventories = (state = initState, action) => {
  switch (action.type) {
    case Types.INIT_INVEXACT:
      return { ...state, data: [], error: false, loading: true };
    case Types.GET_INVEXACT:
      return { ...state, loading: false };
    case Types.GET_INVEXACT_STATE:
      return { ...state, data: action.data, error: false, loading: true };
    case Types.GET_INVDK:
      return { ...state, loading: false };
    case Types.GET_INVDK_STATE:
      return {
        ...state,
        loading: true,
        error: false,
        data: { ...state.data, '100': action.data }
      };
    case Types.GET_INVKV:
      return { ...state, loading: false };
    case Types.GET_INVKV_STATE:
      return {
        ...state,
        loading: true,
        error: false,
        data: { ...state.data, '200': action.data }
      };
    case Types.GET_INVERR:
      return { ...state, loading: true, error: true };
    case Types.GET_BCTK:
      return { ...state, loading: false };
    case Types.GET_BCTK_STATE:
      return { ...state, loading: true };
    case Types.GET_BCTKTHEOKHO:
      return { ...state, loading: false };
    case Types.GET_BCTKTHEOKHO_STATE:
      return { ...state, loading: true };
    case Types.GET_BCTKNVL100:
      return { ...state, loading: false };
    case Types.GET_BCTKNVL200:
      return { ...state, loading: false };
    case Types.GET_BCTKNVL_STATE:
      return { ...state, loading: true };
    case Types.GET_BCTKTP100:
      return { ...state, loading: false };
    case Types.GET_BCTKTP200:
      return { ...state, loading: false };
    case Types.GET_BCTKTP_STATE:
      return { ...state, loading: true };
    default:
      return state;
  }
};
