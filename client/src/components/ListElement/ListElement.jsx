import React from "react";
import {Item, RedIcon, GreenIcon,Container} from "./styles";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CancelIcon from '@mui/icons-material/Cancel';


function ListElement({text, palindrome}) {
  if (palindrome){
    return(
    <Container>
      <Item primary={text} />
      <Item primary="Palindrome" />
      <GreenIcon>
      <CheckBoxIcon/>
      </GreenIcon>
    </Container>
    )
  }else{
    
    return (
      <>
      <Container>
      <Item primary={text} />
      <Item primary="Not Palindrome" />
      <RedIcon>
      <CancelIcon/>
      </RedIcon>
      </Container>
      </>
    );
  }
}

export default ListElement;
