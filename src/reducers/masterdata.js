import * as Types from '../actions/_actionTypes';

const initState = { error: false, loading: true };

export const supplies = (state = initState, action) => {
  switch (action.type) {
    case Types.GET_SUPPLY_STATE:
      return { ...state, data: action.data, loading: true };
    case Types.GET_SUPPLY_UP_STATE:
      return {
        ...state,
        loading: true,
        data: state.data.map(item =>
          item._id === action.data._id ? action.data : item
        )
      };
    case Types.GET_SUPPLY_ADD_STATE:
      return { ...state, loading: true, data: [action.data, ...state.data] };
    case Types.GET_SUPPLY_ERR:
      return { ...state, loading: true, error: true };
    default:
      return state;
  }
};

export const products = (state = initState, action) => {
  switch (action.type) {
    case Types.GET_PRODUCT_STATE:
      return { ...state, data: action.data, loading: true };
    case Types.GET_PRODUCT_UP_STATE:
      return {
        ...state,
        loading: true,
        data: state.data.map(item =>
          item._id === action.data._id ? action.data : item
        )
      };
    case Types.GET_PRODUCT_ADD_STATE:
      return { ...state, loading: true, data: [action.data, ...state.data] };
    case Types.GET_PRODUCT_ERR:
      return { ...state, loading: true, error: true };
    default:
      return state;
  }
};

export const payments = (state = initState, action) => {
  switch (action.type) {
    case Types.GET_PAYMENT_STATE:
      return { ...state, data: action.data, loading: true };
    case Types.GET_PAYMENT_UP_STATE:
      return {
        ...state,
        loading: true,
        data: state.data.map(item =>
          item._id === action.data._id ? action.data : item
        )
      };
    case Types.GET_PAYMENT_ADD_STATE:
      return { ...state, loading: true, data: [action.data, ...state.data] };
    case Types.GET_PAYMENT_ERR:
      return { ...state, loading: true, error: true };
    default:
      return state;
  }
};

export const user = (state = initState, action) => {
  switch (action.type) {
    case Types.GET_USER_STATE:
      return { ...state, ...action.data };
    case Types.GET_ALL_USER_STATE:
      return { ...state, data: action.data, loading: true };
    case Types.GET_USER_UP_STATE:
      return {
        ...state,
        loading: true,
        data: state.data.map(item =>
          item._id === action.data._id ? action.data : item
        )
      };
    case Types.GET_USER_ADD_STATE:
      return { ...state, loading: true, data: [action.data, ...state.data] };
    case Types.GET_USER_ERR:
      return { ...state, loading: true, error: true };
    default:
      return state;
  }
};
