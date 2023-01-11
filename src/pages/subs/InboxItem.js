import React from "react";
import { Link } from "react-router-dom";
import { updateChatStatus, updateChatStatusPos } from "../../actions";
import { connect } from "react-redux";

//InboxItem function displays the user profile picture, user name and last message between two users.
function InboxItem(props) {
  const { messages, currentUser, meta } = props; // destructuring props

  const { dp, id, name } = meta; // destructuring meta
  let itemUid = messages.find(
    (
      item // finding the most recent message sent by the user
    ) =>
      item.uid === id &&
      item.id ===
        Math.max(
          ...messages.filter((msg) => msg.uid === id).map((msg) => msg.id)
        )
  );
  let itemRid = messages.find(
    (
      item // finding the most recent message sent by the recipient
    ) =>
      item.rid === id &&
      item.id ===
        Math.max(
          ...messages.filter((msg) => msg.rid === id).map((msg) => msg.id)
        )
  );

  // handleChatChange function updates the chat status for the recipient
  function handleChatChange(currentUser, newid) {
    props.updateChatStatusPos(newid);
    const id = currentUser ? currentUser.id : 0;
    props.updateChatStatus(id);
  }

  // rending the user profile picture, user name and last message between two users.
  return (
    <div className="conversation rel flex align">
      <div className="you rel flex align">
        <Link className="user">
          <img src={dp} alt="User Profile" />
        </Link>
      </div>
      <div
        className="meta rel flex align"
        onClick={() => handleChatChange(currentUser, id)} // onClick triggers handleChatChange
      >
        <div className="info rel flex col">
          <h2 className="name fs15  wordwrap">{name}</h2>
          <h2 className="last-message fs13 myfontcolor wordwrap">
            {itemUid.id > itemRid ? itemUid.text : itemRid.text}
          </h2>
        </div>
        <div className="extra rel flex col align">
          <h2 className="stamp fs13 myfontcolor">
            {" "}
            {itemUid.id > itemRid ? itemUid.tstamp : itemRid.tstamp}
          </h2>
          <div className="badge rel fs13 myfontcolor"></div>
        </div>
      </div>
    </div>
  );
}

// connecting state and dispatch to props
const mapStateToProps = (state) => {
  return {
    ...state.Chat,
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateChatStatus: (id) => dispatch(updateChatStatus(id)),
  updateChatStatusPos: (id) => dispatch(updateChatStatusPos(id)),
});

// exporting connect
export default connect(mapStateToProps, mapDispatchToProps)(InboxItem);
