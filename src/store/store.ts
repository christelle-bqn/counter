import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: [thunk],
});
