import { call, put, takeLatest } from "redux-saga/effects"
import axios from "axios"
import {
  LOAD_CATEGORIES,
  SET_PHONE_NUMBER_COUNTRY_CODE,
  SIGNUP_CONFIRMATION,
  RESEND_SMS,
  REGISTER_USER,
  GET_USER_DETAILS,
  EDIT_CUSTOMER_DETAIL,
} from "../actionTypes"
import { APIS, ORGANIZATION_ID, VOC_KEY, CHANNEL_ID, LOYALTY_ID } from "../../api/ApiList"
import { dataAppender } from "../../api/RequestMaker"
import { setUserDetail, getToken, getLoyaltyId } from "../../components/utils/CartSetter"
import { AlertHelper } from "../../components/alertHelper/AlertHelper"
//1 worker saga
export function* fetchToken() {
  try {
    const responce = yield call(
      axios.get,
      `${APIS.GET_TOKEN}?organization_id=${ORGANIZATION_ID}&voc_key=${VOC_KEY}&channel_id=${CHANNEL_ID}`,
    )
    console.log(" responce TOKEN >> ", responce)

    yield put({
      type: "TOKEN_SUCCESS",
      payload: responce.data.token,
    })
    return responce
  } catch (error) {}
}
//2 watcher saga
export function* genrateTokeWatcher() {
  yield takeLatest(LOAD_CATEGORIES, fetchToken)
}

export function* getOtpWorker(action) {
  try {
    const { phoneNumber, country, email } = action.payload
    let countryPhone = `${country.replace(/[^\w\s]/gi, "")}${phoneNumber}`
    const token = yield call(getToken)
    console.log("requestOptions>>>>>>>", token)

    const requestOptions = yield dataAppender([
      { MobileNumber: countryPhone },
      { CountryCode: country },
      { token: token },
      { Email: email },
    ])
    console.log("requestOptions>>>>>>>", requestOptions)

    /* work pending to get the otp message here*/
    const responce = yield call(
      async () => {
        return fetch(APIS.SIGNUP_POST, requestOptions).then(response => response.json())
      } /*axios.post, APIS.SIGNUP_POST, requestOptions*/,
    )
    /*set respunce to store*/
    if (responce.status === "error") {
      /* dispatch action to aware the store*/
      AlertHelper.show("error", "Error", responce.message)
      yield put({ type: "API_ERROR", payload: responce })
    }
    if (responce.status === "success") {
      yield put({ type: "REQUEST_ID", payload: responce.data.RequestId })
      yield put({ type: "OTP_SUCCESS", payload: true })
      /* dispatch action to aware the store*/
    }
    console.log("responce from OTP ==>", responce)
  } catch (error) {
    console.log("Error while fetching OTP", error)
  }
}
//2 watcher saga
export function* getOtpWatcher() {
  yield takeLatest(SET_PHONE_NUMBER_COUNTRY_CODE, getOtpWorker)
}

export function* signUpConfirmationWorker(action) {
  const { phoneNumber, country, otp, reqID } = action.payload
  let countryPhone = `${country.replace(/[^\w\s]/gi, "")}${phoneNumber}`
  const requestOptions = dataAppender([
    { MobileNumber: countryPhone },
    { PinCode: otp },
    { CountryCode: country },
    { RequestId: reqID },
  ])

  const responce = yield call(async () => {
    return fetch(APIS.SIGNUP_CONFIRMATION, await requestOptions).then(response => response.json())
  })
  console.log("responc login=>", responce)
  yield put({ type: "SIGNUP_CONFIRMATION_SUCCESS", payload: responce })
  if (responce.type === "login") {
    yield put({
      type: "GET_USER_DETAILS_SUCESS",
      payload: { details: responce.data.customer.details, token: responce.data.token },
    })
    yield put({ type: "LOGIN", payload: true })
    setUserDetail("userDetail", {
      details: responce.data.customer.details,
      token: responce.data.token,
    })
  }
  /*set respunce to store*/
  if (responce.status === "no" || !responce.status) {
    AlertHelper.show("error", "Error", responce.message)
    /* dispatch action to aware the store*/
    yield put({ type: "API_ERROR", payload: responce })
  } else if (responce.message === "success") {
    yield put({ type: "REQUEST_ID", payload: responce.data.RequestId })
    /* dispatch action to aware the store*/
  }
}

//2 watcher saga
export function* signUpConfirmationWatcher() {
  yield takeLatest(SIGNUP_CONFIRMATION, signUpConfirmationWorker)
}
export function* ResendSmsWorker(action) {
  const { phoneNumber, country, reqID } = action.payload
  let countryPhone = `${country.replace(/[^\w\s]/gi, "")}${phoneNumber}`
  const requestOptions = dataAppender([{ MobileNumber: countryPhone }, { RequestId: reqID }])
  const responce = yield call(async () => {
    console.log("request", await requestOptions)

    return fetch(APIS.RESENDCODE_POST, await requestOptions).then(response => response.json())
  })
  console.log("resend sms", responce)

  yield put({ type: "RESEND_SMS_SUCCESS", payload: responce.data })

  /*set respunce to store*/
  if (responce.status === "no") {
    /* dispatch action to aware the store*/
    yield put({ type: "API_ERROR", payload: responce })
  } else {
    /* dispatch action to aware the store*/
  }
}
export function* ResendSmsWatcher() {
  yield takeLatest(RESEND_SMS, ResendSmsWorker)
}

export function* RegisterUserWorker(action) {
  const {
    firstName,
    lastName,
    email,
    gender,
    dob,
    isEnabledPush,
    isEnabledBeacon,
    reqID,
    phoneNumber,
    country,
    photo,
  } = action.payload

  // let requestId=reqID.replace(/"/g,"");
  var requestId = parseInt(reqID)
  console.log("requestId", requestId, "persoma;", action.payload)
  const requestOptions = dataAppender([
    { MobileNumber: phoneNumber },
    { RequestId: requestId },
    { Email: email },
    { CountryCode: country.replace(/[^\w\s]/gi, "") },
    { FirstName: firstName },
    { LastName: lastName },
    { Gender: gender ? 2 : 1 },
    { Dob: dob },
    { photo: photo ? photo.uri : "" },
    { PushNotification: isEnabledPush ? 1 : 0 },
    { BeaconNotification: isEnabledBeacon ? 1 : 0 },
  ])

  const responce = yield call(async () => {
    return fetch(APIS.REGISTER_USER, await requestOptions).then(response => response.json())
  })
  console.log("register=>0", responce)

  /*set respunce to store*/
  if (responce.status === "no") {
    /* dispatch action to aware the store*/
    yield put({ type: "API_ERROR", payload: responce })
  } else if (responce.message === "success") {
    yield put({
      type: "GET_USER_DETAILS_SUCESS",
      payload: { details: responce.data.details, token: responce.data.token },
    })
    yield put({ type: "REGISTER_SUCCESS", payload: true })
    AlertHelper.show("success", "Success", "user Register successfully")
    setUserDetail("userDetail", { details: responce.data.details, token: responce.data.token })
    /* dispatch action to aware the store*/
  }
}
export function* RegisterUserWatcher() {
  yield takeLatest(REGISTER_USER, RegisterUserWorker)
}

export function* getUserDetailsWorker() {
  try {
    //console.log("worker >>>")
    const userDetails = JSON.parse(yield call(getLoyaltyId))
    const responce = yield call(
      axios.get,
      `${APIS.GET_CUSTOMER_DETAILS}?token=${userDetails.token}&organization_id=${ORGANIZATION_ID}&channel_id=${CHANNEL_ID}&LoyaltyId=${userDetails.details.LoyaltyId}`,
    )
    //console.log("GET_USER_DETAILS_SUCESS >> ", responce)

    yield put({
      type: "GET_USER_DETAILS_SUCESS",
      payload: responce.data.data,
    })
  } catch (error) {
    yield put({
      type: "GET_USER_DETAILS_FAILED",
      payload: error,
    })
  }
}
export function* getUserDetailsWatcher() {
  yield takeLatest(GET_USER_DETAILS, getUserDetailsWorker)
}
export function* EditUserWorker(action) {
  const { firstName, lastName, email, gender, dob, photo } = action.payload
  const userDetails = JSON.parse(yield call(getLoyaltyId))
  //console.log("userDetails.token", userDetails)

  const requestOptions = yield dataAppender([
    { Email: email },
    { FirstName: firstName },
    { LastName: lastName },
    { Gender: gender ? 2 : 1 },
    { Birthday: dob },
    { LoyaltyId: userDetails.details.LoyaltyId },
    { token: userDetails.token },
    { Photo: photo ? photo.uri : "" },
  ])
  console.log("requestOptions", requestOptions)

  const responce = yield call(async () => {
    return fetch(APIS.EDIT_ACCOUNT, requestOptions).then(response => response.json())
  })
  console.log("redponc edit", responce)

  /*set respunce to store*/
  if (responce.status === "no") {
    /* dispatch action to aware the store*/
    yield put({ type: "API_ERROR", payload: responce })
  } else if (responce.message === "success") {
    yield put({ type: "GET_USER_DETAILS_SUCESS", payload: responce.data })
    setUserDetail("userDetail", { details: responce.data.details, token: userDetails.token })
    /* dispatch action to aware the store*/
  }
}
export function* EditUserWatcher() {
  yield takeLatest(EDIT_CUSTOMER_DETAIL, EditUserWorker)
}
