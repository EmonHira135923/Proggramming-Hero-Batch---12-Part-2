import { Suspense } from "react";
import "./App.css";
import Bottle from "./Componets/bottle";

const fetchdata = fetch("../public/bottle.json").then((res) => res.json());

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Suspense fallback={<h3>Fake Data is Loading</h3>}>
        <Bottle fetchdata={fetchdata}></Bottle>
      </Suspense>
    </>
  );
}

export default App;
