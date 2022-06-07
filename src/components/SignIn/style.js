import styled from "styled-components";
import { Checkbox as CheckboxAnt } from "antd";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 1440px;
  padding: 64px 130px;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100%;
    padding: 64px 0;
  }
`;

const Form = styled("div")`
  width: 580px;
  background: #ffffff;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  padding: 24px 30px 48px 30px;

  @media (max-width: 768px) {
    width: 95%;
  }
`;
Form.Register = styled.div`
  margin-top: 20px;
  cursor: pointer;
`;

const Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #0d263b;
  margin-bottom: 25px;
`;

const Checkbox = styled(CheckboxAnt)`
  width: 100%;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-betweena;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
`;

const Forgot = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #0061df;
  cursor: pointer;
  transition: all 0.4s ease;
  :active {
    transform: scale(0.97);
  }
`;

export { Container, Wrapper, Form, Title, Checkbox, Section, Forgot };
