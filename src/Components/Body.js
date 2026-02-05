import RestroCard from "./RestroCard";
import dataList from "../utils/data";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [list, setList] = useState(dataList);
  const [searchText, setSearchText] = useState("");
  const [filteredList, setFilteredList] = useState(dataList);
  const onlineStatus = useOnlineStatus();

  console.log("Body rendered");

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
              list.filter((res) =>
                res.card.name
                  .toLocaleLowerCase()
                  .includes(searchText.toLocaleLowerCase()),
              ),
            );
          }}
        >
          Search
        </button>
        <button
          className="filter-btn border-2 p-1 rounded-md cursor-pointer  bg-gray-100"
          onClick={() => {
            setFilteredList(list.filter((res) => res.card.avgRating > 4));
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="card-container flex flex-wrap gap-6">
        {filteredList.map((restaurant) => (
          <Link
            key={restaurant.card.id}
            // to={`/restaurantMenu/${restaurant.card.id}`}
            to={"/restaurantMenu/" + restaurant.card.id}
          >
            <RestroCard data={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
