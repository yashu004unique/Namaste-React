import { RESTAURANT_URL } from "../utils/constant";
import { useEffect, useState } from "react";
import { RESTAURANT_URL } from "../utils/constant";

function useRestaurant() {
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_URL);
    const json = await data.json();
    // console.log(json);

    setList(json);
    setFilteredList(json);
  };

  return { list, setList, filteredList, setFilteredList };
}

export default useRestaurant;
