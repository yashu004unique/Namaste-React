import RestroCard from "./RestroCard";
import dataList from "../utils/data";
import { useEffect, useState } from "react";

const Body = () => {
  const [list, setList] = useState(dataList);
  const [searchText, setSearchText] = useState("");
  const [filteredList, setFilteredList] = useState(dataList);

  // const fetchData = async () => {
  //   const data = await fetch(
  //     "https:api.allorigins.win/raw?url=https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.747394&lng=83.23298&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
  //   );

  //   const json = await data.json();

  //   console.log(json);
  //   const hotels = json?.data?.cards?.filter(
  //     (c) =>
  //       c.card?.card?.["@type"] ===
  //       "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
  //   );

  //   setList(hotels || []);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const url =
  //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.747394&lng=83.23298&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null";
  // fetch(`htpps://proxy.corsfix.com/?${url}`)
  //   .then((res) => res.json())
  //   .then((data) => console.log(data))
  //   .catch((err) => console.error(err));

  console.log("Body rendered");

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
          <RestroCard key={restaurant.card.id} data={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

// <div className="card-container">
//   {list.map((restaurant) => (
//     <RestroCard key={restaurant.card.card.info.id} data={restaurant} />
//   ))}
// </div>

// https:corproxy.io/

// ("https://corproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.747394&lng=83.23298&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
