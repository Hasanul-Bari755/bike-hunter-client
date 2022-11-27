import { async } from "@firebase/util";
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import Blog from "../pages/Blog/Blog";
import AddProduct from "../pages/Dashboard/AddProduct/AddProduct";
import AllBuyers from "../pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../pages/Dashboard/AllSellers/AllSellers";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import DashBoardHome from "../pages/Dashboard/DashBoardHome/DashBoardHome";
import MyOrders from "../pages/Dashboard/MyOrders.js/MyOrders";
import MyProducts from "../pages/Dashboard/MyProducts/MyProducts";
import Payment from "../pages/Dashboard/Payment/Payment";
import Report from "../pages/Dashboard/Report/Report";
import IndivisualCtagory from "../pages/Home/Categories/IndivisualCtagory";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Errorpage from "../Shared/Errorpage/Errorpage";
import AdminRoute from "./AdminRoute";
import PrivateRoutes from "./PrivateRoutes";
import SellerRoute from "./SellerRoute";

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
    element: (
      <PrivateRoutes>
        <DashboardLayout></DashboardLayout>
      </PrivateRoutes>
    ),
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/dashboard",
        element: <DashBoardHome></DashBoardHome>,
      },
      {
        path: "/dashboard/addproduct",
        element: (
          <SellerRoute>
            <AddProduct></AddProduct>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/myproducts",
        element: (
          <SellerRoute>
            <MyProducts></MyProducts>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/allsellers",
        element: (
          <AdminRoute>
            <AllSellers></AllSellers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allusers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allbuyers",
        element: (
          <AdminRoute>
            <AllBuyers></AllBuyers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/myorders",
        element: (
          <SellerRoute>
            <MyOrders></MyOrders>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/bookings/${params.id}`),
      },
      {
        path: "/dashboard/report",
        element: (
          <AdminRoute>
            <Report></Report>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
