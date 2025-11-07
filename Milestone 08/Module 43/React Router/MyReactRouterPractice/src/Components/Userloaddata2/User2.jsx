import React, { use } from "react";
import UserData2 from "./UserData2";

const User2 = ({ fetchdata }) => {
  const data = use(fetchdata);
  console.log(data);
  return (
    <div>
      {data.map((value) => (
        <UserData2 key={value.id} value={value}></UserData2>
      ))}
    </div>
  );
};

export default User2;
