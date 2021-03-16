import React from "react";
import { ListItemIcon } from "@material-ui/core";

const ItemIcon = ({ size, padding, icon }) => {
  return (
    <ListItemIcon style={{ fontSize: size, padding: padding }}>
      {icon}
    </ListItemIcon>
  );
};

export default ItemIcon;
