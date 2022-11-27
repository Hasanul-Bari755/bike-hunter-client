import { async } from "@firebase/util";
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import Blog from "../pages/Blog/Blog";
import AddProduct from "../pages/Dashboard/AddProduct/AddProduct";
import AllBuyers from "../pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../pages/Dashboard/AllSellers/AllSellers";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import MyOrders from "../pages/Dashboard/MyOrders.js/MyOrders";
import MyProducts from "../pages/Dashboard/MyProducts/MyProducts";
import Payment from "../pages/Dashboard/Payment/Payment";
import Report from "../pages/Dashboard/Report/Report";
import IndivisualCtagory from "../pages/Home/Categories/IndivisualCtagory";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Errorpage from "../Shared/Errorpage/Errorpage";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/category/:name",
        loader: async ({ params }) =>
          fetch(`http://localhost:5000/products/${params?.name}`),
        element: (
          <PrivateRoutes>
            <IndivisualCtagory></IndivisualCtagory>
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/dashboard",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/dashboard/myproducts",
        element: <MyProducts></MyProducts>,
      },
      {
        path: "/dashboard/allsellers",
        element: <AllSellers></AllSellers>,
      },
      {
        path: "/dashboard/allusers",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "/dashboard/allbuyers",
        element: <AllBuyers></AllBuyers>,
      },
      {
        path: "/dashboard/myorders",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/bookings/${params.id}`),
      },
      {
        path: "/dashboard/report",
        element: <Report></Report>,
      },
    ],
  },
]);

export default router;
