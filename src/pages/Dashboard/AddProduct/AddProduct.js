import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../contexts/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../Shared/Loading/Loading";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const conditions = [
    {
      conditionType: "Excellect",
      id: "1",
    },
    {
      conditionType: "Good",
      id: "2",
    },
    {
      conditionType: "Fair",
      id: "3",
    },
  ];
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { user } = useContext(AuthContext);
  const imageHostKey = process.env.REACT_APP_image_key;
  const navigate = useNavigate();
  const [sellerverify, setSellerverify] = useState({});

  useEffect(() => {
    console.log(user?.email);
    if (user?.email) {
      fetch(`http://localhost:5000/verifyseller?email=${user?.email}`)
        .then((res) => res.json())
        .then((sellerData) => {
          setSellerverify(sellerData);
        });
    }
  }, [user?.email]);

  const { data: categories = [], isLoading } = useQuery({
    queryKey: ["categoriestype"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/categoriestype");
      const data = await res.json();
      return data;
    },
  });

  const handleAddProduct = (data) => {
    const time = new Date().toLocaleString();
    const productPhoto = data.productPhoto[0];

    const formData = new FormData();
    formData.append("image", productPhoto);

    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgdata) => {
        if (imgdata.success) {
          console.log(imgdata.data.url);
          const product = {
            sellerName: user?.displayName,
            email: user?.email,
            sellerPhoneNumber: data.phone,
            location: data.Location,
            category: data.categories,
            condition: data.condition,
            description: data.description,
            originalPrice: data.originalPrice,
            parchaseYear: data.parchaseYear,
            productName: data.productName,
            productPhoto: imgdata.data.url,
            resalePrice: data.resalePrice,
            yearOfUse: data.yearOfUse,
            postTime: time,
            status: "available",
            verifystatus: sellerverify.verifystatus,
          };
          //save product info to the database
          fetch("http://localhost:5000/products", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((result) => {
              if (result.acknowledged) {
                toast.success(`${data.productName} is added successfully`);
                reset();
                navigate("/dashboard/myproducts");
              }
            });
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2 className="text-4xl">Add Product</h2>
      <form className="my-6" onSubmit={handleSubmit(handleAddProduct)}>
        <div className="grid grid-cols-1 lg:grid-cols-2 w-[90%] lg:w-full mx-auto">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Seller Name</span>
            </label>
            {user?.displayName && (
              <input
                defaultValue={user?.displayName}
                type="text"
                {...register("sellerName", {
                  required: "Seller Name is Required",
                })}
                className="input input-bordered w-full max-w-xs"
              />
            )}
            {errors.sellerName && (
              <p className="text-red-500">{errors.sellerName.message}</p>
            )}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Seller Phone Number</span>
            </label>
            <input
              type="text"
              {...register("phone", {
                required: "Seller Phone Numner is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.phone && (
              <p className="text-red-500">{errors.phone.message}</p>
            )}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Product Name</span>
            </label>
            <input
              type="text"
              {...register("productName", {
                required: "Product Name is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.productName && (
              <p className="text-red-500">{errors.productName.message}</p>
            )}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Product Photo</span>
            </label>
            <input
              type="file"
              {...register("productPhoto", {
                required: "Product Photo is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.productPhoto && (
              <p className="text-red-500">{errors.productPhoto.message}</p>
            )}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Location</span>
            </label>
            <input
              type="text"
              {...register("Location", {
                required: "Location is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.Location && (
              <p className="text-red-500">{errors.Location.message}</p>
            )}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Resale Price</span>
            </label>
            <input
              type="text"
              {...register("resalePrice", {
                required: "Resale price is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.resalePrice && (
              <p className="text-red-500">{errors.resalePrice.message}</p>
            )}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Original Price</span>
            </label>
            <input
              type="text"
              {...register("originalPrice", {
                required: "Original price is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.originalPrice && (
              <p className="text-red-500">{errors.originalPrice.message}</p>
            )}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Year of use</span>
            </label>
            <input
              type="text"
              {...register("yearOfUse", {
                required: "Year of use is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.yearOfUse && (
              <p className="text-red-500">{errors.yearOfUse.message}</p>
            )}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Parchase Year</span>
            </label>
            <input
              type="text"
              {...register("parchaseYear", {
                required: "Parchase year is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.parchaseYear && (
              <p className="text-red-500">{errors.parchaseYear.message}</p>
            )}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Description</span>
            </label>
            <textarea
              type="text"
              {...register("description", {})}
              className="input  w-full max-w-xs textarea textarea-bordered"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Condition</span>
            </label>
            <select
              {...register("condition", { required: true })}
              className="select input-bordered w-full max-w-xs"
            >
              <option disabled selected>
                Select Your product Condition
              </option>
              {conditions.map((condition) => (
                <option key={condition.id} value={condition?.conditionType}>
                  {condition?.conditionType}
                </option>
              ))}
            </select>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Choose Your Categories</span>
            </label>
            <select
              {...register("categories", { required: true })}
              className="select input-bordered w-full max-w-xs"
            >
              <option disabled selected>
                Select Your category
              </option>
              {categories.map((categorie) => (
                <option key={categorie._id} value={categorie?.name}>
                  {categorie?.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <br />

        <div className="text-center">
          <input
            className="btn btn-accent bg-yellow-600 text-white w-2/4 mx-auto"
            value="Submit"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
