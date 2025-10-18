import { use } from "react";

export default function Users({ fetchUsers }) {
  const alluser = use(fetchUsers);
  console.log(alluser);
  return (
    <div>
      <h3> User : {alluser.length} </h3>
    </div>
  );
}
