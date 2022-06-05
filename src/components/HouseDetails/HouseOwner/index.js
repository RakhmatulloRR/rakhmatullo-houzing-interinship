import React from "react";
import Button from "../../Generic/Button";
import {
  Checkbox,
  Container,
  Desc,
  Img,
  Input,
  Message,
  Title,
  Wrapper,
} from "./style";
import user from "../../../assets/imgs/nouser.png";

export default function HouseOwner() {
  return (
    <Container>
      <Wrapper>
        <Img src={user} />
        <div>
          <Title>Darrel Steward</Title>
          <Desc>+99899-1046943</Desc>
        </div>
      </Wrapper>
      <Input placeholder="Name" />
      <Input placeholder="Phone" />
      <Input placeholder="Email" />
      <Wrapper mt={24}>
        <Title>Message</Title>
      </Wrapper>
      <Wrapper mt={8}>
        <Message placeholder="Hello, I am interested in [New Apartment]"></Message>
      </Wrapper>
      <Wrapper mt={24} top>
        <Checkbox type="checkbox" checked/>
        <Desc>By submitting this form I agree to Terms of Use</Desc>
      </Wrapper>
      <Wrapper mt={24}>
        <Button type={"primary"}>Send request</Button>
      </Wrapper>
    </Container>
  );
}
