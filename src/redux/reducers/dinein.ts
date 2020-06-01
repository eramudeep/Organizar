import {  DINEIN_SCAN_SUCCESS } from "../actionTypes"

const initialState = {
  dineinScanData: [],

}

export default function(state = initialState, action) {
  switch (action.type) {
    case DINEIN_SCAN_SUCCESS:
      return {
        ...state,
        dineinScanData: [...action.payload],
      }
    default:
      return state
  }
}