import "./App.css";
import { ToastContainer } from "react-toastify";
import Navvar from "./Componets/NavSection/Navvar";
import PriceCard from "./Componets/PriceCardSection/PriceCard";
import { Suspense } from "react";

const fetchdata = async () => {
  const res = await fetch("/PriceData.json");
  return res.json();
};

const PriceData = fetchdata();

function App() {
  return (
    <>
      <Navvar></Navvar>
      <Suspense
        fallback={<span className="loading loading-bars loading-xl"></span>}
      >
        <PriceCard PriceData={PriceData}></PriceCard>
      </Suspense>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
