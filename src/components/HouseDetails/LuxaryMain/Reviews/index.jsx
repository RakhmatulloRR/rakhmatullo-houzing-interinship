import React from "react";
import { Card, Container, Desc, Title, Wrapper } from "./style";
import { Progress } from "antd";
import user from "../../../../assets/imgs/nouser.png";

export const Reviews = () => {
  const progressStyle = {
    format: (percent) => percent / 10,
    status: "active",
    width: "100%",
    size: "small",
  };
  return (
    <Container>
      <Title>4.67 (14 reviews)</Title>
      {[
        [
          { title: "Cleanliness", percent: 47 },
          { title: "Accuracy", percent: 57 },
        ],
        [
          { title: "Communication", percent: 33 },
          { title: "Location", percent: 77 },
        ],
        [
          { title: "Checkin", percent: 27 },
          { title: "Value", percent: 67 },
        ],
      ].map((item, i) => {
        return (
          <Wrapper mb={23} key={i}>
            <Wrapper>
              <Desc>{item[0].title}</Desc>
              <Progress {...progressStyle} percent={item[0].percent} />
            </Wrapper>
            <Wrapper>
              <Desc>{item[1].title}</Desc>
              <Progress {...progressStyle} percent={item[1].percent} />
            </Wrapper>
          </Wrapper>
        );
      })}

      <Wrapper mt={26} gap={20} mb={20}>
        {[1, 2].map((item) => {
          return (
            <Card key={item}>
              <Card.Img src={user} />
              <Card.Name>Jane Cooper</Card.Name>
              <Wrapper mb={20}>
                <Card.Subdesc>April 6, 2021 at 3:21 AM</Card.Subdesc>
                <Wrapper gap={1}>
                  <Card.Star />
                  <Card.Star />
                  <Card.Star />
                  <Card.Star />
                  <Card.Star />
                  <Card.Subdesc>(5 reviews)</Card.Subdesc>
                </Wrapper>
              </Wrapper>
              <Desc>
                Every single thing we tried with John was delicious! Found some
                awesome places we would definitely go back to on our trip. John
                was also super friendly and passionate about Beşiktaş and
                Istanbul.{" "}
              </Desc>
            </Card>
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default Reviews;
