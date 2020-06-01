import {  GET_BRANCHES_SUCCESS } from "../actionTypes"

const initialState = {
  allBranches: [],
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_BRANCHES_SUCCESS:
      return {
        ...state,
        allBranches: [...action.payload],
      }
    default:
      return state
  }
}
