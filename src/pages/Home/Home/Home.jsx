import React from "react";
import Banner from "../Banner/Banner";
import HowWorks from "../Howworks/HowWorks";
import OurServices from "../OurServices/OurServices";

const Home = () => {
  return (
    <div className="space-y-10">
      <Banner></Banner>
      <HowWorks></HowWorks>
      <OurServices></OurServices>
    </div>
  );
};

export default Home;
