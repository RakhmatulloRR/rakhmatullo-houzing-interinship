/* eslint-disable react/jsx-key */
import React, { useRef } from "react";
import HouseCard from "../../HouseCard";
import { ArrowLeft, ArrowRight, Cards, Container, Wrapper } from "./style";
import AliceCarousel from "react-alice-carousel";
// import { useMutation, useQuery } from "react-query";

export default function Recommended() {
  const slider = useRef();

  // useQuery(
  //   [],
  //   () => {
  //     return fetch();
  //   },
  //   { onSuccess: (res) => {}, onError: () => {} }
  // );
  // const req = useMutation(() => {
  //   return fetch();
  // });
  // req.mutation("test", { onSuccess: (res) => {}, onError: () => {} });
  const items = [
    <HouseCard margin />,
    <HouseCard margin />,
    <HouseCard margin />,
    <HouseCard margin />,
    <HouseCard margin />,
    <HouseCard margin />,
    <HouseCard margin />,
  ];
  const responsive = {
    2000: {
      items: 11,
    },
    1200: {
      items: 5,
    },
    800: {
      items: 3,
    },
    0: {
      items: 1,
    },
  };

  return (
    <Container className="nocopy">
      <div className="title center">Recommended</div>
      <div className="description center">
        Siz orzu qilgan, siz izlagan shinam va arzon uylar.
      </div>
      <Wrapper>
        <Cards>
          <AliceCarousel
            responsive={responsive}
            arrows={false}
            ref={slider}
            autoWidth
            mouseTracking
            items={items}
          />
          <ArrowRight onClick={() => slider.current?.slidePrev()}>
            &lang;
          </ArrowRight>
          <ArrowLeft onClick={() => slider.current?.slideNext()}>
            &rang;
          </ArrowLeft>
        </Cards>
      </Wrapper>
    </Container>
  );
}
