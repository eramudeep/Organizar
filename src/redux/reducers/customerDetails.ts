import { ORDERS_LOADED, GET_CUSTOMER_DETAIL_SUCCESS } from "../actionTypes"

const initialState = {
  customerDetails: [],
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CUSTOMER_DETAIL_SUCCESS:
      return {
        ...state,
        customerDetails: [...action.payload],
      }
    default:
      return state
  }
}
