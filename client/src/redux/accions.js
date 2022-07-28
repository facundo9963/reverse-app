import axios from "axios";
export const GET_REVERSE_WORD = "GET_REVERSE_WORD";


export function getReverseWord(word) {
  return async (dispatch) => {
    try {
      const reverseWord = await axios.get(
        `http://localhost:3001/iecho?text=${word}`
      );
      dispatch({
        type: GET_REVERSE_WORD,
        payload: reverseWord.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
