import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../Shared/Loading/Loading";
import toast from "react-hot-toast";
import swal from "sweetalert";
import { FaTrashAlt } from "react-icons/fa";

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
        `https://bike-hunter-server.vercel.app/products?email=${user?.email}`
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
    fetch(`https://bike-hunter-server.vercel.app/advertise/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
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

  const handleDelete = (id) => {
    console.log(id);
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary product!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://bike-hunter-server.vercel.app/myproduct/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            refetch();
            swal("Poof! Your imaginary product has been deleted!", {
              icon: "success",
            });
          });
      } else {
        swal("Your imaginary product is safe!");
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
                <td>BDT: {myproduct.resalePrice}</td>
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
                  <button
                    onClick={() => handleDelete(myproduct._id)}
                    className="btn btn-sm bg-red-500 h-10"
                  >
                    <FaTrashAlt className="h-8"></FaTrashAlt>
                  </button>
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
