import {
  LOGIN,
  SET_PHONE_NUMBER_COUNTRY_CODE,
  TOKEN_SUCCESS,
  REGISTER_USER,
  RESEND_SMS_SUCCESS,
  GET_USER_DETAILS_SUCESS,
  SIGNUP_REQUEST_ID,
  SIGNUP_CONFIRMATION_SUCCESS,
  REGISTER_SUCCESS,
  LOGOUT_USER,
} from "../actionTypes"

const initialState = {
  isLoggedIn: false,
  userProfile: {},
  phoneAndCountryCode: {},
  accessToken: null,
  resendSmsCode: {},
  registerUserData: {},
  userDetails: {},
  signupReqID: null,
  signupData: {},
  isRegister: false,
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USER_DETAILS_SUCESS:
      console.log("...action.payload ", action.payload.details)

      return {
        ...state,
        userDetails: { ...action.payload },
        userProfile:
          action.payload.data != undefined ? action.payload.data.details : action.payload.details,
        isLoggedIn: true,
      }
    case LOGIN:
      return {
        ...state,
        isLoggedIn: action.payload,
      }
    case SET_PHONE_NUMBER_COUNTRY_CODE:
      return {
        ...state,
        phoneAndCountryCode: {
          ...action.payload,
        },
      }
    case TOKEN_SUCCESS:
      return {
        ...state,
        accessToken: action.payload,
      }
    case RESEND_SMS_SUCCESS:
      return { ...state, resendSmsCode: { ...action.payload } }
    case REGISTER_USER:
      return { ...state, registerUserData: { ...action.payload } }
    case SIGNUP_REQUEST_ID:
      return {
        ...state,
        signupReqID: action.payload,
      }
    case SIGNUP_CONFIRMATION_SUCCESS:
      return { ...state, signupData: { ...action.payload } }
    case REGISTER_SUCCESS:
      return { ...state, isRegister: action.payload }
    case LOGOUT_USER:
      return {
        ...state,
        isLoggedIn: false,
        userProfile: {},
        phoneAndCountryCode: {},
        accessToken: null,
        resendSmsCode: {},
        registerUserData: {},
        userDetails: {},
        signupReqID: null,
        signupData: {},
        isRegister: false,
      }
    default:
      return state
  }
}
