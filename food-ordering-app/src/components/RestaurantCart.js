import { useState } from "react";
import { CDN_IMG } from "../utils/constant";

const RestaurantCart = ({ restaurants }) => {
  // console.log("Restaurant Cart is : ", restaurants);

  const [restaurant, setRestaurant] = useState(restaurants);
  let filteredProduct = [];
  console.log(restaurant);

  function topRatedRestaurant() {
    filteredProduct = restaurant.filter((ele) => {
      return ele.info.avgRating > 4;
    });

    setRestaurant(filteredProduct);
  }

  function filterAll() {
    setRestaurant(restaurants);
  }

  return (
    <>
      <div className="ml-36 mb-3">
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
        <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
          Medium Rated Restaurant
        </button>
      </div>

      <div className="flex w-full justify-center">
        <div className="w-[1600px] grid grid-cols-5 gap-5 justify-center items-center">
          {restaurant.map((ele) => (
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
    </>
  );
};

export default RestaurantCart;
