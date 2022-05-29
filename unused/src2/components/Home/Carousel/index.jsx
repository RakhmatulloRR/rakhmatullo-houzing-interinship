import React, { useRef } from "react";
import { CarouselWrapper, Icon, Img, MainCarousel } from "./style";
import img1 from "../../../assets/imgs/uy1.png";
import img2 from "../../../assets/imgs/uy2.png";

export default function Carousel() {
  const slider = useRef();
  console.log(slider);

  return (
    <CarouselWrapper>
      <Icon.Left onClick={() => slider.current?.next()} />
      <Icon.Right onClick={() => slider.current?.prev()} />
      <MainCarousel className="carousel" ref={slider} dots autoplay>
        <Img src={img1} alt="img" />
        <Img src={img2} alt="img" />
        <Img src={img1} alt="img" />
        <Img src={img2} alt="img" />
        <Img src={img1} alt="img" />
        <Img src={img2} alt="img" />
      </MainCarousel>
    </CarouselWrapper>
  );
}
