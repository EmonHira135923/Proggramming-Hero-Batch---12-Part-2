import React, { use, useState } from "react";
import { Link } from "react-router";

const Users = ({ messagepromise }) => {
  const usersdata = use(messagepromise);
  console.log(usersdata);
  const [newuser, setNewuser] = useState(usersdata);
  const handleform = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    console.log("Form Value ", email, name);
    const newUsers = { name, email };
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newUsers),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("After added data", data);
        if (data.insertedId) {
          newuser._id = data.insertedId;
          const NewUser = [...usersdata, newuser];
          setNewuser(NewUser);
          alert("Database Data Added Succesfully", data);
        }
        e.target.reset();
      });
  };

  const handledelete = (id) => {
    console.log("delete", id);
    fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <div>
        <form onSubmit={handleform}>
          <input type="text" name="name" id="" />
          <br />
          <input type="email" name="email" id="" />
          <br />
          <br />
          <button>Add To Data</button>
        </form>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
          padding: "20px",
        }}
      >
        {usersdata.map((data) => (
          <div
            key={data._id}
            style={{
              textDecoration: "none",
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              textAlign: "center",
            }}
          >
            <p style={{ color: "gray", fontSize: "12px" }}>ID: {data._id}</p>
            <h2 style={{ margin: "10px 0", color: "#333" }}>{data.name}</h2>
            <h4 style={{ marginBottom: "15px", color: "#555" }}>
              {data.email}
            </h4>
            <Link
              style={{
                textDecoration: "none",
                margin: "5px",
                backgroundColor: "blue",
                color: "white",
                border: "none",
                borderRadius: "5px",
                padding: "8px 12px",
                cursor: "pointer",
              }}
              to={`/update/${data._id}`}
            >
              Edit
            </Link>
            <Link
              style={{
                textDecoration: "none",
                margin: "5px",
                backgroundColor: "green",
                color: "white",
                border: "none",
                borderRadius: "5px",
                padding: "8px 12px",
                cursor: "pointer",
              }}
              to={`/users/${data._id}`}
            >
              Details
            </Link>
            <button
              onClick={() => handledelete(data._id)}
              style={{
                backgroundColor: "#ff4d4d",
                color: "white",
                border: "none",
                borderRadius: "5px",
                padding: "8px 12px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
