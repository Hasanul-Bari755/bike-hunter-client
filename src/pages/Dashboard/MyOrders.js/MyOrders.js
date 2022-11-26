import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import Loading from "../../../Shared/Loading/Loading";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const { data: myorders = [], isLoading } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/bookings?email=${user?.email}`
      );
      const data = res.json();
      return data;
    },
  });

  console.log(myorders, user?.email);

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      {myorders.length > 0 ? (
        <div>
          <h2 className="text-4xl mb-6">My Orders</h2>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {myorders.map((myorder, i) => (
                  <tr key={myorder._id}>
                    <th>{i + 1}</th>
                    <td>
                      <div className="avatar">
                        <div className="w-20 rounded">
                          <img
                            src={myorder.image}
                            alt="Tailwind-CSS-Avatar-component"
                          />
                        </div>
                      </div>
                    </td>
                    <td>{myorder.bookingProductName}</td>
                    <td>BDT: {myorder.price}</td>
                    <td>
                      <button className="btn btn-sm bg-yellow-600">Pay</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <h1>No Product Available</h1>
      )}
    </div>
  );
};

export default MyOrders;
