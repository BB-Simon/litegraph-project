import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import { Divider } from "@material-ui/core";
import { BiSearch } from "react-icons/bi";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    border: "solid 0.5px #4a4a4a",
    borderRadius: "2px",
    backgroundColor: "#2f3030",
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    margin: "8px 10px",
    width: "100%",
    height: "24px",
    [theme.breakpoints.up("sm")]: {
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 1),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#ffffff",
    opacity: "0.5",
  },
  inputRoot: {
    color: "#ffffff",
    opacity: "0.2",
  },
  inputInput: {
    padding: theme.spacing(0),
    fontSize: "12px",
    paddingLeft: `calc(1em + ${theme.spacing(2)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const SeacrhBar = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <BiSearch />
        </div>
        <InputBase
          placeholder="Search Block"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
      <Divider
        style={{
          margin: "15px 10px 9px",
          background: "#ffffff",
          opacity: "0.1",
        }}
      />
    </>
  );
};

export default SeacrhBar;
