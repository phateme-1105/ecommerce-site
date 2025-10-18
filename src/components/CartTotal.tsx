import React from "react";
import useCartQueryStore from "../store/cartQueryStore";
import Title from "./Title";
import { currency, delivery_fee } from "../constants/constants";

const CartTotal = () => {
  const totalPrice = useCartQueryStore((s) => s.totalPrice);
  return (
    <div className="w-full ">
      <div className="text-2xl">
        <Title text1="CART" text2="TOTALS" />
      </div>

      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between border-b pb-2 border-gray-300">
          <p>Subtotal</p>
          <p>
            {currency} {totalPrice}.00
          </p>
        </div>

        <div className="flex justify-between border-b pb-2 border-gray-300">
          <p>Shipping Fee</p>
          <p>
            {totalPrice !== 0
              ? `${currency} ${delivery_fee}.00`
              : `${currency} 0.00`}
          </p>
        </div>
        <div className="flex justify-between border-b pb-2 border-gray-300">
          <p>Total</p>
          <p>
            {totalPrice !== 0
              ? `${currency} ${delivery_fee + totalPrice}.00`
              : `${currency} 0.00`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
