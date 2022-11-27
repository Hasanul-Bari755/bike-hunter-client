import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../../Shared/Loading/Loading";
import AdverticeProductShow from "./AdverticeProductShow";

const Advertise = () => {
  const { data: advertiseproducts = [], isLoading } = useQuery({
    queryKey: ["advertiseproducts"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/advertiseproducts");
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      {advertiseproducts.length > 0 ? (
        <div className=" my-32 ">
          <h2 className="text-4xl text-center text-yellow-600">
            Product Advertise
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {advertiseproducts.map((advertiseproduct) => (
              <AdverticeProductShow
                key={advertiseproduct._id}
                advertiseproduct={advertiseproduct}
              ></AdverticeProductShow>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Advertise;
