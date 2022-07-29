import {GET_REVERSE_WORD, DELETE_REVERSE_WORD} from "./accions";


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
      case DELETE_REVERSE_WORD:
        return {...state, reverseTexts: state.reverseTexts.filter((text) => text.ID !== payload)}
      default:
        return { ...state };
    }
  };
  
  export default reducer;