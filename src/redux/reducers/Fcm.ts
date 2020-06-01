import { ORDERS_LOADED, FCM_SUCCESS } from "../actionTypes"

const initialState = {
  fcmToken: {},
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FCM_SUCCESS:
      return {
        ...state,
        fcmToken: {...action.payload},
      }
    default:
      return state
  }
}
