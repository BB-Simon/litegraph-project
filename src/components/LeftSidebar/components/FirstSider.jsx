import React from "react";
import AddBlocksIcon from "../../../assets/icons/AddBlocksIcon";
import AddGraphsIcon from "../../../assets/icons/AddGraphsIcon";
import Button from "../../Button";

const FirstSider = () => {
  return (
    <div style={{ width: 55, background: "#191919", height: "100vh" }}>
      <div
        style={{
          marginTop: "48px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Button
          icon={<AddBlocksIcon />}
          margin="15px 0"
          width="34px"
          height="34px"
        />
        <Button
          icon={<AddGraphsIcon />}
          width="34px"
          height="34px"
          background="none"
        />
      </div>
    </div>
  );
};

export default FirstSider;
