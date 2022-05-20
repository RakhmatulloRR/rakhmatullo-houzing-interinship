import React from "react";
import { Container, Icon, Wrapper } from "./Style";

export default function Input({
  children,
  onClick,
  width,
  height,
  type,
  mr,
  ml,
  mb,
  mt,
  pl,
  onChange,
  placeholder,
  defaultValue,
}) {
  return (
    <Wrapper mr={mr} ml={ml} mb={mb} mt={mt} pl={pl}>
      <Icon>{children}</Icon>
      <Container
        type={type}
        width={width}
        height={height}
        onClick={onClick}
        onChange={onChange}
        placeholder={placeholder}
        defaultValue={defaultValue}
      ></Container>
    </Wrapper>
  );
}
