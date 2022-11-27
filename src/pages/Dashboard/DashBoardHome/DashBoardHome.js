import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import useAdmin from "../../../hooks/useAdmin";
import useBuyer from "../../../hooks/useBuyer";
import useSeller from "../../../hooks/useSeller";
import AddProduct from "../AddProduct/AddProduct";
import AllSellers from "../AllSellers/AllSellers";
import MyOrders from "../MyOrders.js/MyOrders";

const DashBoardHome = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  const [isBuyer] = useBuyer(user?.email);

  return (
    <div>
      {isAdmin && <AllSellers></AllSellers>}
      {isSeller && <AddProduct></AddProduct>}
      {isBuyer && <MyOrders></MyOrders>}
    </div>
  );
};

export default DashBoardHome;
