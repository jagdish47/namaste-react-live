import { ImgCdnLink } from "../config";

const RestaurantCart = ({ cloudinaryImageId, name, cuisines, locality }) => {
  //   console.log(cloudinaryImageId, name, cuisines, locality);
  return (
    <div className="cart">
      <img src={`${ImgCdnLink}${cloudinaryImageId}`} alt="card image here" />
      <h1>{name}</h1>
      <h2>{cuisines.join(" ")}</h2>
      <h3>{locality}</h3>
    </div>
  );
};

export default RestaurantCart;
