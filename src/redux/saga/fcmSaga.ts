import { call,put, takeLatest } from "redux-saga/effects"
import { LOAD_FCM } from "../actionTypes"
import { APIS,   } from "../../api/ApiList"
import { dataAppender } from "../../api/RequestMaker"
import { getLoyaltyId } from "../../components/utils/CartSetter"

export function* loadFcmWorker() {
  const userDetails = JSON.parse(yield call(getLoyaltyId))
    try {
        const requestOptions =  dataAppender([
            {LoyaltyId:userDetails.details.LoyaltyId},
            {PushId: "984951954949816518974951949asdasd59as4d98a4ds"},
            {DeviceId:"8a419as4d9a1s98d7"},
            {AllowPush:"1"},
        ])
        /* work pending to get the otp message here*/
        const responce = yield call(
          async () => {
            return fetch(APIS.SEND_FIREBASE_TOKEN,await requestOptions).then(response => response.json())
          } /*axios.post, APIS.SIGNUP_POST, requestOptions*/,
        )
            yield put({type:"FCM_SUCCESS",payload:responce})
        console.log("responce from FCM ==>", responce)
      } catch (error) {
        console.log("Error while fetching FCM", error)
      }
}
export function* loadFcmWatcher() {
  yield takeLatest(LOAD_FCM, loadFcmWorker)
}
