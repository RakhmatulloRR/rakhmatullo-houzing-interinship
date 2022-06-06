import styled from "styled-components";
import { ReactComponent as arrowright } from "../../../assets/icons/arrow-right1.svg";
import { ReactComponent as arrowleft } from "../../../assets/icons/arrow-left1.svg";
import { css } from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 95px;
  margin-bottom: 55px;
  min-height: 40px 
`;

const Wrapper = styled("div")`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  padding: 0 130px;
`;
const Cards = styled("div")`
  display: flex;
  width: 1440px;
  margin-top: 32px;
  justify-content: space-between;
  gap: 10px;
  max-width: 1440px;
  padding: 0 130px;
`;
const arrow = css`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  top: 50%;
  width: 45px;
  height: 45px;
  color: black;
  background: white;
  opacity: 0.9;
  padding: 12px;
  box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
  filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
  border-radius: 50%;
  cursor: pointer;
  z-index: 999;
  :hover {
    opacity: 1;
  }
  :active {
    opacity: 0.7;
  }
`;
const ArrowLeft = styled(arrowleft)`
  ${arrow}
  right: 20px;
  transform: translate(-50%, -100%);
`;

const ArrowRight = styled(arrowright)`
  ${arrow}
  left: 50px;
  transform: translate(50%, -100%);
`;

export { Container, Cards, ArrowLeft, Wrapper, ArrowRight };
