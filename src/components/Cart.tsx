import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { HiOutlineShoppingCart } from "react-icons/hi";

import { useAppSelector } from "@/redux/hooks";
import CartCard from "./CartCard";
import { Button } from "./ui/button";

export default function Cart() {
  const { products, total } = useAppSelector((state) => state.cart);

  const cartItemCount = useAppSelector((state) =>
    state.cart.products.reduce(
      (total, product) => total + (product.quantity || 0),
      0
    )
  );

  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost">
          <HiOutlineShoppingCart size="25" />
        </Button>
      </SheetTrigger>
      <SheetContent className="relative h-[100vh] w-full md:max-w-3xl flex flex-col p-0">
        <SheetHeader className="p-6 h-[100px]">
          <SheetTitle className="text-primary">Cart</SheetTitle>
          <div className="flex justify-between">
            <h1 className="mr-10">
              {" "}
              <span className="font-semibold text-primary">
                Total Price :
              </span>{" "}
              {total.toFixed(2)}
            </h1>
            <h1>
              <span className="font-semibold text-primary">Total items :</span>{" "}
              {cartItemCount}
            </h1>
          </div>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto px-6">
          <div className="space-y-4">
            {products.map((product) => (
              <CartCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        <div className="p-6 bg-gray-100 border-t">
          <Button className="w-full">Checkout</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
