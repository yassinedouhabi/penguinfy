import Footer from "../components/Common/Footer";
import { Outlet } from "react-router-dom";

function FooterLayout() {
  return (
    <>
      <Footer />
      <Outlet />
    </>
  );
}

export default FooterLayout;
