import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { navbar } from '../../utils/navbar';
import { Button } from '../Generic';
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
} from './style';

export default function Navbar() {
  const location = useLocation();
  console.log(location.pathname);
  console.log(location.search);
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container className='nocopy'>
        <NavbarWrapper>
          <Logo onClick={() => navigate('/')}>
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
            {localStorage.getItem('token') ? (
              <>
                <Button
                  onClick={() => navigate('/profile/properties')}
                  width={'120px'}
                >
                  Profile
                </Button>
                <Button
                  onClick={() => {
                    localStorage.removeItem('token');
                    if (location?.pathname?.includes('profile')) {
                      navigate('/home');
                    } else {
                      navigate(`${location.pathname}${location?.search || ""}`);
                    }
                  }}
                  width={'120px'}
                >
                  Log out
                </Button>
              </>
            ) : (
              <Button onClick={() => navigate('/signin')} width={'120px'}>
                Login
              </Button>
            )}
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
