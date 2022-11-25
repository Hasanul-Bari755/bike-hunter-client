import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../Shared/Loading/Loading";
const MyProducts = () => {
  const { user } = useContext(AuthContext);

  const { data: myproducts = [], isLoading } = useQuery({
    queryKey: ["products", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/products?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });
  console.log(myproducts);
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2 className="text-4xl">My Products{myproducts.length}</h2>
    </div>
  );
};

export default MyProducts;
