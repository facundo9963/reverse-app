import { styled } from "@mui/system";
import List from "@mui/material/List";

export const ContainerList = styled(List)({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column-reverse",
  width: "70%",
  minHeight: "50px",
  gap: 40,
  margin: "auto",
  marginTop: "15px",
  color: "darkslategray",
  backgroundColor: "#ffc0ad",
  padding: 10,
  borderRadius: 4,
});
