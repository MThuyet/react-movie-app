import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import ScrollToTop from "@components/ScrollToTop";

const RootLayout = () => {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Outlet />
    </>
  );
};
export default RootLayout;
