import React from "react";
import PageHeading from "../Shared/PageHeading/PageHeading";

const AboutUs = () => {
  const handleStory = () => {
    console.log("paisi");
  };
  return (
    <div className="bg-white shadow-2xl p-5 rounded-3xl">
      <PageHeading
        heading="About US"
        description={
          <>
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle.<br></br> From personal packages to business shipments —
            we deliver on time, every time.
          </>
        }
      ></PageHeading>
      <div>
        {/* headings */}
        <ul className="flex gap-3">
          <li onClick={handleStory}>Story</li>
          <li>Mission</li>
          <li>Success</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
