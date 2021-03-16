import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Collapse, Divider, List } from "@material-ui/core";
import { RiArrowDownSFill, RiArrowRightSFill } from "react-icons/ri";

import FolderOpenedIcon from "../../../assets/icons/FolderOpenedIcon";
import FolderClosedIcon from "../../../assets/icons/FolderClosedIcon";
import SeacrhBar from "./components/SeacrhBar";
import { Wrapper } from "./components/SiderStyles";
import Item from "./components/Item";
import item2 from "../../../statics/menus/item2";
import item2ofitem1 from "../../../statics/menus/item2ofitem1";

const useStyles = makeStyles((theme) => ({
  root: {
    cursor: "pointer",
    margin: "0px 10px",
  },
}));

const SecondSider = () => {
  const classes = useStyles();
  const [list1, setlist1] = useState(false);
  const [list2, setlist2] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(true);
  const [subOfSubMenuOpen, setSubOfSubMenuOpen] = useState(false);

  const handleList1OnClick = () => {
    setlist1((prevOpen) => !prevOpen);
  };
  const handleList2OnClick = () => {
    setlist2((prevOpen) => !prevOpen);
  };

  const handleSubMenuOpen = () => {
    setSubMenuOpen((prevOpen) => !prevOpen);
  };
  const handleSubOfSubMenuOpen = () => {
    setSubOfSubMenuOpen((prevOpen) => !prevOpen);
  };

  return (
    <Wrapper>
      <SeacrhBar />
      <List className={classes.root} disablePadding={true}>
        <Item
          open={list1}
          handleOpen={handleList1OnClick}
          icon1={list1 ? <RiArrowDownSFill /> : <RiArrowRightSFill />}
          icon2={list1 ? <FolderOpenedIcon /> : <FolderClosedIcon />}
          iconSize="16px"
          iconPadding="0 8px 0 3px"
          itemPadding="3px 0px"
          textWeight="bold"
          textOpacity="0.8"
          text="All Blocks"
        />
        <Collapse component="li" in={list1} timeout="auto" unmountOnExit>
          <List disablePadding={true}>
            <Item
              icon1={<RiArrowRightSFill />}
              icon2={<FolderClosedIcon />}
              iconSize="16px"
              iconPadding="0 8px 0 3px"
              itemPadding="3px 15px"
              textWeight="normal"
              textOpacity="0.9"
              text="Data Fetch"
            />
            <Item
              open={subMenuOpen}
              handleOpen={handleSubMenuOpen}
              icon1={subMenuOpen ? <RiArrowDownSFill /> : <RiArrowRightSFill />}
              icon2={subMenuOpen ? <FolderOpenedIcon /> : <FolderClosedIcon />}
              iconSize="16px"
              iconPadding="0 8px 0 3px"
              itemPadding="3px 15px"
              textWeight="normal"
              textOpacity="0.9"
              text="Fitlering"
            />
          </List>
          <Collapse
            component="li"
            in={subMenuOpen}
            timeout="auto"
            unmountOnExit
          >
            <List disablePadding={true}>
              {item2ofitem1.map((item) => (
                <Item
                  icon2={item.icon}
                  iconPadding="0 8px 0 0px"
                  itemPadding="3px 15px 3px 35px"
                  textWeight="normal"
                  textOpacity="0.72"
                  text={item.title}
                />
              ))}
            </List>
          </Collapse>
          <Item
            icon1={<RiArrowRightSFill />}
            icon2={<FolderClosedIcon />}
            iconSize="16px"
            iconPadding="0 8px 0 3px"
            itemPadding="3px 15px"
            textWeight="normal"
            textOpacity="0.9"
            text="Data Fetch"
          />
          <Item
            icon1={<RiArrowRightSFill />}
            icon2={<FolderClosedIcon />}
            iconSize="16px"
            iconPadding="0 8px 0 3px"
            itemPadding="3px 15px"
            textWeight="normal"
            textOpacity="0.9"
            text="Averager"
          />
          <Item
            icon1={<RiArrowRightSFill />}
            icon2={<FolderClosedIcon />}
            iconSize="16px"
            iconPadding="0 8px 0 3px"
            itemPadding="3px 15px"
            textWeight="normal"
            textOpacity="0.9"
            text="Multiplier"
          />
          <Item
            icon1={<RiArrowRightSFill />}
            icon2={<FolderClosedIcon />}
            iconSize="16px"
            iconPadding="0 8px 0 3px"
            itemPadding="3px 15px"
            textWeight="normal"
            textOpacity="0.9"
            text="Data Fetch"
          />
          <Item
            icon1={<RiArrowRightSFill />}
            icon2={<FolderClosedIcon />}
            iconSize="16px"
            iconPadding="0 8px 0 3px"
            itemPadding="3px 15px"
            textWeight="normal"
            textOpacity="0.9"
            text="Filtering"
          />
          <Item
            icon1={<RiArrowRightSFill />}
            icon2={<FolderClosedIcon />}
            iconSize="16px"
            iconPadding="0 8px 0 3px"
            itemPadding="3px 15px"
            textWeight="normal"
            textOpacity="0.9"
            text="Averager"
          />
        </Collapse>
        <Divider
          style={{
            margin: "20px 0px",
            background: "#ffffff",
            opacity: "0.1",
          }}
        />
        <Item
          open={list2}
          handleOpen={handleList2OnClick}
          icon1={<RiArrowDownSFill />}
          icon2={<FolderClosedIcon />}
          iconSize="16px"
          iconPadding="0 8px 0 3px"
          itemPadding="3px 0px"
          textWeight="bold"
          textOpacity="0.8"
          text="Frequently Used"
        />
        <Collapse component="li" in={list2} timeout="auto" unmountOnExit>
          <List disablePadding={true}>
            {item2.map((item) => (
              <Item
                icon2={item.icon}
                iconPadding="0 8px 0 0px"
                itemPadding="3px 20px"
                textWeight="normal"
                textOpacity="0.72"
                text={item.title}
              />
            ))}
          </List>
        </Collapse>
      </List>
      
    </Wrapper>
  );
};

export default SecondSider;

// import React, { useState } from "react";
// import { Dropdown, Icon, Nav, Sidenav } from "rsuite";
// import { RiArrowDownSFill, RiArrowRightSFill } from "react-icons/ri";

// import { Wrapper } from "./components/SiderStyles";
// import FolderClosedIcon from "../../../assets/icons/FolderClosedIcon";
// import FolderOpenedIcon from "../../../assets/icons/FolderOpenedIcon";
// import BlockIcon from "../../../assets/icons/BlockIcon";
// import SeacrhBar from "./components/SeacrhBar";

// const SecondSider = () => {
//   const [open, setOpen] = useState(false);
//   const hanldeOnOpenChange = () => {
//     setOpen(!open);
//   };
//   return (
//     <Wrapper>
// <Sidenav
//   defaultOpenKeys={["3", "4"]}
//   activeKey="1"
//   onOpenChange={hanldeOnOpenChange}
//   style={{ height: "100vh", background: "#242424" }}
// >
//   <Sidenav.Body>
//           <SeacrhBar />
//           <Nav style={{ margin: "0 10px" }}>
//             <Dropdown
//               eventKey="1"
//               title="All Blocks"
//               icon={
//                 open
//                   ? [<RiArrowDownSFill />, <FolderOpenedIcon className="tt" />]
//                   : [<RiArrowRightSFill />, <FolderClosedIcon className="tt" />]
//               }
//             >
//               <div className="items">
//                 <Dropdown
//                   eventKey="1-1"
//                   title="Data Fetch"
//                   icon={
//                     open
//                       ? [<RiArrowDownSFill />, <FolderOpenedIcon />]
//                       : [<RiArrowRightSFill />, <FolderClosedIcon />]
//                   }
//                 ></Dropdown>
//                 <Dropdown
//                   eventKey="1-2"
//                   title="Averager"
//                   icon={
//                     open
//                       ? [<RiArrowDownSFill />, <FolderOpenedIcon />]
//                       : [<RiArrowRightSFill />, <FolderClosedIcon />]
//                   }
//                 >
//                   <div className="items">
//                     <Dropdown.Item eventKey="1-2-1" icon={<BlockIcon />}>
//                       Block Description 1
//                     </Dropdown.Item>
//                     <Dropdown.Item eventKey="1-2-2" icon={<BlockIcon />}>
//                       Block Description 1
//                     </Dropdown.Item>
//                     <Dropdown.Item eventKey="1-2-3" icon={<BlockIcon />}>
//                       Block Description 1
//                     </Dropdown.Item>
//                     <Dropdown.Item eventKey="1-2-4" icon={<BlockIcon />}>
//                       Block Description 1
//                     </Dropdown.Item>
//                     <Dropdown.Item eventKey="1-2-5" icon={<BlockIcon />}>
//                       Block Description 1
//                     </Dropdown.Item>
//                     <Dropdown.Item eventKey="1-2-6" icon={<BlockIcon />}>
//                       Block Description 1
//                     </Dropdown.Item>
//                   </div>
//                 </Dropdown>
//                 <Dropdown
//                   eventKey="1-3"
//                   title="Fitlering"
//                   icon={
//                     open
//                       ? [<RiArrowDownSFill />, <FolderOpenedIcon />]
//                       : [<RiArrowRightSFill />, <FolderClosedIcon />]
//                   }
//                 ></Dropdown>
//                 <Dropdown
//                   eventKey="1-4"
//                   title="Data Fetch"
//                   icon={
//                     open
//                       ? [<RiArrowDownSFill />, <FolderOpenedIcon />]
//                       : [<RiArrowRightSFill />, <FolderClosedIcon />]
//                   }
//                 ></Dropdown>
//                 <Dropdown
//                   eventKey="1-5"
//                   title="Multiplier"
//                   icon={
//                     open
//                       ? [<RiArrowDownSFill />, <FolderOpenedIcon />]
//                       : [<RiArrowRightSFill />, <FolderClosedIcon />]
//                   }
//                 ></Dropdown>
//                 <Dropdown
//                   eventKey="1-6"
//                   title="Data Fetch"
//                   icon={
//                     open
//                       ? [<RiArrowDownSFill />, <FolderOpenedIcon />]
//                       : [<RiArrowRightSFill />, <FolderClosedIcon />]
//                   }
//                 ></Dropdown>
//                 <Dropdown
//                   eventKey="1-7"
//                   title="Filtering"
//                   icon={
//                     open
//                       ? [<RiArrowDownSFill />, <FolderOpenedIcon />]
//                       : [<RiArrowRightSFill />, <FolderClosedIcon />]
//                   }
//                 ></Dropdown>
//                 <Dropdown
//                   eventKey="1-8"
//                   title="Averager"
//                   icon={
//                     open
//                       ? [<RiArrowDownSFill />, <FolderOpenedIcon />]
//                       : [<RiArrowRightSFill />, <FolderClosedIcon />]
//                   }
//                 ></Dropdown>
//               </div>
//             </Dropdown>
//             <Dropdown
//               eventKey="2"
//               title="Frequently Used"
//               icon={
//                 open
//                   ? [<RiArrowDownSFill />, <FolderOpenedIcon />]
//                   : [<RiArrowRightSFill />, <FolderClosedIcon />]
//               }
//             >
//               <div className="items">
//                 <Dropdown.Item eventKey="2-1" icon={<BlockIcon />}>
//                   Applications
//                 </Dropdown.Item>
//               </div>
//             </Dropdown>
//           </Nav>
//         </Sidenav.Body>
//       </Sidenav>
//     </Wrapper>
//   );
// };

// export default SecondSider;
