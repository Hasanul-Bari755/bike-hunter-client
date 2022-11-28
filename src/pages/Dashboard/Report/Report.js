import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import swal from "sweetalert";

const Report = () => {
  const { data: reportedProducts = [], refetch } = useQuery({
    queryKey: ["reportedproducts"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/reportedproducts", {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = (await res).json();
      return data;
    },
  });

  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, your reported product!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:5000/reportedProductDelete/${id}`, {
          method: "DELETE",
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            refetch();
            swal("Poof! Your product has been deleted!", {
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
      <h2 className="text-4xl mb-6">Reported Products</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Product Name</th>
              <th>Seller Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {reportedProducts.map((reportedProduct, i) => (
              <tr key={reportedProduct._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-20 rounded">
                      <img
                        src={reportedProduct.productPhoto}
                        alt="Tailwind-CSS-Avatar-component"
                      />
                    </div>
                  </div>
                </td>
                <td>{reportedProduct.productName}</td>
                <td>{reportedProduct.sellerName}</td>
                <td>
                  <button
                    onClick={() => handleDelete(reportedProduct._id)}
                    className="btn btn-sm bg-red-400 h-10"
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

export default Report;
