import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/Redux/CartSlice";

function ItemList({ item, type = "menu" }) {
  const dispatch = useDispatch();
  const handleAdd = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {item.map((item, index) => (
        <div key={index} className="mt-5 flex justify-between mx-20 border-b-2">
          <ul>
            <li className="pt-4 pb-7 ">
              <p className="font-bold text-xl">{item.name}</p>
              <p className="font-medium text-lg">₹{item.price}</p>
              <p>{item.description}</p>
            </li>
          </ul>
          {type === "menu" && (
            <button
              onClick={() => handleAdd(item)}
              className="w-1/7 bg-gray-100 rounded-xl my-10 border border-black cursor-pointer transition transform active:scale-95"
            >
              ADD +
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default ItemList;
