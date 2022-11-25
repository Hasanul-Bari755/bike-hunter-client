import { useQuery } from "@tanstack/react-query";
import React from "react";
import swal from "sweetalert";

const AllSellers = () => {
  const usertype = "seller";

  const { data: sellers = [], refetch } = useQuery({
    queryKey: ["seller", usertype],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/seller?seller=${usertype}`
      );
      const data = res.json();
      return data;
    },
  });

  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary seller!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:5000/seller/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            refetch();
            swal("Poof! Your imaginary seller has been deleted!", {
              icon: "success",
            });
          });
      } else {
        swal("Your imaginary seller is safe!");
      }
    });
  };

  return (
    <div>
      <h2 className="text-4xl mb-6">All Sellers</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {sellers.map((seller, i) => (
              <tr key={seller._id}>
                <th>{i + 1}</th>
                <td>{seller.name}</td>
                <td>{seller.email}</td>
                <td>
                  <button
                    onClick={() => handleDelete(seller._id)}
                    className="btn btn-sm bg-red-500"
                  >
                    Delete{" "}
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

export default AllSellers;
