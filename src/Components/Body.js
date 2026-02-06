import RestroCard from "./RestroCard";
// import dataList from "../utils/data";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [list, setList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  const onlineStatus = useOnlineStatus();

  console.log("Body rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.747394&lng=83.23298&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null",
    // );
    const data = await fetch("http://localhost:5000/restaurants");
    const json = await data.json();
    console.log(json);

    // const hotels = json?.data?.cards?.filter(
    //   (c) =>
    //     c.card?.card?.["@type"] ===
    //     "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    // );
    // console.log(hotels);

    // setList(hotels);
    // setFilteredList(hotels);

    setList(json);
    setFilteredList(json);
  };

  if (onlineStatus === false) {
    return <h1>Check your Internet Connection</h1>;
  }

  return (
    <div className="body-container border-2 p-4">
      <div className="search flex justify-center gap-2 mb-5">
        <input
          className="border-2 w-1/3 rounded-md pl-3"
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          className="border-2 p-1 rounded-md cursor-pointer bg-gray-100"
          onClick={() => {
            setFilteredList(
              list.filter((res) => {
                return res.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              }),
            );
          }}
        >
          Search
        </button>
        <button
          className="filter-btn border-2 p-1 rounded-md cursor-pointer  bg-gray-100"
          onClick={() => {
            setFilteredList(list.filter((res) => res.avgRating > 4));
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="card-container flex flex-wrap gap-6">
        {filteredList.map((restaurant) => (
          // <Link key={restaurant.id} to={`/restaurantMenu/${restaurant.id}`}>
          <Link key={restaurant.id} to={"/restaurantMenu/" + restaurant.id}>
            <RestroCard data={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
