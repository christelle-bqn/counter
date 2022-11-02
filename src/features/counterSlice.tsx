import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
  prime: boolean;
  randomNumber: number | null;
}

const initialState = {
  value: 0,
  prime: false,
  randomNumber: null,
} as CounterState;

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
    incrementRandom(state, action: PayloadAction<number>) {
      const randomNumber = action.payload;
      state.randomNumber = randomNumber;
      state.value += randomNumber;
    },
    prime(state) {
      state.prime = true;
    },
    noPrime(state) {
      state.prime = false;
    },
    reset(state) {
      state.value = 0;
      state.randomNumber = null;
      state.prime = false;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  incrementRandom,
  reset,
} = counterSlice.actions;

export default counterSlice.reducer;
