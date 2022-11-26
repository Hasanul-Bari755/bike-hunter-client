import React from "react";
import { useQuery } from "@tanstack/react-query";
import ShowCategories from "./ShowCategories";

const Categories = () => {
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/categories");
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="my-6">
      <h2 className="text-4xl text-center my-10 text-yellow-600">
        Products Categories
      </h2>
      <div className="grid grid-cols-3 gap-4 mb-7">
        {categories.map((categorie) => (
          <ShowCategories
            key={categorie._id}
            categorie={categorie}
          ></ShowCategories>
        ))}
      </div>
    </div>
  );
};

export default Categories;
