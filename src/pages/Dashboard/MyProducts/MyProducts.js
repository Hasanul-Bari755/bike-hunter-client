import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../Shared/Loading/Loading";
import toast from "react-hot-toast";
const MyProducts = () => {
  const { user } = useContext(AuthContext);

  const {
    data: myproducts = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/products?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  const handleAdvertise = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/advertise/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Your Product Add to Advertise");
          refetch();
        } else {
          toast.error("Already Add for Advertise");
        }
      });
  };

  return (
    <div>
      <h2 className="text-4xl mb-6">My Products</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Status</th>
              <th>Advertise</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myproducts.map((myproduct, i) => (
              <tr>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-20 rounded">
                      <img
                        src={myproduct.productPhoto}
                        alt="Tailwind-CSS-Avatar-component"
                      />
                    </div>
                  </div>
                </td>
                <td>{myproduct.productName}</td>
                <td>{myproduct.resalePrice}</td>
                <td>{myproduct.status}</td>

                <td>
                  {myproduct.status === "available" && (
                    <button
                      onClick={() => handleAdvertise(myproduct._id)}
                      className="btn btn-sm bg-yellow-600"
                    >
                      ADVERTISE
                    </button>
                  )}
                </td>
                <td>
                  <button className="btn btn-sm bg-red-500">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
