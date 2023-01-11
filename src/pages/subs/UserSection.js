import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, MenuItem, styled } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MessageIcon from "@mui/icons-material/Message";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";

const MenuOption = styled(MenuItem)`
    font-size: 14px
    padding: 15px 60px 5px 24px;
`;

// Main function for the UserSection
function UserSection(props) {
  // Setting the state for open and openDrawer
  const [open, setOpen] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  // HandleClick function to set the open state to the currentTarget
  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  // HandleClose function to set the open state to null
  const handleClose = () => {
    setOpen(null);
  };

  // ToggleDrawer function to set openDrawer to true
  const toggleDrawer = () => {
    setOpenDrawer(true);
  };

  // Main return function with the userbox class
  return (
    <div className="userbox flex">
      {/* // Div with the you class and link to the user image */}
      <div className="you rel flex align">
        <Link className="user">
          <img src="https://pps.whatsapp.net/v/t61.24694-24/312013264_734842231682725_6097043435213610244_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdQ2YdT9aDJibR2AtXvM39u5DmrPVJ-2iwY2ihjqEei3_g&oe=63C71C98" />
        </Link>
      </div>
      {/* // Div with the actions class to set the button classes */}
      <div className="actions rel flex align">
        <button className="fs20">
          <DonutLargeIcon />
        </button>
        <button className="fs20">
          <MessageIcon />
        </button>
        {/*  button with the MoreVertIcon, onClick to call the handleClick
        function */}
        <button className="fs20">
          <MoreVertIcon onClick={handleClick} />
          {/* Menu to set the anchorEl to open, keepMounted, open, onClose to
          call the handleClose function, getcontentanchorel to null,
          anchorOrigin, transformOrigin */}
          <Menu
            anchorEl={open}
            keepMounted
            open={open}
            onClose={handleClose}
            getcontentanchorel={null}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            // className="menu-option"
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            {/* MenuOption onClick to call the handleClose and toggleDrawer
            functions */}
            <MenuOption
              onClick={() => {
                handleClose();
                toggleDrawer();
              }}
            >
              New Group
            </MenuOption>
            {/*  MenuOption onClick to call the handleClose function */}
            <MenuOption
              onClick={() => {
                handleClose();
              }}
            >
              Profile
            </MenuOption>
            <MenuOption
              onClick={() => {
                handleClose();
              }}
            >
              Starred messages
            </MenuOption>
            <MenuOption
              onClick={() => {
                handleClose();
              }}
            >
              Labels
            </MenuOption>
            <MenuOption
              onClick={() => {
                handleClose();
              }}
            >
              Settings
            </MenuOption>
            <MenuOption
              onClick={() => {
                handleClose();
              }}
            >
              Logout
            </MenuOption>
          </Menu>
        </button>
      </div>
    </div>
  );
}

// Exporting the UserSection
export default UserSection;
