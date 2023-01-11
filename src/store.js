import ReducerApp from "./reducers/ReducerApp";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    ReducerApp,
  },
});

export default store;
