import React from "react";
import Filter from "../Filter";
import Carousel from "./Carousel";
import Recommended from "./Recommended";
import { Container } from "./style";

export default function Home() {
  return (
    <Container>
      <Filter />
      <Carousel/>
      <Recommended/>
    </Container>
  );
}
