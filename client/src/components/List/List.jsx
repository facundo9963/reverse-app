import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { ContainerList, ContainerElement } from "./styles";
import ListElement from "../ListElement/ListElement";
import { deleteReverseWord} from "../../redux/accions";
import Button from "@mui/material/Button";
import { useState } from "react";

function List() {
  const reverseObjects = useSelector((state) => state.reverseTexts);
  const dispatch = useDispatch();
  const[refresh, setRefresh]=useState(false);

  
  function handleDelete(e, ID) {
    e.preventDefault();
    dispatch(deleteReverseWord(ID));
    setRefresh(!refresh)
  }

  return (
    <ContainerList>
      {reverseObjects &&
        reverseObjects.map((reverse) => {
          return (
            <ContainerElement key={reverse.ID}>
              <ListElement
                text={reverse.text}
                palindrome={reverse.palindrome}
              />
              <Button
                variant="contained"
                color="error"
                onClick={(e) => handleDelete(e, reverse.ID)}
              >
                Delete
              </Button>
            </ContainerElement>
          );
        })}
    </ContainerList>
  );
}

export default List;
