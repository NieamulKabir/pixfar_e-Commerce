import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Button } from '@/components/ui/button';

const Navbar = () => {
    return (
        <nav className="w-full h-16 fixed top backdrop-blur-lg z-10">
        <div className="h-full w-full bg-[#0A192F] ">
          <div className="flex items-center justify-between w-full md:max-w-7xl h-full mx-auto ">
            <div className='flex ml-2'>
              <img className="h-8" src={logo} alt="log" />
              <span className='text-white text-2xl font-semibold mt-1 ml-1'>ixfar</span>
            </div>
            <div>
              <ul className="flex items-center ">
                <li>
                  <Button className='text-white' variant="link" asChild>
                    <Link to="/">Home</Link>
                  </Button>
                </li>
                <li>
                  <Button  className='text-white' variant="link" asChild>
                    <Link to="/products">Products</Link>
                  </Button>
                </li>
                
                {/* <li>
                  <Button variant="ghost">
                    <HiOutlineSearch size="25" />
                  </Button>
                </li>
                <li>
                  <Cart />
                </li> */}

              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;