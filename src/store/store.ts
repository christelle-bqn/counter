import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import thunk from "redux-thunk";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { counterMiddleware } from "../middleware/counterMiddleware";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: [thunk, counterMiddleware] as const,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
