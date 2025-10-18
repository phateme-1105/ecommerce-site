import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { Link } from "react-router-dom";
import Title from "../components/Title";
import { currency } from "../constants/constants";
import useCartQueryStore from "../store/cartQueryStore";
import CartTotal from "../components/CartTotal";

const CartPage = () => {
  const cartItems = useCartQueryStore((s) => s.items);
  const increaseItem = useCartQueryStore((s) => s.increaseItem);
  const decreaseItem = useCartQueryStore((s) => s.decreaseItem);
  const removeItem = useCartQueryStore((s) => s.removeItem);
  return (
    <div className="container">
      <div className="block">
        <div className="text-2xl pb-8">
          <Title text1="YOUR" text2="CART" />
        </div>
        <div>
          {cartItems.map((i, index) => (
            <div
              key={index}
              className="py-4 border-b border-gray-200  text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              <Link to={`/product/${i.id}`}>
                <div className="flex items-center gap-6">
                  <img
                    src={i.image}
                    alt={i.name}
                    className="w-16 sm:w-20 object-cover"
                  />
                  <div>
                    <p className="text-xs sm:text-lg font-medium">{i.name}</p>
                    <div className="text-sm  sm:text-lg flex items-center gap-5 mt-3">
                      <p>
                        {currency}
                        {i.price * i.quantity}
                      </p>
                      <p className="border bg-slate-50 px-2 sm:px-3 sm:py-1 rounded">
                        {i.size}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="flex max-w-[100px] items-center border-gray-200 border rounded text-primary font-medium ">
                <div
                  onClick={() => decreaseItem(i.id, i.size)}
                  className="flex-1 grid place-items-center cursor-pointer p-2"
                >
                  <IoMdRemove />
                </div>
                <div className="p-2">{i.quantity}</div>
                <div
                  onClick={() => increaseItem(i)}
                  className="flex-1 grid place-items-center cursor-pointer p-2"
                >
                  <IoMdAdd />
                </div>
              </div>
              <div
                onClick={() => removeItem(i.id, i.size)}
                className="text-xl cursor-pointer"
              >
                <IoMdClose className="text-gray-500  hover:text-red-500 transition" />
              </div>
            </div>
          ))}{" "}
        </div>
      </div>
      <div className="block">
        <div className="flex justify-end">
          <div className="w-full sm:w-[450px]">
            <CartTotal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
