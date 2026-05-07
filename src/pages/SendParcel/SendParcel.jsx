import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const SendParcel = () => {
  const { register, handleSubmit, control, reset } = useForm();

  const axiosSecure = useAxiosSecure();
  console.log(axiosSecure);

  const { user } = useAuth();

  const serviceCenters = useLoaderData();
  const regionDuplicate = serviceCenters.map((c) => c.region);
  const regions = [...new Set(regionDuplicate)];

  const senderRegion = useWatch({
    control,
    name: "sender-region",
  });

  const districtsByRegion = (region) => {
    const regionDistricts = serviceCenters.filter((c) => c.region === region);
    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };

  const receiverRegion = useWatch({
    control,
    name: "receiver-region",
  });

  const handleSendParcel = (data) => {
    const isDocument = data["parcel-type"] === "document";
    const isSameDistrict =
      data["sender-district"] === data["receiver-district"];
    console.log(isSameDistrict);
    const isWeight = data["parcel-weight"];

    let cost = 0;
    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    }

    if (!isDocument && isWeight <= 3) {
      cost = isSameDistrict ? 110 : 150;
    }

    if (!isDocument && isWeight > 3) {
      const minCharge = isSameDistrict ? 110 : 150;
      const extraWeight = isWeight - 3;
      const extraCharge = isSameDistrict
        ? extraWeight * 40
        : extraWeight * 40 + 40;

      cost = minCharge + extraCharge;
    }

    console.log(cost);
    data.cost = cost;

    Swal.fire({
      title: "Agree With the Cost?",
      text: `You will be charged! ${cost} Taka`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Send the Parcel",
    }).then((result) => {
      if (result.isConfirmed) {
        // save the parcel info to the database
        axiosSecure.post("/parcels", data).then((res) => {
          console.log("after saving parcel", res.data);

          reset();
        });

        Swal.fire({
          title: "Success!",
          text: "Your parcel will be sent properly",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="space-y-5">
      <h2 className="text-5xl font-bold">Send A Parcel</h2>
      <p className="text-2xl font-bold">Enter Your Parcel Details</p>
      <hr />
      <form
        onSubmit={handleSubmit(handleSendParcel)}
        className="text-xl font-medium space-y-5"
      >
        <div className="space-y-5">
          {/* --------- Radio button---------- */}
          <div className="md:flex gap-5">
            <div>
              <label htmlFor="document">
                <input
                  type="radio"
                  name="parcel-type"
                  value="document"
                  id="document"
                  {...register("parcel-type")}
                />{" "}
                Document
              </label>
            </div>
            <div>
              <label htmlFor="non-document">
                <input
                  type="radio"
                  name="parcel-type"
                  value="non-document"
                  id="non-document"
                  {...register("parcel-type")}
                />{" "}
                Not-Document
              </label>
            </div>
          </div>
          {/* -----------parcel name & weight */}
          <div className="md:flex gap-5">
            <div className="flex-1">
              <label htmlFor="parcel-name">Parcel Name</label> <br />
              <input
                className="input w-full"
                type="text"
                name="parcel-name"
                id="parcel-name"
                {...register("parcel-name")}
              />
            </div>
            <div className="flex-1">
              <label htmlFor="parcel-weight">Parcel Weight(KG)</label> <br />
              <input
                className="input w-full"
                type="number"
                name="parcel-weight"
                id="parcel-weight"
                {...register("parcel-weight")}
              />
            </div>
          </div>
        </div>
        <hr />
        {/* -------- 2 column : Sender & Receiver Details */}
        <div className="md:flex  gap-10">
          {/* Sender Info */}
          <div className="flex-1 space-y-5">
            <p className="text-2xl font-medium">Sender Details</p>
            {/* ---------- sender name ------------- */}
            <label htmlFor="sender-name">Sender Name</label>
            <input
              {...register("sender-name")}
              defaultValue={user?.displayName}
              className="input w-full"
              type="text"
              name="sender-name"
              id="sender-name"
            />
            <br />
            {/* ---------- sender email ------------- */}
            <label htmlFor="sender-email">Sender Email</label>
            <input
              {...register("sender-email")}
              defaultValue={user?.email}
              className="input w-full"
              type="text"
              name="sender-email"
              id="sender-email"
            />
            <br />
            {/* ---------- sender address ------------- */}
            <label htmlFor="sender-address">Sender Address</label>
            <input
              {...register("sender-address")}
              className="input w-full"
              type="text"
              name="sender-address"
              id="sender-address"
            />
            <br />
            {/* ---------- sender Phone ------------- */}
            <label htmlFor="sender-phone">Sender Phone</label>
            <input
              {...register("sender-phone")}
              className="input w-full"
              type="text"
              name="sender-phone"
              id="sender-phone"
            />
            <br />
            {/* ---------- sender Regions ------------- */}
            <label htmlFor="sender-region">Sender Regions</label> <br />
            <select
              {...register("sender-region")}
              style={{ background: "white" }}
              className="select"
              name="sender-region"
              id="sender-region"
            >
              <option disabled={true} selected>
                Select One
              </option>
              {regions.map((region, i) => (
                <option key={i} value={region}>
                  {region}
                </option>
              ))}
            </select>
            <br />
            {/* ---------- sender District ------------- */}
            <label htmlFor="sender-district">Sender District</label> <br />
            <select
              {...register("sender-district")}
              style={{ background: "white" }}
              className="select"
              name="sender-district"
              id="sender-district"
            >
              <option disabled={true} selected={true} disabled>
                Select One
              </option>
              {districtsByRegion(senderRegion || " ").map((region, i) => (
                <option key={i} value={region}>
                  {region}
                </option>
              ))}
            </select>
            <br />
            {/* ---------- sender pick up instruction ------------- */}
            <label htmlFor="pickup-instruction">Pickup Instruction</label>
            <input
              {...register("pickup-instruction")}
              className="input w-full"
              type="text"
              name="pickup-instruction"
              id="pickup-instruction"
            />
          </div>
          {/* Receiver Info */}
          <div className="flex-1 space-y-5">
            <p className="text-2xl font-medium">Receiver Details</p>
            {/* ------------- Receiver Name --------------- */}
            <label htmlFor="receiver-name">Receiver Name</label>
            <input
              {...register("receiver-name")}
              className="input w-full"
              type="text"
              name="receiver-name"
              id="receiver-name"
            />
            <br />
            {/* ------------- Receiver Email --------------- */}
            <label htmlFor="receiver-email">Receiver Email</label>
            <input
              {...register("receiver-email")}
              className="input w-full"
              type="text"
              name="receiver-email"
              id="receiver-email"
            />
            <br />
            {/* ------------- Receiver Address --------------- */}
            <label htmlFor="receiver-address">Receiver Address</label>
            <input
              {...register("receiver-address")}
              className="input w-full"
              type="text"
              name="receiver-address"
              id="receiver-address"
            />
            <br />
            {/* ------------- Receiver Phone --------------- */}
            <label htmlFor="receiver-phone">Receiver Phone</label>
            <input
              {...register("receiver-phone")}
              className="input w-full"
              type="text"
              name="receiver-phone"
              id="receiver-phone"
            />
            <br />
            {/* ------------- Receiver Region --------------- */}
            <label htmlFor="receiver-phone">Receiver Region</label> <br />
            <select
              {...register("receiver-region")}
              style={{ background: "white" }}
              className="select"
              name="receiver-region"
              id="receiver-region"
            >
              <option disabled={true} selected={true}>
                Select One
              </option>
              {regions.map((region, i) => (
                <option key={i} value={region}>
                  {region}
                </option>
              ))}
            </select>
            <br />
            {/* ------------- Receiver District --------------- */}
            <label htmlFor="receiver-phone">Receiver District</label> <br />
            <select
              {...register("receiver-district")}
              style={{ background: "white" }}
              className="select"
              name="receiver-district"
              id="receiver-district"
            >
              <option disabled={true} selected>
                Select One
              </option>
              {districtsByRegion(receiverRegion).map((region, i) => (
                <option key={i} value={region}>
                  {region}
                </option>
              ))}
            </select>
            <br />
            {/* ------------- Delivery Instruction --------------- */}
            <label htmlFor="delivery-instruction">Delivery Instruction</label>
            <input
              {...register("delivery-instruction")}
              className="input w-full"
              type="text"
              name="delivery-instruction"
              id="delivery-instruction"
            />
          </div>
        </div>
        <button className="btn btn-primary text-black" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SendParcel;
