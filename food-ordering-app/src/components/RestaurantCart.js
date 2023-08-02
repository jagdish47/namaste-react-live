import { useState, useEffect } from "react";
import { CDN_IMG } from "../utils/constant";
import Loader from "./Loader";

const RestaurantCart = () => {
  let [restaurant, setRestaurant] = useState([]);
  let [filterRestaurant, setFilterRestaurant] = useState([]);
  const [text, setText] = useState("");

  //useEffect

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.956924&lng=77.701127&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await res.json();

    setRestaurant(
      json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );

    setFilterRestaurant(
      json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
  }

  function topRatedRestaurant() {
    const filteredRes = restaurant.filter((ele) => {
      return ele.info.avgRating > 4;
    });

    setRestaurant(filteredRes);
  }

  function filterAll() {
    fetchData();
  }

  function mediumRestaurant() {
    filteredRes = restaurant.filter((ele) => {
      return ele.info.avgRating <= 3.9;
    });

    setRestaurant(filteredRes);
  }

  console.log(text);

  return (
    <>
      <div className="ml-36 mb-3 flex">
        <button
          onClick={filterAll}
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
        >
          All
        </button>
        <button
          onClick={topRatedRestaurant}
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mx-5"
        >
          Top Rated Restaurant
        </button>
        <button
          onClick={mediumRestaurant}
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
        >
          Medium Rated Restaurant
        </button>

        {/* Search Functionality */}
        <div>
          <input
            type={text}
            placeholder="Search Your Food"
            className="w-[500px] px-4 py-2 ml-5 rounded-md bg-gray-100 focus:outline-none"
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className="bg-gray-200 hover:bg-gray-600 text-white font-bold py-1 px-4 rounded ml-5 text-black"
            onClick={() => {
              filterRestaurant = restaurant.filter((ele) => {
                ele.info.name.toLowerCase().includes(text.toLowerCase());
              });
              setFilterRestaurant(filterRestaurant);
            }}
          >
            Search
          </button>
        </div>
      </div>

      {filterRestaurant.length > 0 ? (
        <div className="flex w-full justify-center">
          <div className="w-[1600px] grid grid-cols-5 gap-5 justify-center items-center">
            {filterRestaurant.map((ele) => (
              <div className="border-2 h-96 w-72 ">
                <img
                  className="h-72 w-full rounded-lg"
                  src={`${CDN_IMG}${ele?.info?.cloudinaryImageId}`}
                  alt={ele.info.name}
                />
                <h1 className="text-lg font-bold">
                  {ele.info.name.split(",", 3)}
                </h1>
                <div className="flex items-center">
                  {" "}
                  {/* Adding 'flex' and 'items-center' here */}
                  <h1>
                    {ele.info.avgRating} <span>*</span>{" "}
                  </h1>
                </div>

                <p>{ele.info.cuisines.join(" ")}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default RestaurantCart;
