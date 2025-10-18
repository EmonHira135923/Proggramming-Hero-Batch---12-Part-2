import { use } from "react";

export default function Users({ fetchusers }) {
  const userdata = use(fetchusers);
  console.log(userdata);
  return <h1> Users : {userdata.length} </h1>;
}
