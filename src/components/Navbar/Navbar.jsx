import React from "react";
import { Button } from "../Generic/Button";
import {
  activeStyle,
  Container,
  Logo,
  NavbarBody,
  NavbarWrapper,
  Wrapper,
} from "./Style";
import { NavLink, Outlet } from "react-router-dom";
import { navbar } from "../../utils/navbar";
export default function Navbar() {
  return (
    <>
      <Wrapper>
        <Container className="nocopy">
          <NavbarWrapper>
            <Logo>
              <Logo.Icon />
              <Logo.Title>Houzing</Logo.Title>
            </Logo>
            <NavbarBody>
              {navbar.map((value) => {
                return !value.hidden && (
                  <NavLink to={value.path} key={value.id} style={activeStyle}>
                    {value.title}
                  </NavLink>
                );
              })}
            </NavbarBody>
            <Logo>
              <Button>Login</Button>
            </Logo>
          </NavbarWrapper>
        </Container>
        <Outlet />
      </Wrapper>
    </>
  );
}
