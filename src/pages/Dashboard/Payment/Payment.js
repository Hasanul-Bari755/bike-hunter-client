import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";

import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51M6Sl0ChTG0VTmtke2a4jHd0RekzkJ4vyaRC79DhLjktwFeUYdupBjByJ9iWWzPDr7o6iSqgRIyrfWu6g9KTwG8r00C7aNNrEq"
);

const Payment = () => {
  const booking = useLoaderData();

  const { price, bookingProductName } = booking;

  console.log(booking);

  return (
    <div>
      <h3 className="text-3xl">Payment for {bookingProductName}</h3>
      <p className="text-xl">
        Please pay <strong>${price}</strong> for your product on{" "}
        {bookingProductName}
      </p>
      <div className="w-96 my-12">
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking}></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
