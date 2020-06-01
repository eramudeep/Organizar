import { GET_NOTIFICATIONS, GET_NOTIFICATIONS_SUCCESS } from "../actionTypes"

const initialState = {
  allNotifications: [],
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        allNotifications: [...action.payload],
      }
    default:
      return state
  }
}