import { styled } from "@mui/system";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItem from "@mui/material/ListItem";

export const Container = styled(ListItem)({
  display: "flex",
  width: "80%",
  justifyContent: "space-around",
});
export const Item = styled(ListItemText)({
  width: "25%",
});
export const RedIcon = styled(ListItemIcon)({
  width: "25%",
  color: "#ff1744",
});
export const GreenIcon = styled(ListItemIcon)({
  width: "25%",
  color: "#0ea03a",
});
