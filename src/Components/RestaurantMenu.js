// import { useParams } from "react-router";
// import dataList from "../utils/data";

// const RestaurantMenu = () => {
//   const { id } = useParams();
//   console.log(id);
//   const restaurant = dataList.find((item) => item.card.id === id);

//   return (
//     <div className="menu-container m-4">
//       <h1 className="font-bold text-3xl">{restaurant.card.name}</h1>
//       <p>{restaurant.card.cuisines.join(", ")}</p>

//       <h3 className="mt-4 font-semibold text-2xl">Menu</h3>
//       <ul>
//         {restaurant.card.menu.map((dish, index) => (
//           <li className="text-xl" key={index}>
//             {dish.item} - ₹{dish.price}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default RestaurantMenu;
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

function RestaurantMenu() {
  const [menu, setMenu] = useState(null);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetchMenu();
  }, [id]);

  const fetchMenu = async () => {
    // const data = await fetch(`http://localhost:5000/menu/${id}`);
    const data = await fetch("http://localhost:5000/menu/" + id);
    const json = await data.json();
    console.log(json);
    setMenu(json);
  };

  if (!menu) {
    return <h2>Loading menu...</h2>; // guard against null
  }

  return (
    <div className="m-5">
      <h1 className="font-bold text-2xl my-6">{menu.restaurant}</h1>
      {menu.categories.map((catg) => (
        <div key={catg.name}>
          <ul>
            {catg.items.map((item, idx) => (
              <li key={idx} className="py-1">
                <span>{item.name}</span>
                <span> - </span>
                <span>₹{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default RestaurantMenu;
