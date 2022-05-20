import React from "react";
import  Button  from "../Generic/Button/Button";
import {
  activeStyle,
  Container,
  Logo,
  NavbarBody,
  NavbarWrapper,
  Wrapper,
} from "./Style";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { navbar } from "../../utils/navbar";
export default function Navbar() {
  const navigate = useNavigate()
  const goToSignIn = (params) => {
    navigate("/signin")
  }
  return (
    <>
      <Wrapper>
        <Container className="nocopy">
          <NavbarWrapper>
            <Logo onClick={() => navigate("/home")}>
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
              <Button onClick={goToSignIn} width={"120px"}>Login</Button>
            </Logo>
          </NavbarWrapper>
        </Container>
        <Outlet />
      </Wrapper>
    </>
  );
}
