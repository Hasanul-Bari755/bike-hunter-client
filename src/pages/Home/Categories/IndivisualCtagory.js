import React, { useState } from "react";

import { useLoaderData } from "react-router-dom";
import IndivisualCategoryShow from "./IndivisualCategoryShow";

const IndivisualCtagory = () => {
  const products = useLoaderData();
  //const [title, setTitle] = useState('');

  return (
    <div>
      {/* <h2 className='text-4xl text-center text-yellow-600'>{title}</h2> */}
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <IndivisualCategoryShow
            key={product._id}
            product={product}
          ></IndivisualCategoryShow>
        ))}
      </div>
    </div>
  );
};

export default IndivisualCtagory;
