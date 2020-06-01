import {
  GET_HOME_SCREEN_DATA_SUCCESS,
  GET_DELIVERY_DATA_SUCCESS,
  GET_DELIVERY_DATA_STEPS_SUCCESS,
  SET_SELECTED_TAB_INDEX,
} from "../actionTypes"

const initialState = {
  homeScreenData: [],
  deliveryScreenData: [],
  deliveryScreenDataSteps: [],
  Banners: [],
  ExtraCharge: {},
  MinimumOrderAmount: 0,
  SideMenu: [],
  Currency: "LBP",
  selectedTabIndex: 0,
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_SELECTED_TAB_INDEX:
      return {
        ...state,
        selectedTabIndex: action.payload,
      }
    case GET_DELIVERY_DATA_STEPS_SUCCESS:
      return {
        ...state,
        deliveryScreenDataSteps: action.payload.data.SpecialInstructions,
      }
    case GET_HOME_SCREEN_DATA_SUCCESS:
      return {
        ...state,
        Banners: action.payload.data.Banners,
        ExtraCharge: action.payload.data.ExtraCharge,
        MinimumOrderAmount: action.payload.data.MinimumOrderAmount,
        SideMenu: action.payload.data.SideMenu,
        Currency: action.payload.data.Currency,
      }
    case GET_DELIVERY_DATA_SUCCESS:
      return {
        ...state,
        deliveryScreenData: [...action.payload],
      }
    default:
      return state
  }
}
