import { useQuery } from "@tanstack/react-query";
import React from "react";

const AllSellers = () => {
  const usertype = "seller";

  const { data: sellers = [] } = useQuery({
    queryKey: ["seller", usertype],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/seller?seller=${usertype}`
      );
      const data = res.json();
      return data;
    },
  });

  return (
    <div>
      <h2 className="text-4xl">All Sellers</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {sellers.map((seller, i) => (
              <tr>
                <th>{i + 1}</th>
                <td>{seller.name}</td>
                <td>{seller.email}</td>
                <td>Blue</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSellers;
