import React from "react";
import { Sidenav } from "rsuite";
import Button from "../Button";

const RightSidebar = () => {
  return (
    <div
      style={{
        width: 250,
        background: "#191919",
        height: "100vh",
        paddingTop: "48px",
      }}
    >
      <Sidenav style={{ background: "#191919" }}>
        <Sidenav.Body>
          <div style={{ marginLeft: "50px" }}>
            <Button icon="Start" width="44px" height="21px" />
          </div>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};

export default RightSidebar;
