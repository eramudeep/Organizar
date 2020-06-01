import { CONTACT_US_SUCCESS, GET_CONTACT_US_SUCCESS } from "../actionTypes"

const initialState = {
  detailsToSend: {},
  contactQueries:{}
}

export default function(state = initialState, action) {
  switch (action.type) {
    case CONTACT_US_SUCCESS:
      return {
        ...state,
        detailsToSend: { ...action.payload },
      }
      case GET_CONTACT_US_SUCCESS:
        return{
          ...state,
          contactQueries:{...action.payload}
        }
    default:
      return state
  }
}
