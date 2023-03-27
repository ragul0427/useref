import React, { useState, useRef } from "react";

export default function Norender() {
  const [counter, setCounter] = useState(0);
  const counterRef = useRef(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  const handleRef = () => {
    counterRef.current++;
  };
  console.log("i am rendering");
  return (
    <>
      <h1>{`Counter is ${counter}`}</h1>
      <h1>{`Ref is ${counterRef.current}`}</h1>

      <button onClick={handleClick}>Increment Counter</button>
      <button onClick={handleRef}>Increment Ref</button>
    </>
  );
}