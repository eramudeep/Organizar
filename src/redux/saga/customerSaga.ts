import { call, put, takeLatest } from "redux-saga/effects"
import axios from "axios"
import { GET_CUSTOMER_DETAIL } from "../actionTypes"
import { APIS, ORGANIZATION_ID, CHANNEL_ID } from "../../api/ApiList"
import { getToken, getLoyaltyId } from "../../components/utils/CartSetter"

export function* getCustomerWorker() {
  try {
    const userDetails = JSON.parse(yield call(getLoyaltyId))
    const responce = yield call(
      axios.get,
      `${APIS.GET_CUSTOMER_DETAILS}/?token=${userDetails.token}&organization_id=${ORGANIZATION_ID}&channel_id=${CHANNEL_ID}&LoyaltyId=${userDetails.details.LoyaltyId}`,
    )
    //yield put({ type: "GET_CUSTOMER_DETAIL_SUCCESS", payload: responce.data.details })
  } catch (error) {
    console.log("GET_CUSTOMER_DETAILS Error ==>", error)
    yield put({ type: "API_ERROR", payload: error })
  }
}
export function* getCustomerWatcher() {
  yield takeLatest(GET_CUSTOMER_DETAIL, getCustomerWorker)
}
