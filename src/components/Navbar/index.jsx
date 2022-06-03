import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import { Button } from "../Generic";
import {
  Body,
  Container,
  Link,
  LoginSpan,
  Logo,
  NavbarBody,
  NavbarWrapper,
  User,
  Wrapper,
} from "./style";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container className="nocopy">
        <NavbarWrapper>
          <Logo onClick={() => navigate("/")}>
            <Logo.Icon />
            <Logo.Title>Houzing</Logo.Title>
          </Logo>
          <NavbarBody>
            {navbar.map(({ title, id, path, hidden }) => {
              return (
                !hidden && (
                  <Link key={id} to={path}>
                    {title}
                  </Link>
                )
              );
            })}
          </NavbarBody>
          <LoginSpan>
            <Button
              class="loginn"
              onClick={() => navigate("/signin")}
              width={"120px"}
            >
              Login
            </Button>
          </LoginSpan>
          <User />
        </NavbarWrapper>
      </Container>
      <Body>
        <Outlet />
      </Body>
    </Wrapper>
  );
}
