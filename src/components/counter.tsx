import { incrementRandom, reset } from "../features/counterSlice";
import { RootState, useAppDispatch, useAppSelector } from "../store/store";

const Counter = () => {
  const dispatch = useAppDispatch();

  const { value, prime, randomNumber } = useAppSelector(
    (state: RootState) => state.counter
  );

  const incrementRandomCounter = () => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    dispatch(incrementRandom(randomNumber));
  };

  const resetCounter = () => {
    dispatch(reset());
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          marginBottom: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p>Count: {value}</p>
        <p>Random number: {randomNumber}</p>
        <p style={{ height: 10, width: 10 }}>{prime ? "*" : null}</p>
      </div>

      <button onClick={incrementRandomCounter} style={{ marginBottom: 20 }}>
        Add
      </button>
      <button onClick={resetCounter}>Reset</button>
    </div>
  );
};

export default Counter;
