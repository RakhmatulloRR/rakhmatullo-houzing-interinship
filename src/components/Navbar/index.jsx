import React from 'react';
import {
  Container,
  Logo,
  NavbarBody,
  NavbarWrapper,
  Wrapper,
  activeStyle,
} from './style';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { navbar } from '../../utils/navbar';
import { Button } from '../Generic';

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container className='nocopy'>
        <NavbarWrapper>
          <Logo onClick={() => navigate('/home')}>
            <Logo.Icon />
            <Logo.Title>Houzing</Logo.Title>
          </Logo>
          <NavbarBody>
            {navbar.map((value) => {
              return !value.hidden && (
                <NavLink style={activeStyle} key={value.id} to={value.path}>
                  {value.title}
                </NavLink>
              );
            })}
          </NavbarBody>
          <Logo>
            <Button onClick={()=>navigate("/signin")} width={'120px'}>Login</Button>
          </Logo>
        </NavbarWrapper>
      </Container>
      <Outlet />
    </Wrapper>
  );
};

export default Navbar;
