import React from "react";

function ItemList({ item }) {
  return (
    <div className="mb-5">
      <ul>
        <li className="pt-4 pb-7  border-b w-1/2">
          <p className="font-bold text-xl">{item.name}</p>
          <p className="font-medium text-lg">₹{item.price}</p>
          <p>{item.description}</p>
        </li>
      </ul>
    </div>
  );
}

export default ItemList;
