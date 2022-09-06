// entiende lo que pasa y actualiza el estado
const reducer = (state, action) => {
  switch(action.type){
    case 'SET_FAVORITE':
      return {
        ...state,
        myList: [...state.myList, action.payload]
      }
    default:
      return state;
  }
};

export default reducer;
