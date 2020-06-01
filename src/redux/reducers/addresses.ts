import {
  GET_ADDRESS_SUCCESS,
  ADD_ADDRESS_SUCCESS,
  GET_ADDRESS_TYPE_SUCCESS,
  GET_CITIES_PROVINCES_SUCCESS,
} from "../actionTypes"

const initialState = {
  address: [],
  newAddress: {},
  addressType: [],
  cityProvinces: [],
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ADDRESS_SUCCESS:
      return {
        ...state,
        address: [...action.payload],
      }
    case ADD_ADDRESS_SUCCESS:
      //console.log(">>>>", action.payload.action.payload.name)
      //action.payload.DeliveryAddressId
      return {
        ...state,
        newAddress: { ...action.payload },
        address: [
          ...state.address,
          {
            ID: action.payload.responce.DeliveryAddressId,
            Name: action.payload.action.payload.name,
          },
        ],
      }
    case GET_ADDRESS_TYPE_SUCCESS:
      return { ...state, addressType: [...action.payload] }
    case GET_CITIES_PROVINCES_SUCCESS:
      return { ...state, cityProvinces: [...action.payload] }
    default:
      return state
  }
}
