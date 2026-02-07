import React from "react";

const PageHeading = ({ heading, description }) => {
  return (
    <div>
      <h1 className="text-6xl font-bold mb-3">{heading}</h1>
      <p className="para text-left">{description}</p>
    </div>
  );
};

export default PageHeading;
