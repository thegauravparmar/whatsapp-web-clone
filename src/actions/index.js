// Action creator to add a new message to the state
export const addMessage = (state) => {
  return {
    type: "ADD_MESSAGE",
    payload: state, //message payload
  };
};

// Action creator to update chat status
export const updateChatStatus = (id) => ({
  type: "UPDATE_CHAT_STATUS",
  id, //id of the chat to update
});

// Action creator to update chat status positive
export const updateChatStatusPos = (id) => ({
  type: "UPDATE_CHAT_STATUS_POS",
  id, //id of the chat to update positive
});
