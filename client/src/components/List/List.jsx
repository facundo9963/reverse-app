import React from "react";
import { useSelector } from "react-redux";

import { ContainerList } from "./styles";
import ListElement from "../ListElement/ListElement";

function List() {
  const reverseObjects = useSelector((state) => state.reverseTexts);

  return (
    <ContainerList>
      {reverseObjects &&
        reverseObjects.map((reverse,i) => {
          return <ListElement key={i} text={reverse.text} palindrome={reverse.palindrome}/>;
        })}
    </ContainerList>
  );
}

export default List;
