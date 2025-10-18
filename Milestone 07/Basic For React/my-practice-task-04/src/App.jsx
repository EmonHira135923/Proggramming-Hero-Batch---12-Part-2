import { Suspense } from "react";
import Users from "./fetch_data";
import User from "./Users";
import "./App.css";

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

const friendsusers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      {/* <Suspense fallback={<h3>Data Loading....</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}
      <Suspense fallback={<h4>All Users Coming...</h4>}>
        <User friendsusers={friendsusers()}></User>
      </Suspense>
    </>
  );
}

export default App;
