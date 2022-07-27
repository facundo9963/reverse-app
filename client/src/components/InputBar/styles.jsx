import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export const SendButton = styled(Button)({
  
  padding: 8,
  borderRadius: 4,
});
export const Container = styled(Box)({
  display:"flex",
  width: "70%",
  alignItems:"center",
  gap: 40,
  margin:"auto",
  color: 'darkslategray',
  backgroundColor:'#ff1744',
  padding: 8,
  borderRadius: 4,
});

