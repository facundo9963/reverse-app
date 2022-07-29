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
export const ContainerElement= styled("div")({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  minHeight: "50px",
  margin: "auto",
  marginTop: "15px",
  color: "darkslategray",
  padding: 10,
  paddingRight: 30,
  borderRadius: 4,
});
