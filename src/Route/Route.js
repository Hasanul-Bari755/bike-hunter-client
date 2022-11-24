import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import AddProduct from "../pages/Dashboard/AddProduct/AddProduct";
import IndivisualCtagory from "../pages/Home/Categories/IndivisualCtagory";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
      
        children: [
            {
                path: '/',
                element: <Home></Home>,
                
            },
            {
                path: '/signup',
                element:<SignUp></SignUp>
            },
            {
                path: '/login',
                element:<Login></Login>
                
            },
            {
                path: '/category/:name',
                element: <PrivateRoutes><IndivisualCtagory></IndivisualCtagory></PrivateRoutes>,
                loader: async ({ params }) => fetch(`http://localhost:5000/products/${params?.name}`)
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard',
                element:<AddProduct></AddProduct>
            }
        ]
    }
])

export default router;