import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const PaymentHistory = () => {
  //   const [payments, setPayments] = useState([]);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  console.log(user);
  //   useEffect(() => {
  //     axiosSecure.get(`/payments?email=${user.email}`).then((res) => {
  //       setPayments(res.data);
  //     });
  //   }, [user.email, axiosSecure]);

  // get data using React Query
  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user.email}`);
      return res.data;
    },
  });

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Parcel Name</th>
              <th>Amount</th>
              <th>Currency</th>
              <th>transactionId</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {payments.map((payment, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{payment.parcelName}</td>
                <td>{payment.amount}</td>
                <td>{payment.currency}</td>
                <td>{payment.transactionId}</td>
                <td>{payment.customerEmail}</td>
                <td>{payment.paymentStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
