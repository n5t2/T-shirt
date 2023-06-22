import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet, } from "react-router-dom";
import { createContext } from "react";
import Navbar from "./Nav-bar/Navbar";
import Home from "./router/Home";
import Offers from "./router/Offers";
import Men from "./router/Men";
import Women from "./router/Women";
import Kids from "./router/Kids";
import ContactPage from "./router/Contacts";
import AboutUs from "./router/AboutUs";
import FootballTops from "./router/FootballTops";
import "./App.css";




export const ThemeContext = createContext(null);
const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  
  </>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "Offers",
        element: <Offers />,
      },
      {
        path: "Men",
        element: <Men />,
      },
      {
        path: "AboutUs",
        element: <AboutUs />,
      },
      {
        path: "FootballTops",
        element: <FootballTops />,
      },
      {
        path: "Women",
        element: <Women />,
      },
      {
        path: "Kids",
        element: <Kids />,
      },
      {
        path: "Contact",
        element: <ContactPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);


