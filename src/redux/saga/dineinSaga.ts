import { takeLatest, call, put, } from "redux-saga/effects"
import axios from "axios"

import {  getLoyaltyId } from "../../components/utils/CartSetter"
import {  DINEIN_SCAN, GET_DINEIN_SCAN, } from "../actionTypes"

import { APIS, ORGANIZATION_ID, CHANNEL_ID,} from "../../api/ApiList"
import { dataAppender } from "../../api/RequestMaker"

export function* dineInScanWorker(action) {
    const {QRCode}=action.payload
    try {
      const userDetails = JSON.parse(yield call(getLoyaltyId))
      const requestOptions = dataAppender([
        { QRCode: QRCode },
        { token: userDetails.token },
        { LoyaltyId: userDetails.details.LoyaltyId },
      ])
      const responce = yield call(async () => {
        return fetch(APIS.DINEIN_SCAN, await requestOptions).then(response => response.json())
      })
      console.log("responcs",responce);
      
      if (responce.success) {
        yield put({ type: "DINEIN_SCAN_SUCCESS", payload: responce.data })
      } else {
        yield put({ type: "SET_ITEM_FAV_FAILED", payload: responce })
      }
    } catch (error) {
      yield put({ type: "SET_ITEM_FAV_FAILED", payload: error })
    }
  }
  export function* dineInScanWatcher() {
    yield takeLatest(DINEIN_SCAN, dineInScanWorker)
  }
  export function* getDineinScanWorker() {
    try {
      const userDetails = JSON.parse(yield call(getLoyaltyId))
      const responce = yield call(
        axios.get,
        `${APIS.GET_DINEIN_SCAN}/?token=${userDetails.token}&organization_id=${ORGANIZATION_ID}&channel_id=${CHANNEL_ID}&LoyaltyId=${userDetails.details.LoyaltyId}`,
      )
  
      // yield put({ type: "GET_DINEIN_SCAN_SUCCESS", payload: responce.data.data })
    } catch (error) {
      console.log("error", error)
      yield put({ type: "API_ERROR", payload: error })
    }
  }
  export function* getDineinScanWatcher() {
    yield takeLatest(GET_DINEIN_SCAN, getDineinScanWorker)
  }