import React from "react";
import Banner from "../Banner/Banner";
import HowWorks from "../Howworks/HowWorks";
import OurServices from "../OurServices/OurServices";
import Brands from "../Brands/Brands";
import Testimonial from "../Testimonial/Testimonial";

const reviews = fetch("reviews.json").then((res) => res.json());

const Home = () => {
  return (
    <div className="space-y-20">
      <Banner></Banner>
      <HowWorks></HowWorks>
      <OurServices></OurServices>
      <Brands></Brands>
      <Testimonial reviews={reviews}></Testimonial>
    </div>
  );
};

export default Home;
