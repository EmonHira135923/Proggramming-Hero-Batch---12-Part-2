import React from "react";
import FeatureData from "./FeatureData";

const ShowPriceData = ({ pricevalue }) => {
  //   console.log(pricevalue);

  return (
    <div className="max-w-sm bg-white shadow-lg rounded-xl p-6 m-4 hover:scale-105 transform transition duration-300">
      {/* Plan Name */}
      <h1 className="text-2xl font-bold text-gray-800 mb-2">
        {pricevalue.plan}
      </h1>

      {/* Billing Info */}
      <h2 className="text-gray-500 mb-2">{pricevalue.billing}</h2>

      {/* Price */}
      <h3 className="text-3xl font-extrabold text-indigo-600 mb-4">
        ${pricevalue.price}
      </h3>

      {/* Features */}
      <div className="mb-4">
        {pricevalue.features.map((featurevalue, index) => (
          <div key={index} className="flex items-center mb-2 text-gray-700">
            <span className="w-4 h-4 bg-indigo-500 rounded-full mr-2"></span>
            {featurevalue}
          </div>
        ))}
      </div>

      {/* Button */}
      <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition">
        Choose Plan
      </button>
    </div>
  );
};

export default ShowPriceData;
