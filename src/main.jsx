import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TVShowDetail from "@pages/TVShowDetail.jsx";
import MovieDetail from "@pages/MovieDetail.jsx";
import HomePage from "@pages/HomePage";
import RootLayout from "@pages/RootLayout.jsx";
import ModalProvider from "@context/ModalProvider";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/movie/:movieId",
        element: <MovieDetail />,
      },
      {
        path: "/tv/:movieId",
        element: <TVShowDetail />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ModalProvider>
      <RouterProvider router={router} />
    </ModalProvider>
  </StrictMode>,
);
