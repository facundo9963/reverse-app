import React from "react";
import {Item} from "./styles";
import ListItem from "@mui/material/ListItem";

function ListElement({text}) {
  return (
    <ListItem>
      <Item primary={text} />
    </ListItem>
  );
}

export default ListElement;
