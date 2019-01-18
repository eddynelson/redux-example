import { GET_POST, NEW_POST } from '../actions/types'

const initialState = {
  items: [],
  item: {}
}

export default (state = initialState, action) => {
  switch(action.type){
    case GET_POST: 
      return{
        ...state,
        items: action.payload
      }
    case NEW_POST:
      return{
        items: [action.payload, ...state.items],
        item: action.payload
      }
    default:
      return state
  }
}