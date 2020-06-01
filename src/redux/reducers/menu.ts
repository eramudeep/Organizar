import {
  GET_MENU_ITEMS,
  ADD_TO_FAV,
  LOAD_CATEGORIES,
  LOAD_MENU_ITEMS_BY_CATEGORY,
  SET_ITEM_TO_CUSTOMIZE,
  ADD_ITEM_TO_CART,
  SET_LOADED_MENU_ITEMS,
  FETCH_CATEGORIES,
  SET_ITEM_FAV_SUCESS,
  GET_ITEM_FAV_SUCESS,
  CATEGORIED_LOADED_SUCCESS,
  LOAD_FAV_FROM_ASYNC,
  GET_FAV_ITEMS_DETAIL,
  DE_FAV_ITEM_SUCCESS,
  FAV_ITEM_CLEAR,
} from "../actionTypes"

import { markItemsFav, setOrderItems, favItemsDetail } from "../../components/utils/CartSetter"
const initialState = {
  allMenuItems: [],
  favItems: [],
  favItemsWithData: [],
  favItemsDetails: [],
  menuItemByCategory: [],
  categories: [],
  itemToCustomize: {},
  cartItems: [],
  categoriesLoaded: false,
}

export default function(state = initialState, action) {
  switch (action.type) {
    case LOAD_FAV_FROM_ASYNC:
      return {
        ...state,
        favItems: action.payload,
      }
    case CATEGORIED_LOADED_SUCCESS:
      return {
        ...state,
        categoriesLoaded: true,
      }
    case GET_ITEM_FAV_SUCESS:
      let someFavItems = []
      const finalfavItemss = action.payload.data.filter(item => {
        someFavItems.push(item.item_id)
      })
      //console.log("...action.payload.data", ...action.payload.data)

      return {
        ...state,
        favItems: someFavItems,
        favItemsWithData: [...action.payload.data],
      }
    case SET_ITEM_FAV_SUCESS:
      //setting to async [...state.favItems, action.payload.ID]
      markItemsFav([...state.favItems, action.payload.ID])
      favItemsDetail([action.payload, ...state.favItemsDetails])
      //console.log("action.payload on fav add >>", action.payload)

      return {
        ...state,
        favItems: [...state.favItems, action.payload.item.ID],
        favItemsDetails: [action.payload, ...state.favItemsDetails],
      }
    case GET_FAV_ITEMS_DETAIL:
      return {
        ...state,
        favItemsDetails: state.favItemsDetails,
      }
    case LOAD_CATEGORIES:
      return {
        ...state,
        categories: [...action.payload],
      }
    case LOAD_MENU_ITEMS_BY_CATEGORY:
      let favItemsDetails = []
      action.payload.filter(item => {
        if (state.favItems.includes(item.ID)) {
          state.favItemsWithData.filter(item_ => {
            if (item_.item_id == item.ID)
              favItemsDetails.push({ item, deleteAbleId: item_.id, item_data: item_.item_data })
          })
        }
      })
      return {
        ...state,
        menuItemByCategory: [...action.payload],
        favItemsDetails: favItemsDetails,
      }
    case SET_ITEM_TO_CUSTOMIZE:
      return {
        ...state,
        itemToCustomize: action.payload,
      }

    case SET_LOADED_MENU_ITEMS:
      //console.log("i am from reducer", action.payload)
      return {
        ...state,
        categories: [...action.payload],
      }
    case ADD_ITEM_TO_CART:
      /*setting items to asyn storgae, to use later when use reopned the app*/
      setOrderItems([...state.cartItems, action.payload])
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      }

    case GET_MENU_ITEMS:
      return { ...state.allMenuItems }
    case DE_FAV_ITEM_SUCCESS:
      const finalfavItems = state.favItems.filter(item => {
        return item != action.payload
      })
      markItemsFav(finalfavItems) //updating to async
      const finalFavItemDetails = state.favItemsDetails.filter(item => {
        return item.item.ID != action.payload
      })
      const itemswithData = state.favItemsWithData.filter(item => {
        return item.item_id != action.payload
      })
      console.log("itemswithData", action.payload)

      favItemsDetail(finalFavItemDetails)

      return {
        ...state,
        favItems: finalfavItems,
        favItemsDetails: finalFavItemDetails,
        favItemsWithData: itemswithData,
      }
    case FAV_ITEM_CLEAR:
      return {
        ...state,
        favItems: [],
        favItemsDetails: [],
      }
    default:
      return state
  }
}
