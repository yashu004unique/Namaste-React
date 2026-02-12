import RestroCard, { withPromotedLabel } from "./RestroCard";
// import dataList from "../utils/data";
import { useState, useContext } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurant from "../utils/useRestaurant";
import UserContext from "../utils/Context/UserContext";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();
  const { list, setList, filteredList, setFilteredList } = useRestaurant();

  console.log("Body rendered");

  if (onlineStatus === false) {
    return <h1>Check your Internet Connection</h1>;
  }

  const PromotedRestroCard = withPromotedLabel(RestroCard);

  const { loggedInUser, setUserName } = useContext(UserContext);

  return (
    <div className="body-container h-screen p-4 mt-6">
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
          className="border-2 p-1 rounded-md cursor-pointer bg-gray-100 transition transform active:scale-95"
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
          className="filter-btn border-2 p-1 rounded-md cursor-pointer  bg-gray-100 transition transform active:scale-95"
          onClick={() => {
            setFilteredList(list.filter((res) => res.avgRating > 4));
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="px-1 my-4">
        <label>UserName: </label>
        <input
          className="border-2 rounded-md pl-3"
          type="text"
          value={loggedInUser}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
      </div>
      <div className="card-container flex flex-wrap gap-9">
        {filteredList.map((restaurant) => (
          // <Link key={restaurant.id} to={`/restaurantMenu/${restaurant.id}`}>
          <Link key={restaurant.id} to={"/restaurantMenu/" + restaurant.id}>
            {restaurant.promoted ? (
              <PromotedRestroCard data={restaurant} />
            ) : (
              <RestroCard data={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
