import { Suspense, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./Counter";
import Batsman from "./Batsman";
import Users from "./Fetching_data";
import PostUser from "./post";

const fetchusers = fetch("https://jsonplaceholder.typicode.com/posts").then(
  (res) => res.json()
);

const PostUsers = fetch(
  "https://jsonplaceholder.typicode.com/posts/1/comments"
).then((res) => res.json());

function App() {
  // function 1
  function btn1() {
    alert("Clicked Me 1");
  }

  // function 2
  function btn2(num) {
    const sum = num + 5;
    alert(`Btn Clicked - 2 : ${sum}`);
  }

  // function 3
  const btn3 = () => {
    alert("Btn Clicked 3");
  };

  const btn4 = (val) => {
    const ans = val * 5;
    alert(`Btn Clicked 4 ::--> ${ans}`);
  };

  return (
    <>
      <h1>Vite + React</h1>
      {/* <div className="bt-div">
        <button onClick={btn1}>Click Me 1</button>
        <br />
        <button onClick={() => btn2(4)}>Click Me 2</button>
        <br />
        <button onClick={btn3}>Click Me 3</button>
        <br />
        <button
          onClick={() => {
            btn4(4);
          }}
        >
          Click Me 4
        </button>
        <br />
        <button
          onClick={() => {
            alert("Clicked Btn 5");
          }}
        >
          Click Me 5
        </button>
        <br />
      </div> */}
      {/* <Counter></Counter> */}

      {/* Batsman Count  */}

      {/* <Batsman name="Musfiqur Rahim"></Batsman>
      <Batsman name="Shakib"></Batsman> */}

      {/* <Suspense fallback={<h3>Data Loading...</h3>}>
        <Users fetchusers={fetchusers}></Users>
      </Suspense> */}

      <Suspense fallback={<h1>Post Data Loading....</h1>}>
        <PostUser PostUsers={PostUsers}></PostUser>
      </Suspense>
    </>
  );
}

export default App;
