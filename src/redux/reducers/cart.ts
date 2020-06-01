import {
  ADD_ITEM_TO_CART,
  GET_CART_ITEM_FROM_ASYNCE,
  GET_CART_COUNT_FROM_ASYNC,
  DELETE_ITEM_FROM_CART_ASYNC,
  EMPTY_CART,
  INCREASE_ITEM_TO_CART,
  ORDER_DETAILS,
  LOGOUT_USER,
} from "../actionTypes"
import { setCartItems, setCartCount, setCartSubtotal } from "../../components/utils/CartSetter"
const initialState = {
  cartItems: [],
  cartCount: 0,
  subTotal: 0,
  orderDetails: {},
}

export default function(state = initialState, action) {
  switch (action.type) {
    case EMPTY_CART:
      setCartItems([])
      setCartCount(0)
      return {
        ...state,
        cartCount: 0,
        cartItems: [],
      }
    case ADD_ITEM_TO_CART:
      /*setting items to asyn to load again if user kill the app*/
      //console.log("[...state.cartItems, action.payload]", [...state.cartItems, action.payload])
      //console.log("ADD_ITEM_TO_CART",action.payload);

      setCartItems(
        cartItemSetter(state.cartItems, action.payload) /* [...state.cartItems, action.payload] */,
      )
      setCartCount(state.cartCount + (!isExist(state.cartItems, action.payload.item.ID) ? 1 : 0))
      return {
        ...state,
        cartCount: state.cartCount + (!isExist(state.cartItems, action.payload.item.ID) ? 1 : 0),
        cartItems: cartItemSetter(
          state.cartItems,
          action.payload,
        ) /* [...state.cartItems, action.payload] */,
        subTotal: !isExist(state.cartItems, action.payload.item.ID)
          ? subTotalCounter([...state.cartItems, action.payload])
          : state.subTotal,
      }
    case GET_CART_ITEM_FROM_ASYNCE:
      /*Loading cart item from asyn setting to store*/
      // console.log("action.payload", action.payload)

      return {
        ...state,
        subTotal: subTotalCounter(JSON.parse(action.payload)),
        cartItems: JSON.parse(action.payload),
      }
    case GET_CART_COUNT_FROM_ASYNC:
      return {
        ...state,
        cartCount: action.payload,
      }
    case DELETE_ITEM_FROM_CART_ASYNC:
      const finalItems = state.cartItems.filter(item => {
        return item.item.ID != action.payload
      })
      setCartItems(finalItems)
      return {
        ...state,
        cartItems: finalItems,
        cartCount: state.cartCount - 1,
        subTotal: subTotalCounter(finalItems),
      }
    case INCREASE_ITEM_TO_CART: //run on item count change +,-
      let subtot
      const finaldata = state.cartItems.filter(item => {
        if (item.item.ID === action.payload.payload.itemID) {
          subtot = state.subTotal + action.payload.payload.itemValue * item.item.Price
          return (item.qty = action.payload.payload.itemValue)
        }
      })
      setCartItems(finaldata)
      setCartSubtotal(state.subTotal + subtot)
      subTotalCounter(state.cartItems)
      return {
        ...state,
        cartItems: state.cartItems,
        subTotal: subTotalCounter(state.cartItems),
      }
    case ORDER_DETAILS:
      //console.log("state.orderDetails", state.orderDetails, action.payload)
      return {
        ...state,
        orderDetails: { ...state.orderDetails, ...action.payload },
      }
    case LOGOUT_USER:
      return {
        ...state,
        cartItems: [],
        cartCount: 0,
        subTotal: 0,
        orderDetails: {},
      }
    default:
      return state
  }
}

function subTotalCounter(cartItem: any[]) {
  let tmpTotal = 0
  cartItem.map((item, index) => {
    tmpTotal += item.item && item.item.Price * item.qty
    console.log("item. >>", item, tmpTotal)
  })
  return tmpTotal
}

function isExist(items: any, targetId) {
  let exist = false
  items.map((val, index) => {
    if (val.item.ID == targetId) {
      exist = true
    }
  })
  return exist
}

function cartItemSetter(items: any, newItem: any) {
  const tmpItems = []
  if (!isExist(items, newItem.item.ID)) {
    tmpItems.push(...items, newItem)
  } else {
    //remove  previously added item.
    const filteredItems = items.filter(item => {
      return item.item.ID != newItem.item.ID
    })
    tmpItems.push(...filteredItems, newItem)
    //add again with updates
  }
  return tmpItems
}
