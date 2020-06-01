import {
  ORDERS_LOADED,
  ORDER_SUCCESSFULY_PLACED,
  ORDER_PLACE_FAILED,
  RESET_ORDER_PLACE,
} from "../actionTypes"

const initialState = {
  allOrders: [],
  newOrderDetails: {},
  orderPlaced: false || undefined,
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ORDERS_LOADED:
      return {
        ...state,
        allOrders: [...action.payload],
      }
    case ORDER_SUCCESSFULY_PLACED:
      // console.log(" action.payload", action.payload)

      return {
        ...state,
        orderPlaced: true,
        newOrderDetails: action.payload,
      }
    case ORDER_PLACE_FAILED:
      return {
        ...state,
        orderPlaced: false,
      }
    case RESET_ORDER_PLACE:
      return {
        ...state,
        orderPlaced: false,
      }
    default:
      return state
  }
}
