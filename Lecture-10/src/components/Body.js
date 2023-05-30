import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/Helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [filterRestaurnts, setFilterRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  // const isOnline = useOnline();

  // console.log(isOnline);

  // if (!isOnline) {
  //   return <h1>OFFLINE</h1>;
  // }

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.513177&lng=73.8180416&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setAllRestaurant(json.data.cards[2].data.data.cards);
    setFilterRestaurants(json.data.cards[2].data.data.cards);
    // console.log(json);
  }

  //called early return

  if (!allRestaurant) return null;

  // if (filterRestaurnts.length === 0) return <h1>No restaurant</h1>;

  return allRestaurant.length === 0 ? (
    <div className="shimmer-main-container">
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
    </div>
  ) : (
    <>
      <div className="pl-36 m-4 outline-none">
        <input
          type="text"
          className="border-2"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          className="bg-black text-white px-2 ml-2"
          onClick={() => {
            const data = filterData(searchText, allRestaurant);
            setFilterRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mr-auto">
        {filterRestaurnts &&
          filterRestaurnts.map((restaurant) => {
            return (
              <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
            );
          })}
      </div>
    </>
  );
};

export default Body;
