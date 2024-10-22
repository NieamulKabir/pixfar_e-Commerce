import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import Cart from "../components/Cart";
import logo from "../assets/images/logo.png";
import SearchBar from "@/components/SearchBar";
import { useAppSelector } from "@/redux/hooks";

export default function Navbar() {
  const cartItemCount = useAppSelector((state) =>
    state.cart.products.reduce(
      (total, product) => total + (product.quantity || 0),
      0
    )
  );
  return (
    <nav className="w-full h-16 fixed top backdrop-blur-lg z-10">
      <div className="h-full w-full bg-[#0A192F]">
        <div className="flex items-center justify-between w-full md:max-w-7xl h-full mx-auto ">
          <div className="flex ml-2">
            <img className="h-8" src={logo} alt="log" />
            <span className="text-white text-2xl font-semibold mt-1 ml-1">
              ixfar
            </span>
          </div>
          <div>
            <ul className="flex items-center">
              <li>
                <Button className="text-white" variant="link" asChild>
                  <Link to="/">Home</Link>
                </Button>
              </li>
              <li>
                <Button className="text-white" variant="link" asChild>
                  <Link to="/products">Products</Link>
                </Button>
              </li>

              <li>
                <SearchBar />
              </li>
              <li className="text-white mx-2">
                <Cart />
                {cartItemCount > 0 && (
                  <span className="absolute top-[10px] ml-10  bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {cartItemCount}
                  </span>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
