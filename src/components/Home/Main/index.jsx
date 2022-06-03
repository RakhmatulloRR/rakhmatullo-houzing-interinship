import React, { useRef } from "react";
import { Carousel, Popover } from "antd";
import img1 from "../../../assets/imgs/home1.png";
import img2 from "../../../assets/imgs/home2.png";
import {
  Advanced,
  ArrowLeft,
  ArrowRight,
  Box,
  Container,
  Form,
  ImgDiv,
  MainCarousel,
  Price,
  Subtitle,
  Title,
  Wrapper,
} from "./style";
import { Button, Input } from "../../Generic";
export const Main = () => {
  const carouselRef = useRef();

  const onLeft = () => {
    carouselRef.current?.prev();
  };

  const onRight = () => {
    carouselRef.current?.next();
  };

  return (
    <Container>
      <ArrowLeft onClick={onLeft}/>
      <ArrowRight onClick={onRight} />
      <MainCarousel width="fit-content" ref={carouselRef} autoplay effect="fade">
        <ImgDiv imgUrl={img1} />
        <ImgDiv imgUrl={img2} />
        <ImgDiv imgUrl={img1} />
        <ImgDiv imgUrl={img2} />
        <ImgDiv imgUrl={img1} />
        <ImgDiv imgUrl={img2} />
      </MainCarousel>
    </Container>
  );
};

export default Main;
