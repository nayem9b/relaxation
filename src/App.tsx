import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/reduxHooks/hooks";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div>
      <button
        className="p-3 bg-orange-300"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <h1 className="text-black">{count}</h1>
      <div>{count}</div>
      <button className="bg-lime-600 p-3" onClick={() => dispatch(decrement())}>
        Decrememnt
      </button>
      <button
        className="bg-teal-600 p-3 mx-5"
        onClick={() => dispatch(incrementByAmount(10))}
      >
        Increment By Amount
      </button>
    </div>
  );
}

export default App;
