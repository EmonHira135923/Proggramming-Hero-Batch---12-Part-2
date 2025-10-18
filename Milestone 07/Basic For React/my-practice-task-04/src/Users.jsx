import { use } from "react";
import UserValue from "./UserValue";

export default function User({ friendsusers }) {
  const person = use(friendsusers);
  return (
    <div>
      <h3>All User : {person.length} </h3>
      {person.map((val) => (
        <UserValue key={val.id} val={val}></UserValue>
      ))}
    </div>
  );
}
