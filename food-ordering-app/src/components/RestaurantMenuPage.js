import { useEffect } from "react";

const RestaurantMenuPage = () => {
  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.956924&lng=77.701127&restaurantId=667&catalog_qa=undefined&submitAction=ENTER"
    );
    const res = await data.json();

    console.log(res);
  }

  return (
    <div>
      <h1>Name of the Restaurant</h1>
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
};

export default RestaurantMenuPage;
