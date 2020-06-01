import { call, put, takeLatest } from "redux-saga/effects"
import axios from "axios"
import {
  ADD_ADDRESS,
  EDIT_ADDRESS,
  DELETE_ADDRESS,
  GET_ADDRESS,
  GET_ADDRESS_TYPE,
  GET_CITIES_PROVINCES,
  GET_CITIES_PROVINCES_SUCCESS,
} from "../actionTypes"
import { APIS, ORGANIZATION_ID, CHANNEL_ID, API_STATUS_OK } from "../../api/ApiList"
import { dataAppender } from "../../api/RequestMaker"
import { getLoyaltyId, getToken } from "../../components/utils/CartSetter"

export function* AddAddressWorker(action) {
  const { AddressType, state, name, apartNo, addressLine, company,geoCoored } = action.payload
  const userDetails = JSON.parse(yield call(getLoyaltyId))
console.log("action.payload",action.payload);

  const requestOptions = yield dataAppender([
    { LoyaltyId: userDetails.details.LoyaltyId },
    { AddressType: Number(AddressType) },
    { Name: name },
    { IsDefault: 1 },
    { AptNumber: apartNo },
    { Line1: addressLine },
    { Line2: addressLine },
    { PhoneCode: userDetails.details.FullMobile.slice(0, 3) },
    { Phone: userDetails.details.FullMobile.slice(3, 10) },
    { CityId: 2139 },
    { State: state },
    { Company: company },
    { token: userDetails.token },
    {XLocation:geoCoored.latitude},
    {YLocation:geoCoored.longitude}
  ])
  /* console.log("response address", action)
  return */

  const responce = yield call(async () => {
    return fetch(APIS.ADD_DELEIVERY_ADDRESS, requestOptions).then(response => response.json())
  })
  console.log("response address", responce)

  yield put({ type: "ADD_ADDRESS_SUCCESS", payload: { responce, action } })
  /*set respunce to store*/
  if (responce.status === "no") {
    /* dispatch action to aware the store*/
    yield put({ type: "API_ERROR", payload: responce })
  } else {
    /* dispatch action to aware the store*/
  }
}
export function* addAddressWatcher() {
  yield takeLatest(ADD_ADDRESS, AddAddressWorker)
}
export function* editAddressWorker(action) {
  const { AddressType, state, name, apartNo, addressLine, company,addressID,geoCoored } = action.payload
  const userDetails = JSON.parse(yield call(getLoyaltyId))
  console.log("action.payload edit",action.payload);
  const requestOptions = yield dataAppender([
    {ID:addressID},
    { LoyaltyId: userDetails.details.LoyaltyId },
    { AddressType: Number(AddressType) },
    { Name: name },
    { IsDefault: 1 },
    { AptNumber: apartNo },
    { Line1: addressLine },
    { Line2: addressLine },
    { PhoneCode: userDetails.details.FullMobile.slice(0, 3) },
    { Phone: userDetails.details.FullMobile.slice(3, 10) },
    { CityId: 2139 },
    { Company: company },
    { token: userDetails.token },
    {XLocation:geoCoored.latitude},
    {YLocation:geoCoored.longitude}
  ])
  const responce = yield call(async () => {
    return fetch(APIS.EDIT_DELIVERY_ADDRESS, await requestOptions).then(response => response.json())
  })
  console.log("responce edit address",responce);
  
  /*set respunce to store*/
  if (responce.status === "no") {
    /* dispatch action to aware the store*/
    yield put({ type: "API_ERROR", payload: responce })
  } else {
    /* dispatch action to aware the store*/
  }
}
export function* editAddressWatcher() {
  yield takeLatest(EDIT_ADDRESS, editAddressWorker)
}
export function* deleteAddressWorker() {
  const requestOptions = dataAppender([{ LoyaltyId: "9135" }, { ID: "1" }])
  const responce = yield call(async () => {
    return fetch(APIS.DELETE_DELIVERY_ADDRESS, await requestOptions).then(response =>
      response.json(),
    )
  })
  /*set respunce to store*/
  if (responce.status === "no") {
    /* dispatch action to aware the store*/
    yield put({ type: "API_ERROR", payload: responce })
  } else {
    /* dispatch action to aware the store*/
  }
}
export function* deleteAddressWatcher() {
  yield takeLatest(DELETE_ADDRESS, deleteAddressWorker)
}
export function* getAddressWorker() {
  const userDetails = JSON.parse(yield call(getLoyaltyId))

  // console.log(
  //   "get address worker",
  //   `${APIS.GET_ADDRESSES}?token=${userDetails.token}&organization_id=${ORGANIZATION_ID}&channel_id=${CHANNEL_ID}&LoyaltyId=${userDetails.details.LoyaltyId}`,
  // )
  // console.log("user=>",userDetails);
  try {
    const responce = yield call(
      axios.get,
      `${APIS.GET_ADDRESSES}?token=${userDetails.token}&organization_id=${ORGANIZATION_ID}&channel_id=${CHANNEL_ID}&LoyaltyId=${userDetails.details.LoyaltyId}`,
    )
     console.log("responce from address", responce)
    if (responce.status === API_STATUS_OK) {
      yield put({ type: "GET_ADDRESS_SUCCESS", payload: responce.data.data })
    }
  } catch (error) {
    console.log("error", error)
    yield put({ type: "API_ERROR", payload: error })
  }
}
export function* getAddressWatcher() {
  yield takeLatest(GET_ADDRESS, getAddressWorker)
}
export function* getAddressTypeWorker() {
  const userDetails = JSON.parse(yield call(getLoyaltyId))
  try {
    const responce = yield call(
      axios.get,
      `${APIS.GET_ADDRESS_TYPES}?token=${userDetails.token}&organization_id=${ORGANIZATION_ID}&channel_id=${CHANNEL_ID}&LoyaltyId=${userDetails.details.LoyaltyId}`,
    )
    // console.log("-->>", responce)
    yield put({ type: "GET_ADDRESS_TYPE_SUCCESS", payload: responce.data.data })
  } catch (error) {
    //console.log("error", error)
    yield put({ type: "API_ERROR", payload: error })
  }
}
export function* getAddressTypeWatcher() {
  yield takeLatest(GET_ADDRESS_TYPE, getAddressTypeWorker)
}
export function* getCitiesProvincesWorker() {
  const userDetails = JSON.parse(yield call(getLoyaltyId))
  try {
    const responce = yield call(
      axios.get,
      `${APIS.GET_PROVINCES_CITIES}?token=${userDetails.token}&organization_id=${ORGANIZATION_ID}&channel_id=${CHANNEL_ID}&LoyaltyId=${userDetails.details.LoyaltyId}`,
    )
    // console.log("city pr", responce)
    yield put({ type: "GET_CITIES_PROVINCES_SUCCESS", payload: responce.data.data })
  } catch (error) {
    console.log("error", error)
    yield put({ type: "API_ERROR", payload: error })
  }
}
export function* getCitiesProvincesWatcher() {
  yield takeLatest(GET_CITIES_PROVINCES, getCitiesProvincesWorker)
}
