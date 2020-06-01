import {
  API_ERROR,
  SET_ITEM_FAV_FAILED,
  CONTACT_US_FAILED,
  GET_USER_DETAILS_FAILED,
} from "./../actionTypes"

const initialState = {
  hasError: {},
  favItemError: {},
  contactUsError: {},
  userDetailsFetchError: {},
  isDataLoaded: false,
}
export default function(state = initialState, action) {
  switch (action.type) {
    case API_ERROR:
      return {
        ...state,
        hasError: { ...action.payload },
      }
    case SET_ITEM_FAV_FAILED:
      return {
        ...state,
        favItemError: { ...action.payload },
      }
    case CONTACT_US_FAILED:
      return {
        ...state,
        fcontactUsError: { ...action.payload },
      }
    case GET_USER_DETAILS_FAILED:
      return {
        ...state,
        userDetailsFetchError: { ...action.payload },
      }

    default:
      return { ...state }
  }
}
