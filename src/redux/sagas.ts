import { takeEvery, call, put, all } from "redux-saga/effects"
import axios from "axios"

import { LOAD_CATEGORIES } from "./actionTypes"
import { API_URL } from "../components/utils/appConstants"
import {
  genrateTokeWatcher,
  getOtpWatcher,
  signUpConfirmationWatcher,
  ResendSmsWatcher,
  RegisterUserWatcher,
  getUserDetailsWatcher,
  EditUserWatcher,
} from "./saga/authSaga"
import {
  loadCategoriesWatcher,
  loadMenuItemsWatcher,
  addToFavWatcher,
  getFavWatcher,
  deFavItemWatcher,
} from "./saga/menuSaga"
import { loadOrderWatcher, sendOrderWatcher, cancelOrderWatcher } from "./saga/orderSaga"
import { TOKEN } from "../api/ApiList"
import { loadNotificationsWatcher } from "./saga/notificationSaga"
import { contactUsWatcher, getContactUsWatcher } from "./saga/contactUsSaga"
import {
  addAddressWatcher,
  editAddressWatcher,
  deleteAddressWatcher,
  getAddressWatcher,
  getAddressTypeWatcher,
  getCitiesProvincesWatcher,
} from "./saga/addressSaga"
import { getBranchesWatcher } from "./saga/branchesSaga"
import { loadFcmWatcher } from "./saga/fcmSaga"
import { getCustomerWatcher } from "./saga/customerSaga"
import {
  homeScreenDataWatcher,
  deliveryScreenDataWatcher,
  deliveryScreenDataStepsWatcher,
} from "./saga/settingsSaga"
import { dineInScanWatcher, getDineinScanWatcher } from "./saga/dineinSaga"
//1 worker saga
export function* loadMenuQWorker() {
  try {
    const responce = yield call(
      axios.get,
      `${API_URL}menu/GetCategories?token=${TOKEN}&organization_id=23&channel_id=1&LoyaltyId=9135`,
    )
    //dispatching another action to set data to store
    yield put({ type: "SET_LOADED_MENU_ITEMS", payload: responce.data.data })
  } catch (error) {}
}
//2 watcher saga
export function* watchLoadMenu() {
  console.log("running from saga ")
  yield takeEvery(LOAD_CATEGORIES, loadMenuQWorker)
}

//3 root saga
//single entry point to start all sagas
export default function* rootSaga() {
  yield all([
    watchLoadMenu(),
    genrateTokeWatcher(),
    loadCategoriesWatcher(),
    loadMenuItemsWatcher(),
    getOtpWatcher(),
    signUpConfirmationWatcher(),
    loadOrderWatcher(),
    ResendSmsWatcher(),
    RegisterUserWatcher(),
    addAddressWatcher(),
    editAddressWatcher(),
    deleteAddressWatcher(),
    getAddressWatcher(),
    getAddressTypeWatcher(),
    getCitiesProvincesWatcher(),
    getBranchesWatcher(),
    addToFavWatcher(),
    getFavWatcher(),
    contactUsWatcher(),
    loadFcmWatcher(),
    getUserDetailsWatcher(),
    cancelOrderWatcher(),
    getContactUsWatcher(),
    sendOrderWatcher(),
    getCustomerWatcher(),
    EditUserWatcher(),
    loadNotificationsWatcher(),
    homeScreenDataWatcher(),
    deliveryScreenDataWatcher(),
    dineInScanWatcher(),
    getDineinScanWatcher(),
    deFavItemWatcher(),
    deliveryScreenDataStepsWatcher(),
  ])
}
