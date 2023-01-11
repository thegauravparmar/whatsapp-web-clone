const initialState = {
  user: [],
  messages: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    //Fetching the initial state from api
    case "FETCH_INAPIITIAL_STATE":
      return {
        ...state,
        user: action.payload.user,
        messages: action.payload.messages,
        loading: false,
      };
    //Updating the state of the chat application
    case "CHAT_STATE":
      return { ...action, ...action.state };
    //Adding a message to the chat application
    case "ADD_MESSAGE":
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    //Updating a user's chat status to false
    case "UPDATE_CHAT_STATUS":
      return {
        ...state,
        user: state.user.map((user) =>
          user.id === action.id ? { ...user, chatStatus: false } : user
        ),
      };
    //Updating a user's chat status to true
    case "UPDATE_CHAT_STATUS_POS":
      return {
        ...state,
        user: state.user.map((user) =>
          user.id === action.id ? { ...user, chatStatus: true } : user
        ),
      };
    default:
      return state;
  }
}
