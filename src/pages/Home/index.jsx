import React from "react";
import { ButtonGroup, CssBaseline, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { HiPlusSm, HiMinusSm } from "react-icons/hi";

import Button from "../../components/Button";
import LeftSidebar from "../../components/LeftSidebar";
import RightSidebar from "../../components/RightSidebar";
import TopNavigation from "../../components/TopNavigation/index";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    maxHeight: "100vh",
  },
  content: {
    flexGrow: 1,
    background: "#1f1f1f",
  },
  main: {
    flexGrow: 1,
    padding: "68px 35px",
    color: "#ffffff",
    background: "#1f1f1f",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <TopNavigation />
      <LeftSidebar />
      <main className={classes.content}>
        <div className={classes.main}>hello from home page</div>
        <div
          style={{
            width: "25px",
            position: "absolute",
            bottom: "3%",
            right: "18%",
          }}
        >
          <ButtonGroup orientation="vertical">
            <Button
              icon={
                <HiPlusSm
                  style={{ color: "#fff", fontSize: "16px", opacity: "0.89" }}
                />
              }
              width="25px"
              height="27px"
              background="#242424"
              border="solid 0.5px #3a3a3a"
            />
            <Button
              icon={
                <HiMinusSm
                  style={{
                    color: "#ffffff",
                    opacity: "0.89",
                    fontSize: "16px",
                  }}
                />
              }
              width="25px"
              height="27px"
              background="#242424"
              border="solid 0.5px #3a3a3a"
            />
          </ButtonGroup>
        </div>
      </main>
      <RightSidebar />
    </div>
  );
};

export default Home;
