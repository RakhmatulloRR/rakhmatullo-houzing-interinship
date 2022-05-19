import styled from "styled-components";
import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primaryColar);
`;
const NavbarWrapper = styled.div`
  display: flex;
  height: 64px;
  max-width: var(--width);
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  width: 100%;
  color: #fff;
  padding: 0 130px;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
Logo.Icon = styled(LogoIcon)``;
Logo.Title = styled.div`
  margin-left: 11px;
  font-size: 20px;
  font-weight: 500;
`;
const NavbarBody = styled.div`
font-family: "Montserrat";
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  color: white;
  /* background-color: blue; */

`;
const activeStyle = ({ isActive }) => {
  return {
    color: isActive ? "#00fff5" : "#fff",
    textDecoration: "none",
    margin: "0 32px",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "24px",
  };
};
export { Wrapper, Container, NavbarWrapper, Logo, NavbarBody, activeStyle };
// export {}
