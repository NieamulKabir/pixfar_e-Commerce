import { Button } from "@/components/ui/button";
import banner from "@/assets/images/banner2.png";
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "@/redux/features/products/productApi";
import ProductCard from "@/components/ProductCard";
import { IProduct } from "@/types/globalTypes";


export default function Home() {
  const { data: productsData=[] } = useGetProductsQuery(1);
  return (
    <div className="bg-[#0C1D35] min-h-screen mx-2 ">
      <div className="md:flex  justify-between items-center  max-w-7xl mx-auto ">
        <div>
          <h1 className="mt-10 md:mt-1 text-3xl md:text-4xl lg:text-6xl font-black text-primary mb-2">
            Shop the newest styles
            <br /> before they're gone
          </h1>
          <p className="text-secondary font-semibold text-xl">
            Starting From Only $17
          </p>
          <div className="text-primary mt-10 md:mt-20">
            <p>FREE SHIPPING & RETURN Free shipping on orders over $99</p>
            <p>SECURE PAYMENT pay for your order.</p>
          </div>
          <Button className="mt-5">Learn more</Button>
        </div>
        <div className="relative md:-right-14">
          <img src={banner} alt="" />
        </div>
      </div>
      <div className="max-w-7xl mx-auto pb-10 mt-10">
        <h1 className="text-primary text-3xl font-bold ml-2">Shop Now</h1>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-20  mt-10 mx-2">
          {productsData?.slice(0, 3).map((product: IProduct) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-black text-primary uppercase ">
            Get your desire product here
          </h1>
          <Button className="mt-10" asChild>
            <Link to="/products">Browse all products</Link>
          </Button>
        </div>
      </div>
      
    </div>
  );
}
