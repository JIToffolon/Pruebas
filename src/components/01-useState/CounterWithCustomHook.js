
import React from "react";
import "./counter.css"
import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {

    

    const {state,increment,decrement,reset}=useCounter();

  return (
    <>
      <h1> Counter With Custom Hook {state} </h1>
      <button onClick={increment}  className="btn">+1</button>
      <button onClick={reset}  className="btn">reset</button>
      <button onClick={decrement} className="btn">-1</button>
    </>
  );
};
