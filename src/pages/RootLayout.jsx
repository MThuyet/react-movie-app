import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import ScrollToTop from "@components/ScrollToTop";
import { Suspense } from "react";
import Loading from "@components/Loading";

const RootLayout = () => {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default RootLayout;
