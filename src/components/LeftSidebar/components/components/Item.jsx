import {
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  item: {
    color: "#d8d8d8",
    "&:hover": {
      background: "#4dad8e",
      borderRadius: "3px",
      color: "#fff",
    },
  },
  itemText: {
    fontSize: "13px",
    letterSpacing: "0.1px",
    margin: "0px",
  },
}));

const Item = ({
  open,
  handleOpen,
  text,
  icon1,
  icon2,
  iconSize,
  iconPadding,
  itemPadding,
  textWeight,
  textOpacity,
}) => {
  const classes = useStyles();
  return (
    <ListItem
      open={open}
      onClick={handleOpen}
      className={classes.item}
      style={{ padding: itemPadding }}
    >
      <ListItemIcon style={{ fontSize: iconSize }}>{icon1}</ListItemIcon>
      <ListItemIcon style={{ padding: iconPadding }}>{icon2}</ListItemIcon>
      <ListItemText
        disableTypography={true}
        className={classes.itemText}
        primary={text}
        style={{ opacity: textOpacity, fontWeight: textWeight }}
      />
    </ListItem>
  );
};

export default Item;
