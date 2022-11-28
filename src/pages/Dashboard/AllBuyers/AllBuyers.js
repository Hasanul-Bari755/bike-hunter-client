import { useQuery } from "@tanstack/react-query";
import React from "react";
import swal from "sweetalert";
import { FaTrashAlt } from "react-icons/fa";

const AllBuyers = () => {
  const usertype = "buyer";

  const { data: buyers = [], refetch } = useQuery({
    queryKey: ["buyer", usertype],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/buyer?buyer=${usertype}`);
      const data = res.json();
      return data;
    },
  });

  const handleDelete = (id) => {
    console.log(id);
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary buyer!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:5000/buyer/${id}`, {
          method: "DELETE",
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            refetch();
            swal("Poof! Your imaginary buyer has been deleted!", {
              icon: "success",
            });
          });
      } else {
        swal("Your imaginary buyer is safe!");
      }
    });
  };

  return (
    <div>
      <h2 className="text-4xl mb-6">All Buyers</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {buyers.map((buyer, i) => (
              <tr key={buyer._id}>
                <th>{i + 1}</th>
                <td>{buyer.name}</td>
                <td>{buyer.email}</td>
                <td>
                  <button
                    onClick={() => handleDelete(buyer._id)}
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

export default AllBuyers;
