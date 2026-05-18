import { useQuery } from "@tanstack/react-query";
import React, { useRef, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AssignRider = () => {
  const [selectedParcel, setSelectedParcel] = useState(null);
  const riderModalRef = useRef();
  const axiosSecure = useAxiosSecure();

  const { data: parcels = [] } = useQuery({
    queryKey: ["parcels", "pending-pickup"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        "/parcels?deliveryStatus=pending-pickup",
      );
      return res.data;
    },
  });

  const { data: riders = [] } = useQuery({
    queryKey: ["riders", selectedParcel?.["sender-district"], "available"],
    enabled: !!selectedParcel,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/riders?status=accept&district=${selectedParcel?.["sender-district"]}&workStatus=available`,
      );
      return res.data;
    },
  });

  const openAssignRiderModal = (x) => {
    console.log(x);
    setSelectedParcel(x);
    riderModalRef.current.showModal();
  };

  const handleAssignRider = (rider) => {
    const riderAssignInfo = {
      riderId: rider._id,
      riderEmail: rider["rider-email"],
      riderName: rider["rider-name"],
      parcelID: selectedParcel._id,
    };

    axiosSecure
      .patch(`/parcels/${selectedParcel._id}`, riderAssignInfo)
      .then((res) => {
        if (res.data.modifiedCount) {
          riderModalRef.close();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Rider has been assigned",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <p>assign rider page {parcels.length}</p>
      <div className="overflow-x-auto rounded-box border border-base-content/5 text-center">
        <table className="table text-center">
          {/* head */}
          <thead>
            <tr>
              <th>Actions</th>
              <th>Parcel Name</th>
              <th>Cost</th>
              <th>PickUp District</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, id) => (
              <tr key={id}>
                <td className="flex gap-2">
                  <button
                    onClick={() => openAssignRiderModal(parcel)}
                    className="btn btn-primary btn-lg text-black"
                  >
                    Find Riders
                  </button>
                </td>
                <td>{parcel["parcel-name"]}</td>
                <td>{parcel["cost"]}</td>
                <td>{parcel["sender-district"]}</td>
                <td>{parcel["createdAt"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* modal */}
        {/* Open the modal using document.getElementById('ID').showModal() method */}

        <dialog
          id="my_modal_5"
          ref={riderModalRef}
          className="modal modal-bottom sm:modal-middle text-white"
        >
          <div className="modal-box">
            <h3 className="font-bold text-lg">
              Available Riders : {riders.length}
            </h3>

            <div className="overflow-x-auto">
              <table className="table table-zebra text-white">
                {/* head */}
                <thead>
                  <tr className="text-white">
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>District</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {riders.map((rider, i) => (
                    <tr key={i}>
                      <th>{i + 1}</th>
                      <td>{rider["rider-name"]}</td>
                      <td>{rider["rider-email"]}</td>
                      <td>{rider["rider-district"]}</td>
                      <td>
                        <button
                          onClick={() => handleAssignRider(rider)}
                          className="btn btn-sm btn-success"
                        >
                          Action
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default AssignRider;
