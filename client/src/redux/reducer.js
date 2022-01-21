


const initialState = {
  numbers: [1,2,3,4,5]
}

const reducer =  (state = initialState, action) => {
  switch ("Prueba") {
    case "Prueba":
        return {
          ...state,
          favoriteNumber: state.numbers.pop()
        }
    default:
      break;
  }
};

export default reducer