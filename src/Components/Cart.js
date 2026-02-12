import ItemList from "./ItemList";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/Redux/CartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();
  const handleClearCart = (cartItems) => {
    dispatch(clearCart(cartItems));
  };
  return (
    <div className="m-5 flex flex-col items-center h-screen">
      <h1 className="font-bold text-3xl">Cart</h1>
      {cartItems.length === 0 ? (
        <h1 className="mt-5 font-medium text-xl">Your Cart is Empty</h1>
      ) : (
        <button
          onClick={() => handleClearCart(cartItems)}
          className=" bg-gray-100 rounded-xl my-7 border border-black cursor-pointer p-2 transition transform active:scale-95"
        >
          Clear Cart
        </button>
      )}
      <div className=" bg-gray-50 shadow-2xl">
        <ItemList type="cart" item={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
