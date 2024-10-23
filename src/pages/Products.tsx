import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import ProductCard from "@/components/ProductCard";
import { useGetProductsQuery } from "@/redux/features/products/productApi";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { IProduct } from "@/types/globalTypes";

const Products = () => {
  const [page, setPage] = useState(1);
  const { ref, inView } = useInView();
  const { data: productsData = [], isLoading, error, isFetching } = useGetProductsQuery(page);
  const searchTerm = useAppSelector((state: RootState) => state.product.searchTerm);

  const filteredProducts = productsData.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    if (inView && !isFetching) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [inView, isFetching]);

  if (isLoading && page === 1) return <div>Loading...</div>;
  if (error) return <div>Error: {error.toString()}</div>;

  return (
    <div className="bg-[#0C1D35] relative min-h-screen">
      <div className="max-w-7xl mx-auto text-white">
        <h1 className="pt-20 text-center text-primary font-bold text-3xl md:text-5xl">
          Explore All Products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-20 mx-2 mt-10">
          {filteredProducts?.map((product: IProduct) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {isFetching && <div className="text-center pb-4">Loading more...</div>}
        <div ref={ref} className="h-10" />
      </div>
    </div>
  );
};

export default Products;