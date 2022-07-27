import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getReverseWord } from "../../redux/accions";
import TextField from '@mui/material/TextField';
import {Container, SendButton,} from './styles'



function InputBar() {


  const dispatch = useDispatch();

  // Creo un estado local para controlar el formulario
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // valido que haya texto insertado
  const validate = (value) => {
    return value.length >= 1 ? true : false;
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate(input)) {
      dispatch(getReverseWord(input));
    }
    setInput("");
  };

  return (
    <Container >
      <TextField
        fullWidth
        id="outlined-basic"
        label="Insert Text"
        variant="outlined"
        value={input}
        onChange={(e) => handleChange(e)}
      />
      <SendButton variant="contained" onClick={(e) => handleSubmit(e)}>Send</SendButton>
    </Container>
  );
}

export default InputBar;
