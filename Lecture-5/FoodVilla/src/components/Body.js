import { restaurantList } from "../config";
import RestaurantCart from "./RestaurantCard";
import { useState } from "react";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((e) => {
    e.data.name.includes(searchText);
  });

  return filterData;
}

const Body = () => {
  const [res, setRestaurant] = useState(restaurantList);
  const [searchInput, setSearchInput] = useState();
  return (
    <>
      <div className="input-container cart-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            // console.log(e);
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            console.log(res);

            const data = filterData(searchInput, res);
            setRestaurant(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="cart-container">
        {restaurantList.map((restaurant) => {
          return (
            <RestaurantCart {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
