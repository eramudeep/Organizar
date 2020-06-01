import { call, put, takeLatest } from "redux-saga/effects"
import axios from "axios"
import { LOAD_ORDERS, SEND_ORDER, CANCEL_ORDER } from "../actionTypes"
import { APIS, ORGANIZATION_ID, CHANNEL_ID, API_STATUS_OK } from "../../api/ApiList"
import { dataAppender, orderItemsAppender } from "../../api/RequestMaker"
import { getLoyaltyId } from "../../components/utils/CartSetter"

export function* loadOrderWorker() {
  try {
    const userDetails = JSON.parse(yield call(getLoyaltyId))
    const responce = yield call(
      axios.get,
      `${APIS.GET_ORDER_COUNT}/?token=${userDetails.token}&organization_id=${ORGANIZATION_ID}&channel_id=${CHANNEL_ID}&LoyaltyId=${userDetails.details.LoyaltyId}`,
    )
console.log("responce order",responce.data.data);

    yield put({ type: "ORDERS_LOADED", payload: responce.data.data })
  } catch (error) {
    console.log("error", error)
    yield put({ type: "API_ERROR", payload: error })
  }
}
export function* loadOrderWatcher() {
  yield takeLatest(LOAD_ORDERS, loadOrderWorker)
}

export function* sendOrderWorker(action) {
  const { cartItems, orderDetails, selectedAddress, selectedPayment, totalAmount } = action.payload

var d = new Date,
    dformat = [d.getFullYear(),
               d.getMonth()+1,
               d.getDate()].join('-')+' '+
              [d.getHours(),
               d.getMinutes(),
               d.getSeconds()].join(':');
               console.log("orderDetails.date",dformat);
  const userDetails = JSON.parse(yield call(getLoyaltyId))
  const requestOptions = yield dataAppender([
    { LoyaltyId: userDetails.details.LoyaltyId },
    { OrderDate: dformat },
    { DepartmentName: selectedAddress.CompanyName },
    { DepartmentId: selectedAddress.ID },
    { CardNumber: 0 },
    { AddressId: selectedAddress.ID },
    { TotalPrice: totalAmount },
    { Instructions: orderDetails.instruction },
    { FirstName: userDetails.details.FirstName },
    { LastName: userDetails.details.LastName },
    { Mobile: selectedAddress.Phone },
    { Line1: selectedAddress.Line1 },
    { City: selectedAddress.CityName },
    { Province: selectedAddress.ProvinceName },
    { Apartment: selectedAddress.AptNumber },
    { AddressType: selectedAddress.TypeName },
    { PaymentType: selectedPayment },
    { Status: "pending" },
    { token: userDetails.token },
  ])
  const paymentParts = ["Settlement", "Currency", "Category", "PaymentTypeId"]

  let formdata = yield orderItemsAppender(requestOptions.body, cartItems, "Items")
  formdata = yield orderItemsAppender(
    formdata,
    [
      [
        {
          Settlement: action.payload.totalAmount,
          Currency: "LBP",
          Category: "ONLINE",
          PaymentTypeId: "224",
        },
      ],
    ],
    "paymentParts",
    paymentParts,
  )

  const finalRequestData = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  }
  //console.log(" userDetails ", action.payload)
  const responce = yield call(async () => {
    return fetch(APIS.PUT_ORDER, finalRequestData).then(response => response.json())
  })
  if (responce.status == API_STATUS_OK) {
    yield put({ type: "ORDER_SUCCESSFULY_PLACED", payload: responce })
  } else {
    yield put({ type: "ORDER_PLACE_FAILED", payload: false })
  }
}

export function* sendOrderWatcher() {
  yield takeLatest(SEND_ORDER, sendOrderWorker)
}

export function* cancelOrderWorker(action) {
  const userDetails = JSON.parse(yield call(getLoyaltyId))
  try {
    const requestOptions = dataAppender([
      { OrderId: "5734" },
      { LoyaltyId: userDetails.details.LoyaltyId },
    ])
    /* work pending to get the otp message here*/
    const responce = yield call(
      async () => {
        return fetch(APIS.CANCEL_ORDER, await requestOptions).then(response => response.json())
      } /*axios.post, APIS.SIGNUP_POST, requestOptions*/,
    )

    console.log("responce from cancelorder ==>", responce)
  } catch (error) {
    console.log("Error while fetching OTP", error)
  }
}
export function* cancelOrderWatcher() {
  yield takeLatest(CANCEL_ORDER, cancelOrderWorker)
}
