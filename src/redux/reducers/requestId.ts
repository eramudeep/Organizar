import { REQUEST_ID, OTP_SUCCESS } from "../actionTypes"

const initialState = {
    requestId:'',
    otpStatus:false
  }

export default function(state = initialState, action) {
    switch (action.type) {
      case REQUEST_ID:
        return {
          ...state,
          requestId: action.payload,
        }
        case OTP_SUCCESS:{
          return{
            ...state,
            otpStatus:action.payload
          }
        }
      default:
        return { ...state }
    }
  }