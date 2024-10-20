import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const MainLayout = () => {
  return (
    <div className="bg-[#0A192F]">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
