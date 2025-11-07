import React from "react";
import { useLoaderData } from "react-router";

const UserDetails = () => {
  const usersdata = useLoaderData();
  console.log(usersdata);
  return (
    <div>
      <h3>User Details</h3>
    </div>
  );
};

export default UserDetails;
