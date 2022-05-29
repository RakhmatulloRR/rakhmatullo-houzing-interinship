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
  Price,
  Subtitle,
  Title,
  Wrapper,
} from "./style";
import { Button, Input } from "../../Generic";
export const Main = () => {
  const carouselRef = useRef();

  const onLeft = () => {
    carouselRef.current.prev();
  };

  const onRight = () => {
    carouselRef.current.next();
  };

  const content = (
    <Advanced>
      <Advanced.Title className="nocopy">Address</Advanced.Title>
      <Advanced.Section>
        <Input placeholder={"Country"} />
        <Input placeholder={"Region"} />
        <Input placeholder={"City"} />
        <Input placeholder={"Zip Code"} />
      </Advanced.Section>
      <Advanced.Title>Address</Advanced.Title>
      <Advanced.Section>
        <Input placeholder={"Rooms"} />
        <Input placeholder={"Size"} />
        <Input placeholder={"Sort"} />
      </Advanced.Section>
      <Advanced.Title>Address</Advanced.Title>
      <Advanced.Section>
        <Input placeholder={"Min price"} />
        <Input placeholder={"Max price"} />
      </Advanced.Section>
      <Advanced.Section>
        <Button width={"128px"} type={"secondary"} className="nocopy">
          Cancel
        </Button>
        <Button width={"128px"} type={"primary"} className="nocopy">
          Submit
        </Button>
      </Advanced.Section>
    </Advanced>
  );

  return (
    <Container>
      <ArrowLeft onClick={onLeft} />
      <ArrowRight onClick={onRight} />
      <Carousel width="fit-content" ref={carouselRef} autoplay effect="fade">
        {[1, 2, 3, 4, 5].map((item, i) => (
          <div key={i}>
            <div
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${img1})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                width: "100%",
                minHeight: "571px",
                color: "#fff",
                lineHeight: "160px",
                textAlign: "center",
              }}
            >
              <Title className="nocopy">Skyper Pool Partment</Title>
              <Subtitle className="nocopy">
                112 Glenwood Ave Hyde Park, Boston, MA
              </Subtitle>
              <Wrapper>
                <Box>
                  <Box.Bed />
                  <Box.Desc className="nocopy">2 beds</Box.Desc>
                </Box>
                <Box>
                  <Box.Bath />
                  <Box.Desc className="nocopy">2 Baths</Box.Desc>
                </Box>
                <Box>
                  <Box.Car />
                  <Box.Desc className="nocopy">2 Garage</Box.Desc>
                </Box>
                <Box>
                  <Box.Ruler />
                  <Box.Desc className="nocopy">200 Sq Ft</Box.Desc>
                </Box>
              </Wrapper>
              <Price className="nocopy">$2,000/mo</Price>
              <Button width={"180px"} className="nocopy">
                Read more
              </Button>
              <Form>
                <Form.Input
                  size="large"
                  placeholder="Enter an address, city, ZIP code"
                />
                <Form.Wrapper>
                  <Popover
                    placement="topLeft"
                    content={content}
                    trigger="click"
                  >
                    <Form.Advanced size="small">
                      <Form.Settings className="nocopy" />
                      Advanced
                    </Form.Advanced>
                  </Popover>
                  <Form.Advanced search="search" size="small">
                    <Form.Search className="nocopy" />
                    Search
                  </Form.Advanced>
                </Form.Wrapper>
              </Form>
            </div>
          </div>
        ))}
       
      </Carousel>
    </Container>
  );
};

export default Main;
