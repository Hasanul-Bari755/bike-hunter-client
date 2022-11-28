import axios from "axios";
import React, { useEffect, useState } from "react";

import AdverticeProductShow from "./AdverticeProductShow";

const Advertise = () => {
  const [advertiseproducts, setAdvertiseProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://bike-hunter-server.vercel.app/advertiseproducts")
      .then((data) => setAdvertiseProducts(data.data));
  }, []);

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
