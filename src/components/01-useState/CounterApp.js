import React, { useState } from "react";
import './counter.css';

export const CounterApp = () => {

    const [state, setState ] = useState({counter1:10,counter2:20,counter3:30,counter4:40
    })

    const {counter1,counter2,counter3,counter4}=state;

  return (
    <>
      <h1> Counter1 {counter1} </h1>
      <h1> Counter2 {counter2} </h1>
      <h1> Counter3 {counter3} </h1>
      <h1> Counter4 {counter4} </h1>
      <hr />
      <button onClick={()=>{setState({
        
        ...state,
        
        counter1:counter1+1})}} className="btn btn-primary">+1</button>
    </>
  );
};
