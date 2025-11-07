import React from "react";
import "./UserData2.css";
import { Link } from "react-router";

const UserData2 = ({ value }) => {
  // console.log(value);
  return (
    <div className="Data-2">
      <h1>{value.name}</h1>
      <p>{value.email}</p>
      <p>
        <small>{value.phone}</small>
      </p>
      <Link to={`/Users2/${value.id}`}>Show Details</Link>
    </div>
  );
};

export default UserData2;
