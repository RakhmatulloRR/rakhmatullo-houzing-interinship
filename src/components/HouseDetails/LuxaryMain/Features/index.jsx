import React from "react";
import { icons } from "./icons";
import { Container, Title, Wrapper, Icons, Subtitle } from "./style";

export default function Features() {
  return (
    <Container>
      <Title>Features</Title>
      <Wrapper>
        {icons.map((item, i) => {
          return (
            <Wrapper.Box key={i}>
              <Icons.Wrapper>{item.icon}</Icons.Wrapper>
              <Subtitle>{item.subtitle}</Subtitle>
            </Wrapper.Box>
          );
        })}
      </Wrapper>
    </Container>
  );
}

