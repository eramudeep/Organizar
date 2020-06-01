import { takeLatest, call, put } from "redux-saga/effects"
import axios from "axios"

import { getToken, getLoyaltyId } from "../../components/utils/CartSetter"
import {
  FETCH_CATEGORIES,
  FETCH_MENU_ITEMS,
  ADD_TO_FAV,
  GET_ITEM_FAV,
  DE_FAV_ITEM,
} from "../actionTypes"

import { APIS, ORGANIZATION_ID, CHANNEL_ID, LOYALTY_ID, API_STATUS_OK } from "../../api/ApiList"
import { dataAppender } from "../../api/RequestMaker"
//1 worker saga

export function* fetchCategories() {
  try {
    const token = yield call(getToken)
    const responce = yield call(
      axios.get,
      `${APIS.CATEGORIES_GET}/?token=${token}&organization_id=${ORGANIZATION_ID}&channel_id=${CHANNEL_ID}`,
    )

    yield put({ type: "LOAD_CATEGORIES", payload: responce.data.data })
    yield put({ type: "CATEGORIED_LOADED_SUCCESS", payload: true })
  } catch (error) {
    console.log("CATEGORIES_GET API EROR ==>", error)
  }
}
//2 watcher saga
export function* loadCategoriesWatcher() {
  yield takeLatest(FETCH_CATEGORIES, fetchCategories)
}

export function* fetchMenuItems() {
  try {
    const token = yield call(getToken)
    const responce = yield call(
      axios.get,
      `${APIS.GET_MENU_ITEMS}/?token=${token}&organization_id=${ORGANIZATION_ID}&channel_id=${CHANNEL_ID}`,
    )
    if (responce.status == API_STATUS_OK) {
      yield put({ type: "LOAD_MENU_ITEMS_BY_CATEGORY", payload: responce.data.data })
    } else {
      //error action will be  here !!
    }

    //console.log("from Menu Saga", responce.data.data)
  } catch (error) {
    console.log("error", error)
  }
}

//2 watcher saga
export function* loadMenuItemsWatcher() {
  yield takeLatest(FETCH_MENU_ITEMS, fetchMenuItems)
}

export function* addToFavWorker(action) {
  try {
    const userDetails = JSON.parse(yield call(getLoyaltyId))
    console.log("action on add >>", action.payload)

    const requestOptions = yield dataAppender([
      { item_id: action.payload.item.ID },
      { item_data: JSON.stringify({ modifiers: JSON.stringify(action.payload.item.addOnItems) }) },
      { token: userDetails.token },
      { LoyaltyId: userDetails.details.LoyaltyId },
    ])
    action.payload.item_data = { modifiers: JSON.stringify(action.payload.item.addOnItems) }

    console.log("requestOptions", requestOptions)
    const responce = yield call(async () => {
      return fetch(APIS.SAVE_FAVORITE_ITEM, requestOptions).then(response => response.json())
    })
    //console.log("responcs add to fav", responce)

    if (responce.success) {
      yield put({ type: "SET_ITEM_FAV_SUCESS", payload: action.payload })
    } else {
      yield put({ type: "SET_ITEM_FAV_FAILED", payload: responce })
    }
  } catch (error) {
    yield put({ type: "SET_ITEM_FAV_FAILED", payload: error })
  }
}
export function* addToFavWatcher() {
  yield takeLatest(ADD_TO_FAV, addToFavWorker)
}

export function* getFavWorker() {
  try {
    const userDetails = JSON.parse(yield call(getLoyaltyId))

    const responce = yield call(
      axios.get,
      `${APIS.GET_FAVORITE_ITEM}?token=${userDetails.token}&organization_id=${ORGANIZATION_ID}&channel_id=${CHANNEL_ID}&LoyaltyId=${userDetails.details.LoyaltyId}`,
    )
    console.log("fav respons", responce)

    if (responce.status === API_STATUS_OK) {
      yield put({
        type: "GET_ITEM_FAV_SUCESS",
        payload: responce.data,
      })
    }
  } catch (error) {
    console.log("GET_ITEM_FAV_FAILED", error)
    yield put({
      type: "GET_ITEM_FAV_FAILED",
      payload: error,
    })
  }
}

export function* getFavWatcher() {
  yield takeLatest(GET_ITEM_FAV, getFavWorker)
}

export function* deFavItemWorker(action) {
  // console.log("action.payload ", action.payload)

  try {
    const userDetails = JSON.parse(yield call(getLoyaltyId))
    const requestOptions = dataAppender([
      { token: userDetails.token },
      { LoyaltyId: userDetails.details.LoyaltyId },
      { favorites_item_id: action.payload.id },
    ])
    const responce = yield call(async () => {
      return fetch(APIS.DELETE_FAVORITE_ITEM, await requestOptions).then(response =>
        response.json(),
      )
    })
    //   console.log("delete fav responce", responce)

    if (responce.success) {
      yield put({
        type: "DE_FAV_ITEM_SUCCESS",
        payload: action.payload.item_id,
      })
    }
  } catch (error) {
    console.log("error", error)
  }
}
export function* deFavItemWatcher() {
  yield takeLatest(DE_FAV_ITEM, deFavItemWorker)
}
