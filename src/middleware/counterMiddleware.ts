import { Middleware } from "@reduxjs/toolkit";

export const counterMiddleware: Middleware = (store) => (next) => (action) => {
  const isPrime = (num: number) => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
      if (num % i === 0) return false;
    return num > 1;
  };

  if (action.payload) {
    if (isPrime(action.payload)) {
      store.dispatch({ type: "counter/prime" });
    } else {
      store.dispatch({ type: "counter/noPrime" });
    }
  }

  const returnAction = next(action);

  return returnAction;
};
