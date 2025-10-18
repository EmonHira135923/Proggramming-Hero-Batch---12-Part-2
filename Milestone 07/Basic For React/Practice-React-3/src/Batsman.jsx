import { useState } from "react";

export default function BatsmanRun({ name }) {
  const [run, setrun] = useState(0);
  const [one, setone] = useState(0);
  const [two, settwo] = useState(0);
  const [three, setthree] = useState(0);
  const [four, setfour] = useState(0);
  const [six, setsix] = useState(0);

  const singlerun = () => {
    const newsingle = run + 1;
    const singlecnt = one + 1;
    setone(singlecnt);
    setrun(newsingle);
  };

  const tworun = () => {
    const newtwo = run + 2;
    const twocnt = two + 1;
    settwo(twocnt);
    setrun(newtwo);
  };

  const threerun = () => {
    const newthree = run + 3;
    const threecnt = three + 1;
    setthree(threecnt);
    setrun(newthree);
  };

  const fourrun = () => {
    const newfour = run + 4;
    const fourcnt = four + 1;
    setfour(fourcnt);
    setrun(newfour);
  };

  const sixrun = () => {
    const newsix = run + 6;
    const sixcnt = six + 1;
    setrun(newsix);
    setsix(sixcnt);
  };

  return (
    <>
      <h1>Batsman : {name}</h1>
      <h2>Total Run : {run}</h2>

      <div>
        <p>
          <small>One : {one}</small>
        </p>
        <p>
          <small>Two : {two}</small>
        </p>
        <p>
          <small>Three : {three}</small>
        </p>
        <p>
          <small>Four : {four}</small>
        </p>
        <p>
          <small>Six : {six}</small>
        </p>
      </div>

      <div className="div-bat">
        <button onClick={singlerun}>Single Run</button>
        <br />
        <button onClick={tworun}>Two Run</button>
        <br />
        <button onClick={threerun}>Three Run</button>
        <br />
        <button onClick={fourrun}>Four Run</button>
        <br />
        <button onClick={sixrun}>Six Run</button>
        <br />
      </div>
    </>
  );
}
