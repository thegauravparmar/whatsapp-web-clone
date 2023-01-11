import React, { useState } from "react";
import { connect } from "react-redux";

import UserSection from "./subs/UserSection";

function Inbox(props) {
  // Render the component
  return (
    <div className="inbox rel flex col">
      <UserSection />
    </div>
  );
}

// Map redux store state to props
const mapStateToProps = (state) => {
  return {
    ...state.Chat,
  };
};

// Map redux store dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {
    setState: (loaded) =>
      dispatch({ type: "CHAT_STATE", state: { loaded: loaded } }),
  };
};

// Connect the component to the redux store
export default connect(mapStateToProps, mapDispatchToProps)(Inbox);
