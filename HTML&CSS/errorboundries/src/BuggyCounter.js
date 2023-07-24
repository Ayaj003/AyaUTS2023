import React, { useState } from "react";

const ButtonCounter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };


  if (count === 5) {
    throw new Error("I crashed!");
  }

  return (
    <div>
      <button onClick={handleIncrement}>{count}</button>
    </div>
  );
};

export default ButtonCounter;
