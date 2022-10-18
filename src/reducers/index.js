// entiende lo que pasa y actualiza el estado
const reducer = (state, action) => {
  switch(action.type){
    case 'SET_FAVORITE':
      return {
        ...state,
        myList: [...state.myList, action.payload]
      }
    case 'DELETE_FAVORITE':
      return {
        ...state,
        myList: state.myList.filter(items => items.id !== action.payload)
      }
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload
      }
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload
      }
    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload
      }
    case 'GET_VIDEO_SOURCE':
      return {
        ...state,
        playing: state.trends.concat(state.originals).find(item => item.id === Number(action.payload)) || []
      }
    case 'GET_SEARCH_RESULT':
      return {
        ...state,
        searchResult: state.trends.concat(state.originals).filter(e=>e.title.toLowerCase().includes(action.payload)) || []
      }
    default:
      return state;
  }
};

export default reducer;
