import RestroCard from "./RestroCard";
import dataList from "../utils/data";
import { useState } from "react";
const Body = () => {
  const [list, setList] = useState(dataList);

  // function filter() {
  //   // let filteredList = list.filter((res) => res.card.avgRating > 4);
  //   // setList(filteredList)

  //   setList(list.filter((res) => res.card.avgRating > 4));
  // }

  return (
    <div className="body-container">
      <div className="search">
        <input type="text" />
        <button>Search</button>
        <button
          className="filter-btn"
          onClick={() => {
            setList(list.filter((res) => res.card.avgRating > 4));
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="card-container">
        {list.map((restaurant) => (
          <RestroCard key={restaurant.card.id} data={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
