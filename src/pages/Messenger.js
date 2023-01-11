import React from "react";
import ChatBox from "./ChatBox";
import Inbox from "./Inbox";
// Messenger component renders the ChatBox and Inbox components to the page
function Messenger(props) {
  return (
    <>
      <div className="green-head"></div>
      <div className="messenger fixed flex">
        <Inbox />
        <ChatBox />
      </div>
    </>
  );
}
export default Messenger;
