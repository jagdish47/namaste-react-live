import { IMG_CDN_URL } from "../config";

const FoodItem = ({ name, description, cloudinaryImageId, price }) => {
  return (
    <div
      className="h-96 w-96 p-4 shadow-xl

    "
    >
      <img className="w-96" src={IMG_CDN_URL + cloudinaryImageId} />
      <h1>{name}</h1>
      <h2>{cuisines.join(" ")}</h2>
      <h3>{locality}</h3>
    </div>
  );
};

export default FoodItem;
