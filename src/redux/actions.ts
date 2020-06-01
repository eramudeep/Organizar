import {
  GET_TOKEN,
  GET_MENU_ITEMS,
  ADD_TO_FAV,
  LOAD_CATEGORIES,
  LOAD_MENU_ITEMS_BY_CATEGORY,
  SET_ITEM_TO_CUSTOMIZE,
  ADD_ITEM_TO_CART,
  SET_LOADED_MENU_ITEMS,
  FETCH_CATEGORIES,
  FETCH_MENU_ITEMS,
  LOGIN,
  SET_PHONE_NUMBER_COUNTRY_CODE,
  SIGNUP_CONFIRMATION,
  LOAD_ORDERS,
  GET_NOTIFICATIONS,
  RESEND_SMS,
  REGISTER_USER,
  ADD_ADDRESS,
  EDIT_ADDRESS,
  DELETE_ADDRESS,
  RESET_ORDER_PLACE,
  GET_ADDRESS,
  GET_ADDRESS_TYPE,
  GET_CITIES_PROVINCES,
  GET_BRANCHES,
  SET_ITEM_FAV,
  GET_ITEM_FAV,
  CONTACT_US,
  LOAD_FCM,
  GET_USER_DETAILS,
  SEND_ORDER,
  CANCEL_ORDER,
  GET_CONTACT_US,
  SETTING_HOME_SCREEN,
  SET_USER_DATA,
  GET_USER_DETAILS_SUCESS,
  LOGOUT_USER,
  IS_REDIRETED_BEFORE,
  GET_CUSTOMER_DETAIL,
  EDIT_CUSTOMER_DETAIL,
  LOAD_FAV_FROM_ASYNC,
  GET_CART_ITEM_FROM_ASYNCE,
  GET_CART_COUNT_FROM_ASYNC,
  GET_FAV_ITEMS_DETAIL,
  GET_HOME_SCREEN_DATA,
  DELETE_ITEM_FROM_CART_ASYNC,
  EMPTY_CART,
  GET_DELIVERY_DATA,
  DINEIN_SCAN,
  GET_DINEIN_SCAN,
  DE_FAV_ITEM,
  INCREASE_ITEM_TO_CART,
  ORDER_DETAILS,
  FAV_ITEM_CLEAR,
  GET_DELIVERY_DATA_STEPS,
  SET_SELECTED_TAB_INDEX,
  OTP_SUCCESS,
} from "./actionTypes"

export const getMenuItems = () => ({
  type: GET_MENU_ITEMS,
})
export const addToFav = (itemToFav: any) => ({
  type: ADD_TO_FAV,
  payload: itemToFav,
})

export const loadCategories = (items: any) => ({
  type: LOAD_CATEGORIES,
  payload: items,
})

export const loadMenuItemsByCategory = (items: any) => ({
  type: LOAD_MENU_ITEMS_BY_CATEGORY,
  payload: items,
})

export const setItemToCustomize = (item: any) => ({
  type: SET_ITEM_TO_CUSTOMIZE,
  payload: item,
})

export const setLoadedMenuItems = (items: any) => ({
  type: SET_LOADED_MENU_ITEMS,
  payload: items,
})

export const addItemToCart = (item: any) => ({
  type: ADD_ITEM_TO_CART,
  payload: item,
})

export const fetchCategories = () => ({
  type: FETCH_CATEGORIES,
})

export const fetchMenuItems = () => ({
  type: FETCH_MENU_ITEMS,
})

/*to login and logout user from app state*/
export const isLoggedIn = (flag: boolean) => ({
  type: LOGIN,
  payload: flag,
})

export const setPhoneNumberCountryCode = (details: any = {}) => ({
  type: SET_PHONE_NUMBER_COUNTRY_CODE,
  payload: details,
})

export const signupConfirmation = (details: any = {}) => ({
  type: SIGNUP_CONFIRMATION,
  payload: details,
})
export const registerUser = (details: any = {}) => ({
  type: REGISTER_USER,
  payload: details,
})
export const resendSms = (details: any = {}) => ({
  type: RESEND_SMS,
  payload: details,
})
export const loadOrders = (details: any = {}) => ({
  type: LOAD_ORDERS,
})
export const getNotifications = () => ({
  type: GET_NOTIFICATIONS,
})
export const addAddress = (details: any = {}) => ({
  type: ADD_ADDRESS,
  payload: details,
})
export const editAddress = (details: any = {}) => ({
  type: EDIT_ADDRESS,
  payload: details,
})
export const deleteAddress = (details: any = {}) => ({
  type: DELETE_ADDRESS,
})
export const getAddress = () => ({
  type: GET_ADDRESS,
})
export const getAddressType = () => ({
  type: GET_ADDRESS_TYPE,
})
export const getCitiesProvinces = () => ({
  type: GET_CITIES_PROVINCES,
})
export const getBranches = (details: any = {}) => ({
  type: GET_BRANCHES,
  payload: details,
})

export const setItemFav = (details: any = {}) => ({
  type: SET_ITEM_FAV,
  payload: details,
})

export const getItemFav = () => ({
  type: GET_ITEM_FAV,
})
export const getFcm = () => ({
  type: LOAD_FCM,
})

export const contactUs = (details: any = {}) => ({
  type: CONTACT_US,
  payload: details,
})

export const getUserDetails = () => ({
  type: GET_USER_DETAILS,
})
export const sendOrder = (details: any = {}) => ({
  type: SEND_ORDER,
  payload: details,
})
export const cancelOrder = (details: any = {}) => ({
  type: CANCEL_ORDER,
  payload: details,
})
export const getContactUs = () => ({
  type: GET_CONTACT_US,
})
export const settingHomescreen = () => ({
  type: SETTING_HOME_SCREEN,
})
export const setUserData = (detail: any = {}) => ({
  type: GET_USER_DETAILS_SUCESS,
  payload: detail,
})
export const logoutUser = () => ({
  type: LOGOUT_USER,
})
export const isRedirected = () => ({
  type: IS_REDIRETED_BEFORE,
})
export const getCustomerDetail = () => ({
  type: GET_CUSTOMER_DETAIL,
})
export const editCustomerDetail = (details: any = {}) => ({
  type: EDIT_CUSTOMER_DETAIL,
  payload: details,
})

export const loadFavFromAsync = (favItems: any = {}) => ({
  type: LOAD_FAV_FROM_ASYNC,
  payload: favItems,
})
export const loadFavItemDetailAsync = (favItems: any = {}) => ({
  type: GET_FAV_ITEMS_DETAIL,
  payload: favItems,
})

export const loadCartItemsFromAsync = (cartItems: any = {}) => ({
  type: GET_CART_ITEM_FROM_ASYNCE,
  payload: cartItems,
})
export const loadCartCountFromAsync = (cartCount: number) => ({
  type: GET_CART_COUNT_FROM_ASYNC,
  payload: cartCount,
})
export const getHomeScreenData = () => ({
  type: GET_HOME_SCREEN_DATA,
})

export const deleteItemFromCart = (itemId: any) => ({
  type: DELETE_ITEM_FROM_CART_ASYNC,
  payload: itemId,
})

export const emptyCart = () => ({
  type: EMPTY_CART,
})

export const getdeliveryData = () => ({
  type: GET_DELIVERY_DATA,
})
export const dineItScan = (details: any) => ({
  type: DINEIN_SCAN,
  payload: details,
})
export const getdineinScanData = () => ({
  type: GET_DINEIN_SCAN,
})

export const deFavItem = (itemId: any) => ({
  type: DE_FAV_ITEM,
  payload: itemId,
})

export const increaseItemsToCart = (items: any) => ({
  type: INCREASE_ITEM_TO_CART,
  payload: items,
})
export const getToken = (items: any) => ({
  type: GET_TOKEN,
})
export const orderDetails = (items: any) => ({
  type: ORDER_DETAILS,
  payload: items,
})

export const toggleAddToItem = (addOn: any) => ({
  type: ORDER_DETAILS,
  payload: addOn,
})
export const resetOrderPlace = () => ({
  type: RESET_ORDER_PLACE,
})
export const resetFav = () => ({
  type: FAV_ITEM_CLEAR,
})
export const deleveryScreenDataSteps = () => ({
  type: GET_DELIVERY_DATA_STEPS,
})

export const setSelectedTab = (tabIndex: number) => ({
  type: SET_SELECTED_TAB_INDEX,
  payload: tabIndex,
})
export const otpStatus = (data:boolean) => ({
  type: OTP_SUCCESS,
  payload: data,
})

//export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } })
