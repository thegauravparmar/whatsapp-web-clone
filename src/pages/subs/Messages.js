import React, { useEffect, useRef } from "react";
import Chat from "./Chat";
import { connect } from "react-redux";

//Function component for Messages
function Messages(props) {
  //Destructuring props to access messages
  const { messages } = props;
  // Create a reference to the last message element
  const lastMessageRef = React.useRef(null);

  // Use the useEffect hook to scroll to the last message when it updates
  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages.length]);

  //Rendering messages component
  return (
    <div className="chat flex  col">
      {messages.map((item, index) => (
        <Chat meta={item} />
      ))}
      <div ref={lastMessageRef} />
    </div>
  );
}

//Map state to props to access state values
const mapStateToProps = (state) => {
  return {
    ...state.Chat,
  };
};

//Map dispatch to props to access dispatch method
const mapDispatchToProps = (dispatch) => {
  return {
    setState: (loaded) =>
      dispatch({ type: "CHAT_STATE", state: { loaded: loaded } }),
  };
};

//Connect component to redux store
export default connect(mapStateToProps, mapDispatchToProps)(Messages);
