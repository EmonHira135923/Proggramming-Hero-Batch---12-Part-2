import React from "react";
import { useLoaderData } from "react-router";

const UpdateUsers = () => {
  const updateuser = useLoaderData();
  console.log(updateuser);
  const handleupdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const editusers = { name, email };

    fetch(`http://localhost:3000/users/${updateuser._id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(editusers),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    e.target.reset();
  };
  return (
    <div>
      <h3>Update User</h3>
      <br />
      <form onSubmit={handleupdate}>
        <input type="text" name="name" id="" defaultValue={updateuser.name} />
        <br />
        <br />
        <input
          type="email"
          name="email"
          id=""
          defaultValue={updateuser.email}
        />
        <br />
        <br />
        <input type="submit" value="update-user" />
        <br />
      </form>
    </div>
  );
};

export default UpdateUsers;
