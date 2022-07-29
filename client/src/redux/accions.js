import axios from "axios";
import { v4 as uuid } from 'uuid';
export const GET_REVERSE_WORD = "GET_REVERSE_WORD";
export const DELETE_REVERSE_WORD = "DELETE_REVERSE_WORD";


export  function getReverseWord(word) {
  return async (dispatch) => {
    try {
      const reverseWord = await axios.get(
        `http://localhost:3001/iecho?text=${word}`
      );
      return dispatch({
        type: GET_REVERSE_WORD,
        payload: {...reverseWord.data, ID: uuid()},
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function deleteReverseWord(ID) {
  return async (dispatch) => {
    try {
      dispatch({
        type: DELETE_REVERSE_WORD,
        payload: ID,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
