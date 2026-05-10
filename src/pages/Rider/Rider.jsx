import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Rider = () => {
  const { register, handleSubmit, control } = useForm();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const serviceCenters = useLoaderData();
  const regionDuplicate = serviceCenters.map((c) => c.region);
  const regions = [...new Set(regionDuplicate)];

  const riderRegion = useWatch({
    control,
    name: "rider-region",
  });

  const districtsByRegion = (region) => {
    const regionDistricts = serviceCenters.filter((c) => c.region === region);
    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };

  const handleSendRider = (data) => {
    console.log(data);
    axiosSecure.post("/riders", data).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          title: "Your Application has been submitted",
          icon: "success",
          draggable: true,
        });
      }
    });
  };

  return (
    <div>
      <h2 className="text-5xl text-center font-bold">Be a Rider</h2>
      <div>
        <form
          onSubmit={handleSubmit(handleSendRider)}
          className="text-xl font-medium space-y-5"
        >
          <div className="">
            {/* Rider Info */}
            <div className=" space-y-5">
              {/* ---------- Rider name ------------- */}
              <label htmlFor="rider-name">Rider Name</label>
              <input
                {...register("rider-name")}
                defaultValue={user?.displayName}
                className="input w-full"
                type="text"
                name="rider-name"
                id="rider-name"
              />
              <br />
              {/* ---------- rider email ------------- */}
              <label htmlFor="rider-email">rider Email</label>
              <input
                {...register("rider-email")}
                defaultValue={user?.email}
                className="input w-full"
                type="text"
                name="rider-email"
                id="rider-email"
              />
              <br />
              {/* ---------- rider address ------------- */}
              <label htmlFor="rider-address">rider Address</label>
              <input
                {...register("rider-address")}
                className="input w-full"
                type="text"
                name="rider-address"
                id="rider-address"
              />
              <br />
              {/* ---------- rider Phone ------------- */}
              <label htmlFor="rider-phone">rider Phone</label>
              <input
                {...register("rider-phone")}
                className="input w-full"
                type="text"
                name="rider-phone"
                id="rider-phone"
              />
              <br />
              {/* ---------- rider Driving License Number ------------- */}
              <label htmlFor="driving-license">Driving License</label>
              <input
                {...register("driving-license")}
                className="input w-full"
                type="number"
                name="driving-license"
                id="driving-license"
              />
              <br />
              {/* ---------- rider NID ------------- */}
              <label htmlFor="rider-nid">NID</label>
              <input
                {...register("rider-nid")}
                className="input w-full"
                type="number"
                name="rider-nid"
                id="rider-nid"
              />
              <br />
              {/* ---------- rider Regions ------------- */}
              <label htmlFor="rider-region">rider Regions</label> <br />
              <select
                {...register("rider-region")}
                style={{ background: "white" }}
                className="select"
                name="rider-region"
                id="rider-region"
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
              {/* ---------- rider District ------------- */}
              <label htmlFor="rider-district">rider District</label> <br />
              <select
                {...register("rider-district")}
                style={{ background: "white" }}
                className="select"
                name="rider-district"
                id="rider-district"
              >
                <option disabled={true} selected={true} disabled>
                  Select One
                </option>
                {districtsByRegion(riderRegion || " ").map((region, i) => (
                  <option key={i} value={region}>
                    {region}
                  </option>
                ))}
              </select>
              <br />
            </div>
          </div>
          <button className="btn btn-primary text-black" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Rider;
