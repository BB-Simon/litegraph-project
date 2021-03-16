import React from "react";
import FirstSider from "./components/FirstSider";
import SecondSider from "./components/SecondSider";
import { MdKeyboardArrowLeft } from "react-icons/md";

import Button from "../Button";

const LeftSidebar = () => {
  return (
    <div style={{ display: "flex" }}>
      <FirstSider />
      <SecondSider />
      <div style={{ paddingTop: "56px", background: "#1f1f1f" }}>
        <Button
          icon={<MdKeyboardArrowLeft />}
          width="17px"
          height="22px"
          background="#242424"
          border="solid 0.5px rgba(255, 255, 255, 0.1)"
        />
      </div>
    </div>
  );
};

export default LeftSidebar;
