import "./App.css";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>
      <MySelf></MySelf>
      <Mycard></Mycard>
      <MyFamily
        My_Name="Emon Hossain Hira"
        M_name="Fatema"
        F_name="Mamun"
        S_name="Tanzina"
        B_Name="NONE"
      ></MyFamily>
      <MyFamily
        My_Name="Abdur Rahman Yousuf"
        M_name="Hawa"
        F_name="Nur-Alam"
        S_name="Anika"
        B_Name="Habibur Rahman Ariyan"
      ></MyFamily>
      <MyFamily
        My_Name="Robiul Alam Robi"
        M_name="Beauty"
        F_name="Zaheer"
        S_name="Tahiya"
        B_Name="NONE"
      ></MyFamily>
      <Developer name="Emon" tech="HTML"></Developer>
      <Developer name="Hossain" tech="CSS"></Developer>
      <MyLife name="Emon Hossain Hira" age="22" goal="Developer"></MyLife>
      <MyLife name="Tanzina Akter Sucona" age="20" goal="Doctor"></MyLife>
      <MyLife name="Al Mamun" age="22" goal="Navy"></MyLife>
      <MyLife name="Akbar" age="22" goal="Job Sikker"></MyLife>
      <MyLife name="Didar" age="35" goal="Farmer"></MyLife>
    </>
  );
}

function MyFamily({ My_Name, M_name, F_name, S_name, B_Name }) {
  return (
    <>
      <div className="my-family">
        <h1>My Name is : {My_Name}</h1>
        <h1>My Mother Name is : {M_name}</h1>
        <h1>My Father Name is : {F_name} </h1>
        <h1>My Sister Name is : {S_name} </h1>
        <h1>My Brother Name is : {B_Name} </h1>
      </div>
    </>
  );
}

function MyLife(props) {
  console.log(props);
  return (
    <>
      <div className="My-Life">
        <h1>My Name is : {props.name}</h1>
        <h3>My Age is : {props.age}</h3>
        <h5>My Goal is : {props.goal}</h5>
      </div>
    </>
  );
}

function Developer(props) {
  return (
    <>
      <h1>My Name is : {props.name} </h1>
      <h3>I work with : {props.tech} </h3>
    </>
  );
}

function Person() {
  const Name = "Emon Hossain Hira";
  return (
    <>
      <p
        style={{
          color: "red",
        }}
      >
        My Name is {Name}
      </p>
    </>
  );
}

function MySelf() {
  return <h3 className="h3-font">Abdur Rahman is Very Very Bad Boy.</h3>;
}

function Mycard() {
  const coloring = {
    color: "green",
  };
  return <p style={coloring}>My Name is last componet</p>;
}

export default App;
