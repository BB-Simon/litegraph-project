import React from "react";
import { AppBar, Typography, makeStyles, Toolbar } from "@material-ui/core";
import { ImPlay3, ImStop2 } from "react-icons/im";

import FolderOpenedIcon from "../../assets/icons/FolderOpenedIcon";
import Button from "../Button";
import SaveIcon from "../../assets/icons/SaveIcon";
import UpladIcon from "../../assets/icons/UpladIcon";

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "#151515",
    height: "48px",
    boxShadow: "none",
  },
  grow: {
    flexGrow: 1,
  },
}));

const TopNavigation = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Button icon={<FolderOpenedIcon />} />
        <Button icon={<SaveIcon />} margin="0 8px" />
        <Button icon={<UpladIcon />} />
        <div className={classes.grow} />
        <Typography style={{ opacity: "0.5", fontSize: "12px" }}>
          Document name
        </Typography>
        <div className={classes.grow} />
        <Button icon={<ImPlay3 style={{ width: "12px", height: "12px" }} />} />
        <Button
          icon={<ImStop2 style={{ width: "8px", height: "8px" }} />}
          margin="0 8px"
        />
        <Button icon="Running (75%)" width="106px" color="#4dad8e" />
      </Toolbar>
    </AppBar>
  );
};

export default TopNavigation;
