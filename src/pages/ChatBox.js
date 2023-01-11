import React from "react";
import { connect } from "react-redux";
import Initial from "./Initial";

// This component renders the entire chat box.
function ChatBox(props) {
  return <Initial />;
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
