import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaUserMinus, FaUserShield } from "react-icons/fa6";
import Swal from "sweetalert2";

const UsersManagement = () => {
  const { user } = useAuth();
  console.log(user);
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  console.log(users);

  const handleMakeAdmin = (user) => {
    const roleInfo = { role: "admin" };
    axiosSecure.patch(`/users/${user._id}/role`, roleInfo).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${user.displayName} is now Admin`,
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
    });
  };

  const handleRemoveAdmin = (user) => {
    const roleInfo = { role: "user" };

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Change it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/${user._id}/role`, roleInfo).then((res) => {
          console.log(res.data);
          if (res.data.modifiedCount) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: `${user.displayName} is now Admin`,
              showConfirmButton: false,
              timer: 1500,
            });
            refetch();
          }
        });
      }
    });
  };

  return (
    <div>
      <p className="text text-3xl text-center font-bold">
        Total Users {users.length}
      </p>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Admin Action</th>
              <th>Other Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{user.displayName}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  {user.role === "admin" ? (
                    <button
                      onClick={() => handleRemoveAdmin(user)}
                      data-tip="Remove Admin"
                      className="tooltip btn btn-sm btn-error text-white "
                    >
                      <FaUserMinus />
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      data-tip="Make Admin"
                      className="tooltip btn btn-sm btn-success text-white"
                    >
                      <FaUserShield />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersManagement;
