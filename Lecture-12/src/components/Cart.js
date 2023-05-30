import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((store) => store.cart.items);

  const handleClearedCard = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h1 className="text-4xl font-bold">Cart Items</h1>

      <button className="p-2 bg-blue-200" onClick={() => handleClearedCard()}>
        Clear Cart
      </button>
      {cartItems.map((item) => {
        <FoodItem key={item.id} {...item} />;
      })}

      <FoodItem {...cartItems[0]} />
    </div>
  );
};

export default Cart;
