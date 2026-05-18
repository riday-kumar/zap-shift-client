import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ApproveRiders = () => {
  const axiosSecure = useAxiosSecure();
  const { data: riders = [], refetch } = useQuery({
    queryKey: ["riders", "pending"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/riders`);
      return res.data;
    },
  });

  const updateRiderStatus = (rider, status) => {
    const updateInfo = {
      status: status,
      email: rider["rider-email"],
    };

    axiosSecure.patch(`/riders/${rider._id}`, updateInfo).then((res) => {
      if (res.status === 200) {
        Swal.fire({
          title: `Rider ${status} Successfully!`,
          icon: "success",
          draggable: true,
        });
        refetch();
      }
    });
  };

  const handleApproval = (rider, status) => {
    updateRiderStatus(rider, status);
  };

  const handleReject = (rider, status) => {
    updateRiderStatus(rider, status);
  };

  return (
    <div>
      <p className="text-3xl text-center font-bold">Approve Pending Riders</p>
      <p>Total Riders : {riders.length}</p>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Status</th>
              <th>Phone</th>
              <th>Action</th>
              <th>Work Status</th>
            </tr>
          </thead>
          <tbody>
            {riders.map((rider, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{rider["rider-name"]}</td>
                <td
                  className={`font-bold
                    ${
                      rider["status"] === "accept"
                        ? "text-green-500"
                        : rider["status"] === "reject"
                          ? "text-red-600"
                          : "text-blue-600"
                    }`}
                >
                  {rider["status"]}
                </td>
                <td>{rider["rider-phone"]}</td>
                <td>
                  {rider.status === "pending" ? (
                    <div className="flex gap-2">
                      {" "}
                      <button
                        onClick={() => handleApproval(rider, "accept")}
                        className="btn btn-sm btn-success text-white"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => handleReject(rider, "reject")}
                        className="btn btn-sm btn-warning text-white"
                      >
                        Reject
                      </button>
                      <button className="btn btn-sm btn-error text-white">
                        Remove
                      </button>
                    </div>
                  ) : (
                    <p>{rider.status}</p>
                  )}
                </td>
                <td>{rider?.workStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApproveRiders;
