import { CDN_IMG } from "../utils/constant";

const RestaurantCart = ({ restaurants }) => {
  console.log("Restaurant Cart is : ", restaurants);
  return (
    <div className="flex w-full justify-center">
      <div className="w-[1600px] grid grid-cols-5 gap-5 justify-center items-center">
        {restaurants.map((ele) => (
          <div className="border-2 h-96 w-72 ">
            <img
              className="h-72 w-full rounded-lg"
              src={`${CDN_IMG}${ele?.info?.cloudinaryImageId}`}
              alt={ele.info.name}
            />
            <h1 className="text-lg font-bold">{ele.info.name.split(",", 3)}</h1>
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
  );
};

export default RestaurantCart;
