import { useState } from "react";
export default function Counter() {
  const [count, setcount] = useState(0);

  function addcount() {
    const newcnt = count + 1;
    setcount(newcnt);
  }

  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={addcount}>Add</button>
    </>
  );
}
