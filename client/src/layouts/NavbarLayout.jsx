import Navbar from "../components/Common/Navbar";
import { Outlet } from "react-router-dom";

function NavbarLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default NavbarLayout;
