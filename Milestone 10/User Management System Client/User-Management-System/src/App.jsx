import "./App.css";
import Users from "./Users";
const messagepromise = fetch("http://localhost:3000/users").then((res) =>
  res.json()
);
function App() {
  return <Users messagepromise={messagepromise}></Users>;
}

export default App;
