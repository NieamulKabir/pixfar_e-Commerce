import { useAppDispatch } from "@/redux/hooks";
import { Button } from "./ui/button";
import {
  addToCart,
  removeFromCart,
  removeOneFromCart,
} from "@/redux/features/cart/cartSlice";
import { HiMinus, HiOutlinePlus, HiOutlineTrash } from "react-icons/hi";

import { IProduct } from "@/types/globalTypes";
interface CartCardProps {
  product: IProduct;
}
const CartCard: React.FC<CartCardProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  return (
    <div className="border p-5 flex flex-col md:flex-row justify-between rounded-md bg-gray-300">
      <div className="md:border-r pr-0 md:pr-5 shrink-0 flex justify-center">
        <img
          src={product?.image}
          alt=""
          className="h-32 w-full md:w-40 rounded-lg"
        />
      </div>
      <div className="px-2 flex flex-col gap-3 ">
        <h1 className="text-lg">{product?.title}</h1>
        <p>Quantity: {product.quantity}</p>
        <p className="text-xl">
          Total Price: {(product.price * product.quantity!).toFixed(2)}
        </p>
      </div>
      <div className="flex md:flex-col items-center md:items-end gap-2 mt-4 md:mt-0 md:pl-5">
        <Button onClick={() => dispatch(addToCart(product))}>
          <HiOutlinePlus size="20" />
        </Button>
        <Button onClick={() => dispatch(removeOneFromCart(product))}>
          <HiMinus size="20" />
        </Button>
        <Button
          onClick={() => dispatch(removeFromCart(product))}
          variant="destructive"
          className="bg-red-500 hover:bg-red-400"
        >
          <HiOutlineTrash size="20" />
        </Button>
      </div>
    </div>
  );
};

export default CartCard;
