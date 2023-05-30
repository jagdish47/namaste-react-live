import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { id } = useParams();

  const [restaurant, setRestaurant] = useState(null);

  const { areaName, city, cloudinaryImageId, costForTwoMessage, slugString } =
    restaurant?.cards[0]?.card?.card?.info;

  // console.log(areaName, city, cloudinaryImageId, costForTwoMessage);

  console.log(restaurant);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=3241&submitAction=ENTER"
    );
    const json = await data.json();

    // console.log(json);

    setRestaurant(json.data);
  }

  // if (!restaurant) {
  //   return <Shimmer />;
  // }
  // console.log(restaurant.data);

  return (
    <div>
      {/* <h1>Restaurnt id : {id} </h1>
      <h1>{slugString}</h1>
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h1>{areaName}</h1>
      <h1>{city}</h1>
      <h1>{costForTwoMessage}</h1> */}
    </div>
  );
};

export default RestaurantMenu;
