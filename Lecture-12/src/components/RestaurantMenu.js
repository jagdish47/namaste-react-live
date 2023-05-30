import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { id } = useParams();

  const restaurant = useRestaurant(id);

  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem("Grapes"));
  };

  // const [restaurant, setRestaurant] = useState(null);

  // const { areaName, city, cloudinaryImageId, costForTwoMessage, slugString } =
  //   restaurant?.cards[0]?.card?.card?.info;

  // console.log(areaName, city, cloudinaryImageId, costForTwoMessage);

  // if (!restaurant) {
  //   return <Shimmer />;
  // }
  // console.log(restaurant.data);

  return (
    <div>
      <button className="p-2 m-2 bg-green-100" onClick={() => handleAddItem()}>
        Add Item
      </button>

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
