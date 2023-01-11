import ReducerApp from "./reducers/ReducerApp";
import Chat from "./reducers/Chat";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    ReducerApp,
    Chat,
  },
});

export default store;
