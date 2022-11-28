import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider";

const BookingModal = ({ product, setProduct }) => {
  const { user } = useContext(AuthContext);
  const { productName, productPhoto, resalePrice, _id } = product;

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const location = form.location.value;
    const phone = form.phone.value;

    const booking = {
      name: user?.displayName,
      email: user?.email,
      price: resalePrice,
      image: productPhoto,
      bookingProductName: productName,
      meetLocation: location,
      phoneNumber: phone,
      productId: _id,
      paid: false,
    };

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
        toast.success("Booking Confirmed");
        setProduct(null);
      });
  };

  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Booking Information</h3>
          <form onSubmit={handleSubmit}>
            <div className="my-3">
              <input
                disabled
                defaultValue={user?.displayName}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="my-3">
              <input
                type="email"
                disabled
                defaultValue={user?.email}
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="my-3">
              <input
                disabled
                defaultValue={productName}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="my-3">
              <input
                type="text"
                disabled
                defaultValue={resalePrice}
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="my-3">
              <input
                required
                name="location"
                type="text"
                placeholder="Meeting Location"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="my-3">
              <input
                required
                name="phone"
                type="text"
                placeholder="Phone Number"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="text-center">
              <input
                className="btn bg-yellow-600"
                type="submit"
                value="Submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
