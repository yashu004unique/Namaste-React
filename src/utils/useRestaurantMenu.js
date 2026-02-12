import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { MENU_URL } from "../utils/constant";

function useRestaurantMenu() {
  const [menu, setMenu] = useState(null);
  const { id } = useParams();
  // console.log(id);

  useEffect(() => {
    fetchMenu();
  }, [id]);

  const fetchMenu = async () => {
    // const data = await fetch(`http://localhost:5000/menu/${id}`);
    const data = await fetch(MENU_URL + id);
    const json = await data.json();
    // console.log(json);
    setMenu(json);
  };
  return menu;
}

export default useRestaurantMenu;
