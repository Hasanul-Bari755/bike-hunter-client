import React, { useState } from "react";

import { useLoaderData } from "react-router-dom";
import BookingModal from "../../BookingModal.js/BookingModal";
import IndivisualCategoryShow from "./IndivisualCategoryShow";

const IndivisualCtagory = () => {
  const products = useLoaderData();
  const [product, setProduct] = useState(null);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <IndivisualCategoryShow
            key={product._id}
            product={product}
            setProduct={setProduct}
          ></IndivisualCategoryShow>
        ))}
      </div>
      {product && (
        <BookingModal product={product} setProduct={setProduct}></BookingModal>
      )}
    </div>
  );
};

export default IndivisualCtagory;
