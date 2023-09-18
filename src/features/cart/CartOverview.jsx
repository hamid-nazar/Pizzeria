
import {useSelector  } from "react-redux";

import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
function CartOverview() {

  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalPrice = useSelector(getTotalCartPrice);

 
  if (!totalCartQuantity) {
    return null;
  }
  return (
    <div className=" flex items-center justify-between bg-stone-800 text-stone-200 uppercase px-4 py-4 sm:px-6">
      <p className="text-stone-300 font-semibold space-x-4 sm:space-x-6  text-sm md:text-base">
        <span>{totalCartQuantity} pizzas</span>
        <span>${totalPrice}</span>
      </p>
      <Link to="cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
