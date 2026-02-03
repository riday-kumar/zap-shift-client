import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import bannerOne from "../../../assets/banner/banner1.png";
import bannerTwo from "../../../assets/banner/banner2.png";
import bannerThree from "../../../assets/banner/banner3.png";
import BannerBtn from "./BannerBtn";

const Banner = () => {
  return (
    <Carousel
      showArrows={false}
      autoPlay={true}
      showIndicators={false}
      infiniteLoop={true}
    >
      <div className="relative">
        <img src={bannerOne} />
        <div className="absolute md:bottom-[15%] md:left-[6%] lg:bottom-[18%] lg:left-[6%] xl:bottom-[20%] xl:left-[7%]">
          <BannerBtn></BannerBtn>
        </div>
      </div>
      <div>
        <img src={bannerTwo} />
        <div className="absolute md:bottom-[17%] md:left-[6%] lg:bottom-[18%] lg:left-[6%] xl:bottom-[23%] xl:left-[7%]">
          <BannerBtn></BannerBtn>
        </div>
      </div>
      <div>
        <img src={bannerThree} />
        <div className="absolute md:bottom-[24%] md:left-[6%] lg:bottom-[24%] lg:left-[6%] xl:bottom-[27%] xl:left-[7%]">
          <BannerBtn></BannerBtn>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
