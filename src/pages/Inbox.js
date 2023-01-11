import React, { useState } from "react";
import { connect } from "react-redux";

import UserSection from "./subs/UserSection";
import SearchIcon from "@mui/icons-material/Search";

function Inbox(props) {
  const [list, setList] = useState("");
  // Render the component
  return (
    <div className="inbox rel flex col">
      <UserSection />
      <div className="search flex">
        <div className="search-section flex align">
          <button className="fs20">
            <SearchIcon />
          </button>
          <input
            placeholder="Search or start a new chat"
            className="fs15 font"
            // Update list state variable when input value is changed
            onChange={(event) => {
              setList(event.target.value);
            }}
          />
        </div>
      </div>
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
