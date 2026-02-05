import { useParams } from "react-router";
import dataList from "../utils/data";

const RestaurantMenu = () => {
  const { id } = useParams();
  console.log(id);
  const restaurant = dataList.find((item) => item.card.id === id);

  return (
    <div className="menu-container m-4">
      <h1 className="font-bold text-3xl">{restaurant.card.name}</h1>
      <p>{restaurant.card.cuisines.join(", ")}</p>

      <h3 className="mt-4 font-semibold text-2xl">Menu</h3>
      <ul>
        {restaurant.card.menu.map((dish, index) => (
          <li className="text-xl" key={index}>
            {dish.item} - ₹{dish.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
