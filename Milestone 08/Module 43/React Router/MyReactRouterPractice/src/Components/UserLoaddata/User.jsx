import React from "react";
import { useLoaderData } from "react-router";

const User = () => {
  const userall = useLoaderData();
  console.log(userall);
  return (
    <div>
      <h1>Load Data Complete for User</h1>
    </div>
  );
};

export default User;
