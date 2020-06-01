import { call, put, takeLatest } from "redux-saga/effects"
import axios from "axios"
import { GET_BRANCHES } from "../actionTypes"
import { APIS, ORGANIZATION_ID, CHANNEL_ID, } from "../../api/ApiList"
import { getToken, } from "../../components/utils/CartSetter"

export function* getBranchesWorker() {
  try {
    // const userDetails = JSON.parse(yield call(getLoyaltyId))
    const token= yield call(getToken)
    const responce = yield call(
      axios.get,
      `${APIS.GET_BRANCHES}?token=${token}&organization_id=${ORGANIZATION_ID}&channel_id=${CHANNEL_ID}`,
    )
    
    yield put({ type: "GET_BRANCHES_SUCCESS", payload: responce.data.data })
    
  } catch (error) {
    console.log("error", error)
    yield put({ type: "API_ERROR", payload: error })
  }
}
export function* getBranchesWatcher() {
  yield takeLatest(GET_BRANCHES, getBranchesWorker)
}
