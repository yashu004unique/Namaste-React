import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
// import Grocery from "./Components/Grocery";   implemented lazy loading
import { lazy, Suspense } from "react";
const Grocery = lazy(() => import("./Components/Grocery"));
import UserContext from "./utils/Context/UserContext";
import { useState } from "react";

const AppLayout = () => {
  const [userName, setUserName] = useState("Yashu");
  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div>
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <AboutUs /> },
      { path: "/contact", element: <ContactUs /> },
      { path: "/restaurantMenu/:id", element: <RestaurantMenu /> },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading..</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
