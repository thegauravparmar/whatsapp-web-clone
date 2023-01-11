import React from "react";
import Chat from "./Chat";
import { connect } from "react-redux";

//Function component for Messages
function Messages(props) {
  //Destructuring props to access messages
  const { messages } = props;

  //Rendering messages component
  return (
    <div className="chat flex rel col">
      {messages.map((item, index) => (
        <Chat meta={item} dir={index % 2 === 0 ? 1 : 0} />
      ))}
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
