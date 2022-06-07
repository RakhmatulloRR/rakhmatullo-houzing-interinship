import React, { forwardRef } from "react";
import { Container, Icon, Wrapper } from "./style";

export const Input = forwardRef(
  (
    {
      children,
      onChange,
      placeholder,
      height,
      width,
      type,

      mr,
      ml,
      mb,
      mt,
      br,
      bl,
      bb,
      bt,
      pr,
      pl,
      pt,
      pb,
      name,
      defaultValue,
      value,
    },
    ref
  ) => {
    return (
      <Wrapper mr={mr} ml={ml} mb={mb} mt={mt}>
        <Icon>{children}</Icon>
        <Container
          pl={pl}
          pr={pr}
          pt={pt}
          pb={pb}
          bl={bl}
          br={br}
          bt={bt}
          bb={bb}
          type={type}
          width={width}
          height={height}
          name={name}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          ref={ref}
        />
      </Wrapper>
    );
  }
);

export default Input;
