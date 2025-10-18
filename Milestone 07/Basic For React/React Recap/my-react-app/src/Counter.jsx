import { useState } from "react";

export default function Counter() {
  const [increasecount, setincreasecount] = useState(0);

  const addcount = () => {
    const newcount = increasecount + 1;
    setincreasecount(newcount);
  };

  const removecounts = () => {
    const oldcount = increasecount - 1;
    setincreasecount(oldcount);
  };

  const resets = () => {
    setincreasecount(0);
  };

  return (
    <div>
      <p>Count : {increasecount} </p>
      {increasecount > 5 && alert("Wow! You clicked more than 5 times!")}
      {increasecount < 0 && alert("Oops! Negative count!")}
      <button onClick={addcount}>Add</button>
      <button onClick={removecounts}>Remove</button>
      <button onClick={resets}>Reset</button>
    </div>
  );
}
