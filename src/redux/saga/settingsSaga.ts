import { call, put, takeLatest } from "redux-saga/effects"
import axios from "axios"
import { GET_HOME_SCREEN_DATA, GET_DELIVERY_DATA, GET_DELIVERY_DATA_STEPS } from "../actionTypes"
import { APIS, ORGANIZATION_ID, CHANNEL_ID } from "../../api/ApiList"
import { getLoyaltyId } from "../../components/utils/CartSetter"

export function* homeScreenDataWorker() {
  try {
    const userDetails = JSON.parse(yield call(getLoyaltyId))
    const responce = yield call(
      axios.get,
      `${APIS.GET_HOME_SCREEN_DATA}/?token=${userDetails.token}&organization_id=${ORGANIZATION_ID}&channel_id=${CHANNEL_ID}&LoyaltyId=${userDetails.details.LoyaltyId}`,
    )
    // console.log("homescreen", responce)

    yield put({ type: "GET_HOME_SCREEN_DATA_SUCCESS", payload: responce.data })
  } catch (error) {
    console.log("error", error)
    yield put({ type: "API_ERROR", payload: error })
  }
}
export function* homeScreenDataWatcher() {
  yield takeLatest(GET_HOME_SCREEN_DATA, homeScreenDataWorker)
}
export function* deliveryScreenDataWorker() {
  try {
    const userDetails = JSON.parse(yield call(getLoyaltyId))
    const responce = yield call(
      axios.get,
      `${APIS.GET_DELIVERY_SCREEN_DATA}/?token=${userDetails.token}&organization_id=${ORGANIZATION_ID}&channel_id=${CHANNEL_ID}&LoyaltyId=${userDetails.details.LoyaltyId}`,
    )

    yield put({ type: "GET_DELIVERY_DATA_SUCCESS", payload: responce.data })
  } catch (error) {
    console.log("error", error)
    yield put({ type: "API_ERROR", payload: error })
  }
}
export function* deliveryScreenDataWatcher() {
  yield takeLatest(GET_DELIVERY_DATA, deliveryScreenDataWorker)
}

export function* deliveryScreenDataStepsWorker() {
  try {
    const userDetails = JSON.parse(yield call(getLoyaltyId))
    const responce = yield call(
      axios.get,
      `${APIS.GET_DELIVERY_SCREEN_DATA_STEPS}/?token=${userDetails.token}&organization_id=${ORGANIZATION_ID}&channel_id=${CHANNEL_ID}&LoyaltyId=${userDetails.details.LoyaltyId}`,
    )
    //console.log("responce.data  GET_DELIVERY_SCREEN_DATA_STEPS >>", responce.data)

    yield put({ type: "GET_DELIVERY_DATA_STEPS_SUCCESS", payload: responce.data })
  } catch (error) {
    //  console.log("error", error)
    yield put({ type: "API_ERROR", payload: error })
  }
}
export function* deliveryScreenDataStepsWatcher() {
  yield takeLatest(GET_DELIVERY_DATA_STEPS, deliveryScreenDataStepsWorker)
}
