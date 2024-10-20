import { useGetProductsQuery } from "@/redux/features/products/productApi";

const Home = () => {
  const { data } = useGetProductsQuery();
  console.log(data);
  return (
    <div>
      {data?.map((product) => (
        <div className=" border-2 mx-10 mb-10 text-white p-2" key={product.id}>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
