import { call, put, takeLatest } from "redux-saga/effects"
import axios from "axios"
import { GET_NOTIFICATIONS } from "../actionTypes"
import { APIS, ORGANIZATION_ID, CHANNEL_ID } from "../../api/ApiList"
import { getLoyaltyId } from "../../components/utils/CartSetter"

export function* loadNotifications() {
  try {
    const userDetails = JSON.parse(yield call(getLoyaltyId))
    // console.log("responce from noti===>", `${APIS.GET_ALL_NOTIFICATIONS}?token=${userDetails.token}&organization_id=${ORGANIZATION_ID}&channel_id=${CHANNEL_ID}&LoyaltyId=${userDetails.details.LoyaltyId}`)

    const responce = yield call(
      axios.get,
      `${APIS.GET_ALL_NOTIFICATIONS}?token=${userDetails.token}&organization_id=${ORGANIZATION_ID}&channel_id=${CHANNEL_ID}&LoyaltyId=${userDetails.details.LoyaltyId}`,
    )
    //console.log("responce from noti===>", responce)
    if (responce.status == 200) {
      yield put({ type: "GET_NOTIFICATIONS_SUCCESS", payload: responce.data.data })
    }
  } catch (error) {
    console.log("GET_ALL_NOTIFICATIONS error=>", error)
    yield put({ type: "API_ERROR", payload: error })
  }
}
export function* loadNotificationsWatcher() {
  yield takeLatest(GET_NOTIFICATIONS, loadNotifications)
}
