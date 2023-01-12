import React, { useState } from "react";
import { connect } from "react-redux";

import UserSection from "./subs/UserSection";
import InboxItem from "./subs/InboxItem";
import SearchIcon from "@mui/icons-material/Search";

// This component renders all inbox elements
// It receives props from the redux store mapped to the component
function Inbox(props) {
  const [list, setList] = useState("");
  // Destructure props
  const { user, messages } = props;

  // Get current user data who is logged in
  const data = user.filter((item) => item.chatStatus === true)[0];

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
      <div className="chatlist">
        {user
          // Filter users based on search criteria
          .filter((item) => {
            if (list === "") {
              return item;
            } else if (item.name.toLowerCase().includes(list.toLowerCase())) {
              return item;
            }
          })
          .sort((a, b) => {
            return b.currentLatest - a.currentLatest;
          })
          // Render each user in the list
          .map((item) => (
            <InboxItem meta={item} messages={messages} currentUser={data} />
          ))}
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
