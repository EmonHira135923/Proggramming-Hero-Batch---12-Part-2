import React, { use } from "react";
import ShowPriceData from "./ShowPriceData";

const PriceCard = ({ PriceData }) => {
  const PriceCardData = use(PriceData);
  //   console.log(PriceCardData);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 ">
      {PriceCardData.map((pricevalue) => (
        <ShowPriceData
          key={pricevalue.id}
          pricevalue={pricevalue}
        ></ShowPriceData>
      ))}
    </div>
  );
};

export default PriceCard;
