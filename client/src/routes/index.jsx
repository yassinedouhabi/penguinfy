import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import NavbarLayout from "../layouts/NavbarLayout";
import FooterLayout from "../layouts/NavbarLayout";
import NavbarFooterLayout from "../layouts/NavbarFooterLayout";
import HomePage from "../pages/HomePage";
import Search from "../pages/Search";
import Downloads from "../pages/Downloads";
import Settings from "../pages/Settings";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <>
        {/* Routes with only Navbar */}
        <Route element={<NavbarLayout />}>
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Routes with only Footer */}
        <Route element={<FooterLayout />}></Route>

        {/* Routes with both Navbar and Footer */}
        <Route path="/" element={<NavbarFooterLayout />}>
          <Route index element={<HomePage />} />
          <Route path="search" element={<Search />} />
          <Route path="downloads" element={<Downloads />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </>
    </>,
  ),
);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
