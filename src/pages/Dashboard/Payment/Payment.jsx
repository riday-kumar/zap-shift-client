import React from "react";
import { useLoaderData } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Payment = () => {
  const parcelInfo = useLoaderData();
  console.log(parcelInfo);
  const axiosSecure = useAxiosSecure();

  const handlePayment = async () => {
    const paymentInfo = {
      cost: parcelInfo.cost,
      parcelId: parcelInfo._id,
      senderEmail: parcelInfo["sender-email"],
      parcelName: parcelInfo["parcel-name"],
    };

    const res = await axiosSecure.post("/create-checkout-session", paymentInfo);
    console.log(res.data);
    window.location.href = res.data.url;
  };
  return (
    <div>
      <p>Please Pay For : {parcelInfo["parcel-name"]}</p>
      <p>parcel Cost : {parcelInfo.cost}</p>
      <button onClick={handlePayment} className="btn btn-primary text-black">
        Pay Now
      </button>
    </div>
  );
};

export default Payment;
