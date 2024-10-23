import logo from '@/assets/images/logo.png';
import { RiFacebookBoxFill, RiInstagramLine } from 'react-icons/ri';

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="bg-[#0A1A2F] text-secondary p-6 sm:p-10 md:p-20">
      <div className="flex flex-col space-y-10 md:space-y-0 md:flex-row md:justify-between">
        <div className="flex items-center">
          <img className="h-8" src={logo} alt="logo" />
          <span className="text-white text-xl sm:text-2xl font-semibold ml-2">
            ixfar
          </span>
        </div>
        <div className="flex flex-wrap gap-10 sm:gap-20">
          <ul className="space-y-2">
            <li className="hover:text-white transition-colors">Upcoming</li>
            <li className="hover:text-white transition-colors">Shipping</li>
            <li className="hover:text-white transition-colors">How it works</li>
          </ul>
          <ul className="space-y-2">
            <li className="hover:text-white transition-colors">Support</li>
            <li className="hover:text-white transition-colors">Careers</li>
          </ul>
          <ul className="space-y-2">
            <li className="hover:text-white transition-colors">List your Product</li>
            <li className="hover:text-white transition-colors">Contact team</li>
          </ul>
        </div>
        <div className="flex gap-4 text-2xl">
          <RiFacebookBoxFill className="hover:text-white transition-colors cursor-pointer" />
          <RiInstagramLine className="hover:text-white transition-colors cursor-pointer" />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row w-full mt-10 sm:mt-20 gap-2 sm:gap-5 text-sm">
        <p className="hover:text-white transition-colors cursor-pointer">Privacy Policy</p>
        <p className="hover:text-white transition-colors cursor-pointer">Terms & Condition</p>
        <p className="sm:ml-auto"> &#169; Pixfar {year}</p>
      </div>
    </footer>
  );
}