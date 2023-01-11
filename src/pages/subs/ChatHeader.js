import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Menu, MenuItem, styled } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const MenuOption = styled(MenuItem)`
    font-size: 14px
    padding: 15px 60px 5px 24px;
`;

//function for the chat header
function ChatHeader(props) {
  //setting the state for the open and openDrawer
  const [open, setOpen] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  //handle click to set the open state
  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  //handle close to close the state
  const handleClose = () => {
    setOpen(null);
  };

  //toggle drawer to open or close the drawer
  const toggleDrawer = () => {
    setOpenDrawer(true);
  };

  //getting the user data from redux
  const { user } = props;
  const data = user.filter((item) => item.chatStatus === true)[0];
  return (
    <div className="chatheader flex">
      {/* div for the user info */}
      <div className="you rel flex align">
        {/* link to the user profile */}
        <Link className="user">
          <img src={data.dp} />
        </Link>
        {/* Chat meta for name and status */}
        <div className="chat-meta">
          <h2 className="name fs15">{data.name}</h2>
          <h2 className="status fs13 myfontcolor">{data.status}</h2>
        </div>
      </div>
      {/* div for the action */}
      <div className="actions rel flex align">
        {/* button for the action */}
        <button className="fs20">
          {/* morevert icon and menu to set the action */}
          <MoreVertIcon onClick={handleClick} />
          <Menu
            anchorEl={open}
            keepMounted
            open={open}
            onClose={handleClose}
            getContentAnchorEl={null}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            {/* menu option for contact info */}
            <MenuOption
              onClick={() => {
                handleClose();
                toggleDrawer();
              }}
            >
              Contact info
            </MenuOption>
            {/* menu option for select messages */}
            <MenuOption
              onClick={() => {
                handleClose();
              }}
            >
              Select messages
            </MenuOption>
            {/* menu option for close chat */}
            <MenuOption
              onClick={() => {
                handleClose();
              }}
            >
              Close chat
            </MenuOption>
            {/* menu option for mute notification */}
            <MenuOption
              onClick={() => {
                handleClose();
              }}
            >
              Mute Notifications
            </MenuOption>
            {/* menu option for disappearing messages */}
            <MenuOption
              onClick={() => {
                handleClose();
              }}
            >
              Disappearing messages
            </MenuOption>
            {/* menu option for clear messages */}
            <MenuOption
              onClick={() => {
                handleClose();
              }}
            >
              Clear messages
            </MenuOption>
            {/* menu option for delete chat */}
            <MenuOption
              onClick={() => {
                handleClose();
              }}
            >
              Delete Chat
            </MenuOption>
            {/* menu option for report */}
            <MenuOption
              onClick={() => {
                handleClose();
              }}
            >
              Report
            </MenuOption>
            {/* menu option for block */}
            <MenuOption
              onClick={() => {
                handleClose();
              }}
            >
              Block
            </MenuOption>
          </Menu>
        </button>
      </div>
    </div>
  );
}

//map state to props
const mapStateToProps = (state) => {
  return {
    ...state.Chat,
  };
};

//map dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {
    setState: (loaded) => dispatch({ type: "CHAT_STATE" }),
  };
};

//exporting chat header
export default connect(mapStateToProps, mapDispatchToProps)(ChatHeader);
