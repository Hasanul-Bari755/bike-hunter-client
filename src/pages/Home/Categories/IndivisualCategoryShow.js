import BookingModal from "../../BookingModal.js/BookingModal";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import swal from "sweetalert";

const IndivisualCategoryShow = ({ product, setProduct }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const {
    _id,
    sellerName,
    sellerPhoneNumber,
    location,
    category,
    condition,
    description,
    originalPrice,
    postTime,
    yearOfUse,
    resalePrice,
    productPhoto,
    productName,
    parchaseYear,
    verifystatus,
  } = product;

  const handleReport = (id) => {
    swal({
      title: "Are you sure?",
      text: "You want to report for this product!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:5000/report/${id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              swal("Your Report send to Authority", {
                icon: "success",
              });
            } else {
              swal("Already Reported Product", {
                icon: "warning",
              });
            }
          });
      } else {
        swal("Your Report don't send!");
      }
    });
  };

  return (
    <div
      data-aos="zoom-in-up"
      className="card card-compact w-full bg-base-100 shadow-xl"
    >
      <figure>
        <img className="h-72" src={productPhoto} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{productName}</h2>
        <p className="flex">
          Seller Name: {sellerName}{" "}
          {verifystatus === "verified" && (
            <FaCheck className="ml-2 text-blue-700 text-lg"></FaCheck>
          )}
        </p>
        <p>Seller Phone: {sellerPhoneNumber}</p>
        <p>Location: {location}</p>
        <p>Condition: {condition}</p>
        <p>Original Price: {originalPrice}</p>
        <p>Resale Price: {resalePrice}</p>
        <p>Parchase Year: {parchaseYear}</p>
        <p>Posted Time: {postTime}</p>
        <p>Year Of Use: {yearOfUse}</p>
        <p>Description: {description}</p>
        <div className="card-actions justify-end">
          <button onClick={() => handleReport(_id)} className="btn bg-red-400">
            Report
          </button>
          <label
            onClick={() => setProduct(product)}
            htmlFor="booking-modal"
            className="btn bg-yellow-600"
          >
            Book Now
          </label>
        </div>
      </div>
    </div>
  );
};

export default IndivisualCategoryShow;
