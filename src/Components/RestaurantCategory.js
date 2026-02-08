import React, { useState } from "react";
import ItemList from "./ItemList";

function RestaurantCategory({ category, showAccordian, setShowIndex }) {
  const handleAccordian = () => {
    setShowIndex();
  };
  return (
    <div className="w-1/2 max-auto bg-gray-50 shadow-2xl my-4 p-4">
      {/* Accordian Header */}
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleAccordian}
      >
        <h1 className="font-bold text-xl m-0 leading-tight">
          {category.name} ({category.items.length})
        </h1>
        <p>🔽</p>
      </div>
      {/* Accordian Body */}

      <div>
        {showAccordian &&
          category.items.map((item, index) => (
            <ItemList key={index} item={item} />
          ))}
      </div>
    </div>
  );
}

export default RestaurantCategory;
