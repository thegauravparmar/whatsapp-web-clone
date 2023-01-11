// This is the initial state of the App
const initialState = {
  loaded: false,
};

// This is the reducer that handles App state
export default function (state = initialState, action) {
  // Switch statement to handle different types of action
  switch (action.type) {
    case "APP_STATE":
      // Returns the state of the App
      return { ...action, ...action.state };

    // Default case if none of the action types match
    default:
      return state;
  }
}
