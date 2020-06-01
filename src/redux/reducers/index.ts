import { combineReducers } from "redux"

import menu from "./menu"
import cart from "./cart"
import auth from "./auth"
import error from "./error"
import orders from "./orders"
import requestId from "./requestId"
import homeScreen from "./homeScreen"
import customerDetails from "./customerDetails"
import branches from "./branches"
import addresses from "./addresses"
import settings from "./settings"
import notifications from "./notifications"
export default combineReducers({
  menu,
  auth,
  error,
  orders,
  requestId,
  homeScreen,
  customerDetails,
  branches,
  cart,
  addresses,
  settings,
  notifications
})
