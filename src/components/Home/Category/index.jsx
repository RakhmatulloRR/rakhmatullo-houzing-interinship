import React, { useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Cards,
  Col,
  ColItem,
  Container,
  Wrapper,
} from "./style";
import AliceCarousel from "react-alice-carousel";
import house from "../../../assets/imgs/cottage.jpg";
import apartment from "../../../assets/imgs/apartment.png";
import office from "../../../assets/imgs/office.png";
import villa from "../../../assets/imgs/villa.png";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
const houseImgs = [villa,  apartment, house, office, ];

const { REACT_APP_BASE_URL: url } = process.env;

export const Category = () => {
  const navigate = useNavigate();
  const slider = useRef();
  const [list, setList] = useState([]);
  const goto = (id) => {
    navigate(`/properties?category_id=${id}`);
  };

  useQuery(
    "getCtgList",
    () => {
      return fetch(`${url}/v1/categories/list`).then((res) => res.json());
    },
    {
      onSuccess: (res) => {
        setList(res?.data || []);
      },
    }
  );

  return (
    <Container className="nocopy">
      <div className="title center">Categories</div>
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
            items={list?.map((item, index) => {
              return (
                <Col onClick={() => goto(item.id)}>
                  <Col.Img className="img-categories" src={houseImgs[index]} />
                  <ColItem>
                    <ColItem.Villa />
                    <ColItem.Title>{item.name}</ColItem.Title>
                  </ColItem>
                </Col>
              );
            })}
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
};
