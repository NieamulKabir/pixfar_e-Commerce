import { IProduct } from "@/types/globalTypes";
import { toast } from "./ui/use-toast";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { addToCart } from "@/redux/features/cart/cartSlice";
import { useAppDispatch } from "@/redux/hooks";

interface IProps {
  product: IProduct;
}

export default function ProductCard({ product }: IProps) {
  
  const dispatch = useAppDispatch();
  const handleAddToCart = (product: IProduct) => {
    dispatch(addToCart(product));

    toast({
      description: "Product Added In the Cart",
    });
  };
  return (
    <div>
      <div className="rounded-2xl text-white bg-[#505152] h-[500px] flex flex-col justify-between items-start  overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all gap-2">
        <Link to="/" className="w-full">
          <img
            className="w-full h-[230px] "
            src={product?.image}
            alt="product"
          />
          <div className="px-3 space-y-2">
            <h1 className="text-xl font-bold ">{product?.title.slice(0,50)}</h1>
            <p className="">{product?.description.slice(0,100)}..</p>
            <p>Rating: {product?.rating?.rate}</p>
            <p className="text-sm">Price: {product?.price}</p>
          </div>
        </Link>
        <div className="px-3 mb-3">
          <Button variant="default" onClick={() => handleAddToCart(product)}>
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
}
