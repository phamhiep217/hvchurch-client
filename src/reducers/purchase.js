import * as Types from '../actions/_actionTypes';

const initState = { error: false, loading: true };

export const purchase = (state = initState, action) => {
  switch (action.type) {
    case Types.GET_PURCHASE_STATE:
      return { ...state, data: action.data, loading: true };
    // case Types.GET_SUPPLY_UP_STATE:
    //   return {
    //     ...state,
    //     loading: true,
    //     data: state.data.map(item =>
    //       item._id === action.data._id ? action.data : item
    //     )
    //   };
    // case Types.GET_SUPPLY_ADD_STATE:
    //   return { ...state, loading: true, data: [action.data, ...state.data] };
    case Types.GET_PURCHASE_ERR:
      return { ...state, loading: true, error: true };
    default:
      return state;
  }
};
