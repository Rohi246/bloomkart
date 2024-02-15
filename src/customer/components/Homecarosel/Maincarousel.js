import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { carouseldata } from "../productdata/carouseldata";

import "react-alice-carousel/lib/alice-carousel.css";

const MainCarousel = () => {
  const items = carouseldata.map((item) => {
    return <img src={item.image} className=" cursor-pointer" />;
  });
  return (
    <AliceCarousel
      mouseTracking
      items={items}
      disableButtonsControls
      autoPlay={true}
      autoPlayInterval={1000}
      controlsStrategy=" alternate"
    />
  );
};
export default MainCarousel;
