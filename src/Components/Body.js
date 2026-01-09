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
    <div className="body-container">
      <div className="search">
        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setFilteredList(
              list.filter((res) =>
                res.card.name
                  .toLocaleLowerCase()
                  .includes(searchText.toLocaleLowerCase())
              )
            );
          }}
        >
          Search
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            setFilteredList(list.filter((res) => res.card.avgRating > 4));
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="card-container">
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
