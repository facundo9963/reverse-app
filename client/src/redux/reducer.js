import {GET_REVERSE_WORD} from "./accions";


const initialState = {
    reverseTexts:[],
  };
  
  // REDUCER
  const reducer = (state = initialState, { type, payload }) => {
    
    switch (type) {
      case GET_REVERSE_WORD:
        if(payload.text !== null){   //no acepto valores nulos
          return { ...state, reverseTexts: [...state.reverseTexts, payload]};
        }else {
          return { ...state };
        }
      default:
        return { ...state };
    }
  };
  
  export default reducer;