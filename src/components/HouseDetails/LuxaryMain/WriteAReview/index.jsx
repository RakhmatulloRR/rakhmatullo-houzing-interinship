import React from "react";
import { Container, Desc, Input, Message, Star, Title, Wrapper } from "./style";
import Button from "../../../Generic/Button";

export const WriteAReview = () => {
  return (
    <Container>
      <Title>Write a Review</Title>
      {[
        ["Cleanliness", "Accuracy"],
        ["Communication", "Location"],
        ["Checkin", "Value"],
      ].map((item) => {
        return (
          <Wrapper mb={23}>
            <Wrapper>
              <Desc>{item[0]}</Desc>
              <Wrapper width={100} gap={1}>
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </Wrapper>
            </Wrapper>
            <Wrapper>
              <Desc>{item[1]}</Desc>
              <Wrapper width={100} gap={1}>
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </Wrapper>
            </Wrapper>
          </Wrapper>
        );
      })}
      <Wrapper mt={50}>
        <Input placeholder={"Name"} />
        <Input placeholder={"Email"} />
      </Wrapper>
      <Wrapper mb={24}>
        <Message placeholder="Enter Your Message" />
      </Wrapper>
      <Button width={"250px"} type={"primary"}>
        Send your review
      </Button>
    </Container>
  );
};

export default WriteAReview;
