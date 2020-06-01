import { IS_REDIRETED_BEFORE } from "../actionTypes"

const initialState = {
  isRedirectedBefore: false,
}

export default function(state = initialState, action) {
  switch (action.type) {
    case IS_REDIRETED_BEFORE:
      return {
        ...state,
        isRedirectedBefore: true,
      }

    default:
      return state
  }
}
