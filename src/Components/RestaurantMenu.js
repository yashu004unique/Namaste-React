import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

function RestaurantMenu() {
  const menu = useRestaurantMenu();
  const [showIndex, setShowIndex] = useState();

  if (!menu) {
    return <h2>Loading menu...</h2>; // guard against null
  }

  return (
    <div className="m-5 flex flex-col items-center h-screen">
      <h1 className="font-extrabold text-2xl tracking-wide my-6">
        {menu.restaurant}
      </h1>
      {/* Accordian */}
      {menu.categories.map((catg, index) => (
        <RestaurantCategory
          key={catg.name}
          category={catg}
          // showAccordian={index === 0 && true}
          showAccordian={index === showIndex ? true : false}
          // setShowIndex={() => setShowIndex(index)}

          // Making the opened accordian close by toggle - Homework
          setShowIndex={() => setShowIndex(showIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}

export default RestaurantMenu;

// {menu.categories.map((catg)=> <RestaurantCategory key={catg.name} category={catg} />)}

// {categories.items.map((item, index)=><ItemList key={index} item={category.items} />)}
