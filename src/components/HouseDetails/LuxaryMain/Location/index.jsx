import React from "react";
import { Container, Description, Row, Subtitle, Title } from "./style";
import Map from "./Map";

export const Location = ({ house }) => {
  return (
    <Container>
      <Title>Location</Title>
      <Row>
        <Row.Item>
          <Subtitle>Address:</Subtitle>
          <Description>{house?.address || "No address"}</Description>
        </Row.Item>
        <Row.Item>
          <Subtitle>City:</Subtitle>
          <Description>{house?.city || "No zipCode"}</Description>
        </Row.Item>
        <Row.Item>
          <Subtitle>Area:</Subtitle>
          <Description></Description>
        </Row.Item>
      </Row>
      <Row mt={24} mb={24}>
        <Row.Item>
          <Subtitle>State/County: </Subtitle>
          <Description>{house?.region || "No zipCode"}</Description>
        </Row.Item>
        <Row.Item>
          <Subtitle>Zip:</Subtitle>
          <Description>{house?.zipCode || "No zipCode"}</Description>
        </Row.Item>
        <Row.Item>
          <Subtitle>Country:</Subtitle>
          <Description>{house?.country || "No zipCode"}</Description>
        </Row.Item>
      </Row>
      {/* ===== GoogleMap ====== */}
      <Map house={house} />
    </Container>
  );
};

export default Location;
