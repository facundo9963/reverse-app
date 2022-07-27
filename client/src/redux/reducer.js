import {GET_REVERSE_WORD} from "./accions";


const initialState = {
    reverseTexts:[]
  };
  
  // REDUCER
  const reducer = (state = initialState, { type, payload }) => {
    
    switch (type) {
      case GET_REVERSE_WORD:
        return { ...state, reverseTexts: [...state.reverseTexts, payload]};
      default:
        return { ...state };
    }
  };
  
  export default reducer;