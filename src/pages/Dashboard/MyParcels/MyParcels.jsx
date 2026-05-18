import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { MdDelete } from "react-icons/md";
import { FaEdit, FaEye } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router";

const MyParcels = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["myParcels", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user?.email}`);
      return res.data;
    },
  });

  const handleParcelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/parcel/${id}`).then((res) => {
          if (res.data.deletedCount) {
            // refresh the ui after deleing
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your parcel request has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  console.log(parcels);

  return (
    <div>
      <p>my parcels page {parcels.length}</p>
      <div className="overflow-x-auto rounded-box border border-base-content/5 text-center">
        <table className="table text-center">
          {/* head */}
          <thead>
            <tr>
              <th>Actions</th>
              <th>Parcel Type</th>
              <th>Parcel Name</th>
              <th>Parcel Weight</th>
              {/* <th>Sender Name</th> */}
              {/* <th>Sender Email</th>
              <th>Sender Address</th>
              <th>Sender Phone</th>
              <th>Sender Region</th>
              <th>Sender District</th>
              <th>Pickup Instruction</th> */}
              <th>Receiver Name</th>
              <th>Receiver Email</th>
              {/* <th>Receiver Address</th>
              <th>Receiver Regin</th>
              <th>Receiver District</th> */}
              <th>Cost</th>
              <th>Payment</th>
              <th>Delivery Status</th>
              {/* <th>Parcel Send</th> */}
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, id) => (
              <tr key={id}>
                <td className="flex gap-2">
                  <button className="btn btn-primary">
                    <FaEye />
                  </button>
                  <button className="btn btn-warning">
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleParcelDelete(parcel._id)}
                    className="btn btn-error"
                  >
                    <MdDelete />
                  </button>
                </td>
                <td>{parcel["parcel-type"]}</td>
                <td>{parcel["parcel-name"]}</td>
                <td>{parcel["parcel-weight"]}</td>
                {/* <td>{parcel["sender-name"]}</td>
                <td>{parcel["sender-email"]}</td>
                <td>{parcel["sender-address"]}</td>
                <td>{parcel["sender-phone"]}</td>
                <td>{parcel["sender-region"]}</td>
                <td>{parcel["sender-district"]}</td>
                <td>{parcel["pickup-instruction"]}</td> */}
                <td>{parcel["receiver-name"]}</td>
                <td>{parcel["receiver-email"]}</td>
                {/* <td>{parcel["receiver-address"]}</td>
                <td>{parcel["receiver-region"]}</td>
                <td>{parcel["receiver-district"]}</td> */}
                <td>{parcel["cost"]}</td>
                <td>
                  {parcel.paymentStatus === "paid" ? (
                    <span className="text font-bold text-green-500">Paid</span>
                  ) : (
                    <Link
                      to={`/dashboard/payment/${parcel._id}`}
                      className="btn btn-sm btn-primary text-black font-bold"
                    >
                      Pay
                    </Link>
                  )}
                </td>
                <td>{parcel.deliveryStatus}</td>
                {/* <td>{parcel["createdAt"]}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyParcels;
