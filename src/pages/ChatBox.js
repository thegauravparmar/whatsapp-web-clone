import React from "react";
import { connect } from "react-redux";
import Initial from "./Initial";
import ChatHeader from "./subs/ChatHeader";
import Messages from "./subs/Messages";
import ChatSender from "./subs/ChatSender";
// This component renders the entire chat box.
function ChatBox(props) {
  const { user } = props;
  // It is connected to the redux state and filters out the user that has a "chatStatus" of true.

  const data = user.filter((item) => item.chatStatus === true)[0];
  // The chatbox consists of the "ChatHeader" component, the "Messages" component, and the "ChatSender" component.
  // If there is no user with a "chatStatus" of true, the "Initial" component is rendered instead.

  return data ? (
    <div className="chatbox flex rel col">
      <ChatHeader />
      <Messages />
      <ChatSender />
    </div>
  ) : (
    <Initial />
  );
}

// Connects the component to the redux state
const mapStateToProps = (state) => {
  return {
    ...state.Chat,
  };
};

// Connects the component to redux dispatch
const mapDispatchToProps = (dispatch) => {
  return {
    setState: (loaded) => dispatch({ type: "CHAT_STATE" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatBox);
