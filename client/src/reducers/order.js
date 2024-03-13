import * as actionTypes from "../actions/actionTypes";

const initialState = {
  orderLists: [],
  totalprice: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ORDERED_ITEM:
      return {
        ...state,
        orderLists: action.orderLists,
      };
    case actionTypes.POST_ORDERED_ITEM:
      return {
        ...state,
        orderLists: [action.orderLists, ...state.orderLists],
      };
    case actionTypes.DELET_ITEM_ORDER:
      return {
        ...state,
        orderLists: state.orderLists.filter(item=>item._id !== action.palload),
      };
    default:
      return state;
  }
};

export default reducer;
