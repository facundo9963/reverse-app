import React from "react";
import { useSelector } from "react-redux";

import { ContainerList } from "./styles";
import ListElement from "../ListElement/ListElement";

function List() {
  const texts = useSelector((state) => state.reverseTexts);

  return (
    <ContainerList>
      {texts &&
        texts.map((text,i) => {
          return <ListElement key={i} text={text} />;
        })}
    </ContainerList>
  );
}

export default List;
