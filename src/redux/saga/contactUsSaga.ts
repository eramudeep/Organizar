import { call, put, takeLatest } from "redux-saga/effects"
import axios from "axios"
import { CONTACT_US, GET_CONTACT_US } from "../actionTypes"
import { APIS, ORGANIZATION_ID, CHANNEL_ID } from "../../api/ApiList"
import { dataAppender } from "../../api/RequestMaker"
import {  getLoyaltyId } from "../../components/utils/CartSetter"
export function* contactUsWorker(action) {
  try {
    const userDetails = JSON.parse(yield call(getLoyaltyId))
    
    const { message, subject } = action.payload
    const requestOptions = dataAppender([
      { LoyaltyId: userDetails.details.LoyaltyId },
      { Email: userDetails.details.Email },
      { FirstName: userDetails.details.FirstName },
      { LastName: userDetails.details.LastName }, 
      { Mobile: userDetails.details.FullMobile },
      { Subject: subject },
      { Message: message },
      { CopyEmail: "0" },
      {token:userDetails.token}
    ])

    const responce = yield call(async () => {
      
      return fetch(APIS.CONTACT_US, await requestOptions).then(response => response.json())
    })
console.log("contact us",responce);

    if (responce.status === "no") {
      yield put({ type: "CONTACT_US_FAILED", payload: responce })
    } else {
      yield put({ type: " CONTACT_US_SUCCESS ", payload: responce })
    }
  } catch (error) {
    yield put({ type: "CONTACT_US_FAILED", payload: error })
  }
}

export function* contactUsWatcher() {
  yield takeLatest(CONTACT_US, contactUsWorker)
} 

export function* getContactUsWorker() {
  try {
    const userDetails = JSON.parse(yield call(getLoyaltyId))
    const responce = yield call(
      axios.get,
      `${APIS.GET_CONTACT_INFO}/?token=${userDetails.token}&organization_id=${ORGANIZATION_ID}&channel_id=${CHANNEL_ID}&LoyaltyId=${userDetails.details.LoyaltyId}`,
    )
    console.log("get contact us",responce);
    
    yield put({ type: "GET_CONTACT_US_SUCCESS", payload: responce.data.data })
  } catch (error) {
    console.log("error", error)
    yield put({ type: "API_ERROR", payload: error })
  }
}
export function* getContactUsWatcher() {
  yield takeLatest(GET_CONTACT_US, getContactUsWorker)
}
