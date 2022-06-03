import React, { useRef } from "react";
import Card from "../../Card";
import { ArrowLeft, ArrowRight, Cards, Container, Wrapper } from "./style";
import AliceCarousel from "react-alice-carousel";
import { useQuery } from "react-query";

export const Recommended = () => {
  const slider = useRef();
  const { data: houses } = useQuery(
    "getHouseDetails",
    () => {
      return fetch(`https://houzing-app.herokuapp.com/api/v1/houses/list`)
        .then((res) => res.json())
        .then((res) => res.data);
    },
    {}
  );
  const items = [];
  houses?.map((house) => {
    return items.push(<Card info={house} />);
  });
  // const res = useMutation(() => {
  //   return fetch;
  // });
  // res.mutate("test", {
  //   onSuccess: () => {},
  //   onError: () => {},
  // });

  return (
    <Container className="nocopy">
      <div className="title center">Recommended</div>
      <div className="description center">
        Siz orzu qilgan, siz izlagan shinam va arzon uylar.
      </div>
      <Wrapper>
        <Cards>
          <AliceCarousel
            // arrows={false}
            ref={slider}
            autoWidth
            mouseTracking
            items={houses?.map((house) => {
              return <Card info={house} />;
            })}
          />
          <ArrowLeft onClick={() => slider.current?.slideNext()} />
          <ArrowRight onClick={() => slider.current?.slidePrev()} />
        </Cards>
      </Wrapper>
    </Container>
  );
};
