import useRestaurantMenu from "../utils/useRestaurantMenu";

function RestaurantMenu() {
  const menu = useRestaurantMenu();

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
