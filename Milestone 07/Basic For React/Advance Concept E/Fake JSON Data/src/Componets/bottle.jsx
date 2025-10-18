import { use } from "react";
import { Bottes } from "./bottes";

export default function Bottle({ fetchdata }) {
  const bottledata = use(fetchdata);
  return (
    <div>
      <h1>Total Data : {bottledata.length} </h1>
      {bottledata.map((data, index) => (
        <Bottes key={index} data={data}></Bottes>
      ))}
    </div>
  );
}
