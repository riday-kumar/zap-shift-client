import React from "react";

import reviewQuote from "../../../assets/reviewQuote.png";
const ReviewCard = ({ reviews }) => {
  const { userName, user_email, review, user_photoURL } = reviews;
  return (
    <div className="space-y-4 bg-white p-5 rounded-3xl ">
      <img src={reviewQuote} alt="" />
      <p className="font-medium text-[16px] text-justify">{review}</p>
      <hr className="border-2 border-dashed border-gray-200" />
      {/* info */}
      <div className="flex items-center gap-5">
        <div>
          <img className="rounded-full h-16" src={user_photoURL} alt="" />
        </div>
        <div>
          <h4 className="text-[20px] font-bold text-base-100">{userName}</h4>
          <p className="text-[16px] font-medium">{user_email}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
