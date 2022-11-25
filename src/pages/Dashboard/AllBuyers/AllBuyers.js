import { useQuery } from "@tanstack/react-query";
import React from "react";

const AllBuyers = () => {
  const usertype = "buyer";

  const { data: buyers = [] } = useQuery({
    queryKey: ["buyer", usertype],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/buyer?buyer=${usertype}`);
      const data = res.json();
      return data;
    },
  });

  return (
    <div>
      <h2 className="text-4xl">All Buyers</h2>
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
              <tr>
                <th>{i + 1}</th>
                <td>{buyer.name}</td>
                <td>{buyer.email}</td>
                <td>
                  <button className="btn btn-sm bg-yellow-600">Delete</button>
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
