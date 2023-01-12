import React, { useState, useEffect } from "react";
import MicIcon from "@mui/icons-material/Mic";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { Menu, MenuItem, styled } from "@mui/material";
import PollIcon from "@mui/icons-material/Poll";
import QuickreplyIcon from "@mui/icons-material/Quickreply";
import PersonIcon from "@mui/icons-material/Person";
import SummarizeIcon from "@mui/icons-material/Summarize";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import ImageIcon from "@mui/icons-material/Image";
import { addMessage, setTopState } from "../../actions";
import { connect } from "react-redux";

const MenuOption = styled(MenuItem)`
    font-size: 14px
    padding: 15px 60px 5px 24px;
   
`;

//This component is the chat sender the user will use to send messages
const ChatSender = (props) => {
  //Destructuring props to access user, messages
  const { user, messages, incrementVal } = props;
  //Filter user object to find the user who is currently chatting
  const data = user.filter((item) => item.chatStatus === true)[0];
  //returns the max id from the messages array
  const maxId = Math.max(...messages.map((message) => message.id));
  //Set open to false and openDrawer to false
  const [open, setOpen] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  //Set msgToSend to empty string
  const [msgToSend, setMsgToSend] = useState("");
  const highlightInput = React.useRef(false);
  //handleClick opens the Menu
  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  // Use the useEffect hook to scroll to the last message when it updates
  useEffect(() => {
    if (highlightInput.current) {
      highlightInput.current?.focus();
    }
  }, []);

  //handleClose closes the Menu
  const handleClose = () => {
    setOpen(null);
  };

  //toggleDrawer opens the drawer
  const toggleDrawer = () => {
    setOpenDrawer(true);
  };

  const updateTopState = () => {
    // console.log(data);

    let updateVal = {
      user: {
        id: data.id,
        currentLatest: data.currentLatest + incrementVal,
      },
      incrementVal: data.currentLatest + incrementVal,
    };
    props.setTopState(updateVal);
  };
  //handleSubmit is called when user sends a message
  const handleSubmit = (e) => {
    e.preventDefault();
    updateTopState();
    //create new Date object
    let customDate = new Date();
    //get current hour and minute in 12 hour format
    const tstamp =
      (customDate.getHours().toString().length === 1
        ? "0" + customDate.getHours()
        : customDate.getHours() > 12
        ? customDate.getHours() - 12
        : customDate) +
      ":" +
      (customDate.getMinutes().toString().length === 1
        ? "0" + customDate.getMinutes()
        : customDate.getMinutes()) +
      (customDate.getHours() > 12 ? " PM" : " AM");
    //create an object with data that needs to be added to messages array
    let dataToInsert = {
      id: maxId + 1,
      uid: 0,
      rid: data.id,
      text: msgToSend,
      media: null,
      tstamp: tstamp,
    };
    //call addMessage action to add message to messages array
    props.addMessage(dataToInsert);
    //set msgToSend to empty string
    setMsgToSend("");
  };
  //JSX code
  return (
    <div className="sender rel  flex align">
      <button className="fs20">
        <SentimentSatisfiedAltIcon />
      </button>
      <button className="fs20 attachment">
        {/* Menu component to open options */}
        <Menu
          anchorEl={open}
          keepMounted
          open={open}
          onClose={handleClose}
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          className="menu-option"
          transformOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
        >
          {/* Menu items to open drawer, quickreply, person, summarize, camera, image */}
          <MenuOption
            onClick={() => {
              handleClose();
              toggleDrawer();
            }}
          >
            <PollIcon />
          </MenuOption>
          <MenuOption
            onClick={() => {
              handleClose();
            }}
          >
            <QuickreplyIcon />
          </MenuOption>

          <MenuOption
            onClick={() => {
              handleClose();
            }}
          >
            <PersonIcon />
          </MenuOption>
          <MenuOption
            onClick={() => {
              handleClose();
            }}
          >
            <SummarizeIcon />
          </MenuOption>
          <MenuOption
            onClick={() => {
              handleClose();
            }}
          >
            <CameraAltIcon />
          </MenuOption>
          <MenuOption
            onClick={() => {
              handleClose();
            }}
          >
            <ImageIcon />
          </MenuOption>
        </Menu>
        {/* AttachFileIcon to open menu */}
        <AttachFileIcon onClick={handleClick} />
      </button>
      {/* Form to get user input */}
      <form style={{ flex: "1" }} onSubmit={handleSubmit}>
        <input
          className="new-msg fs15"
          placeholder="Type a message"
          onChange={(event) => {
            setMsgToSend(event.target.value);
          }}
          value={msgToSend}
          id="input"
          ref={highlightInput}
        ></input>
      </form>
      {/* MicIcon to send message */}
      <button className="fs20">
        <MicIcon />
      </button>
    </div>
  );
};

//mapStateToProps and mapDispatchToProps to connect the component to redux
const mapStateToProps = (state) => {
  return {
    ...state.Chat,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addMessage: (newMsg) => dispatch(addMessage(newMsg)),
  setTopState: (mydata) => dispatch(setTopState(mydata)),
});

// connect ChatSender component to redux
export default connect(mapStateToProps, mapDispatchToProps)(ChatSender);
