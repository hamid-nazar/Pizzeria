import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import {formatCurrency} from "../../utils/helpers"
import { deleteItem, getCurrentQuantityById } from "./cartSlice";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";

function CartItem({ item }) {
  const dispatch = useDispatch();
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));
  return (
    // <li className="py-3 sm:flex sm:items-center sm:justify-between">
    //   <p className="mb-1 sm:mb-0">
    //     {quantity}&times; {name}
    //   </p>
    //   <div className="flex items-center justify-between sm:gap-6">
    //     <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
      
    //     {/* <div class="flex items-center gap-3 sm:gap-8"> */}
    //     <UpdateItemQuantity pizzaId={pizzaId} />
    //     <DeleteItem pizzaId={pizzaId} />
       
    //   </div>
    // </li>

    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>

        <UpdateItemQuantity
          pizzaId={pizzaId}
          currentQuantity={currentQuantity}
        />
        <DeleteItem pizzaId={pizzaId} />
      </div>
      </li>
  );
}

export default CartItem;

/*

<div class="flex items-center gap-3 sm:gap-8">
  <div class="flex items-center gap-2 md:gap-3">
    <button class="inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed px-2.5 py-1 md:px-3.5 md:py-2 text-sm">-</button>
    <span class="text-sm font-medium">3</span>
    <button class="inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed px-2.5 py-1 md:px-3.5 md:py-2 text-sm">+</button>
    </div>
    <button class="inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2 md:px-5 md:py-2.5 text-xs">Delete</button>
    </div>


<div class="flex items-center justify-between sm:gap-6">
  <p class="text-sm font-bold">€15.00</p>
  <div class="flex items-center gap-2 md:gap-3">
    <button class="inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed px-2.5 py-1 md:px-3.5 md:py-2 text-sm">-</button>
    <span class="text-sm font-medium">1</span>
    <button class="inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed px-2.5 py-1 md:px-3.5 md:py-2 text-sm">+</button>
    </div>
    <button class="inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2 md:px-5 md:py-2.5 text-xs">Delete</button>
    </div>

    */