import { ListItemText, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  itemText: {
    fontSize: "13px",
    fontWeight: "bold",
    margin: "0px",
  },
}));

const ItemText = ({ text }) => {
  const classes = useStyles();
  return (
    <ListItemText
      className={classes.itemText}
      disableTypography={true}
      primary={text}
    />
  );
};

export default ItemText;
