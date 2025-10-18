import { use } from "react";

export default function posts({ PostUsers }) {
  const postuserdata = use(PostUsers);
  return <h1>Post-User : {postuserdata.length}</h1>;
}
