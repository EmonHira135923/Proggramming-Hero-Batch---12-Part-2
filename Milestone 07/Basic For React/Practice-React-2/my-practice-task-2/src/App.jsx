import "./App.css";
import Newfile from "./salat";
import Condition from "./ternary_opreator";
import ArrayObject from "./object_componet";

function App() {
  // const arr = ["Emon", "Hossain", "Hira", "Akbar"];
  const obj = [
    { id: 1, name: "Emon", age: 22 },
    { id: 2, name: "Hossain", age: 22 },
    { id: 3, name: "Hira", age: 22 },
    { id: 4, name: "Emon", age: 22 },
  ];
  return (
    <>
      <h1>Vite + React</h1>

      {/* {arr.map((m) => {
        return <ArrayObject name={m}></ArrayObject>;
      })} */}
      {obj.map((name, index) => {
        return (
          <ArrayObject
            key={name.id}
            name={name.name}
            index={index}
          ></ArrayObject>
        );
      })}

      {/* <ArrayObject></ArrayObject> */}
      {/* <Newfile name="Emon" istrue={true} isvalue={2}></Newfile>
      <Newfile name="Akbar" istrue={false} isvalue={3}></Newfile>
      <Newfile name="Akbar" istrue={false} isvalue={3}></Newfile>
      <Newfile name="Fatema" istrue={true} isvalue={5}></Newfile>
      <Newfile name="ISHA" istrue={true} isvalue={6}></Newfile>
      <Newfile name="Aslam" istrue={true} isvalue={5}></Newfile> */}

      {/* Ternary Opreator */}

      {/* <Condition name="Emon" istrue={true} food="Burger"></Condition>
      <Condition name="Hira" istrue={false} food="Burger"></Condition>
      <Condition name="Akbar" istrue={true} food="Pizza"></Condition> */}
    </>
  );
}

export default App;
