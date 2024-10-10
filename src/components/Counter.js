import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/index";
const Counter = () => {
  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(10)); // {type: 'SOME_UNIQUE_IDENTIFIER', payload: 10}
  };
  const decreaseHandler = () => {
    dispatch(counterActions.decrease(2));
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };
  
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);
 

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={increaseHandler}>increase by five</button>
      <button onClick={decreaseHandler}>decrease by two</button>
    </main>
  );
};

export default Counter;
