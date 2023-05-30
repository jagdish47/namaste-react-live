import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { id } = useParams();

  const [restaurant, setRestaurant] = useState({});
  console.log(restaurant.cards[0].card.card.info);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=3241&submitAction=ENTER"
    );
    const json = await data.json();

    console.log(json);

    setRestaurant(json.data);
  }

  // if (!restaurant) {
  //   return <Shimmer />;
  // }
  // console.log(restaurant.data);

  return (
    <div>
      <h1>{data.areaName}</h1>
    </div>
  );
};

export default RestaurantMenu;
