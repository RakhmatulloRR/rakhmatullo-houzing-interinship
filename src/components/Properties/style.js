import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media (max-width: 768px) {
    margin-top: 70px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1440px;
  padding: 0 130px;
  padding-top: 64px;
  @media (max-width: 768px) {
    padding: 0;
  }
`;

const CountWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 70px;
`;

const Sort = styled("select")`
  width: 197px;
  height: 40px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  border-bottom: 2px solid #e6e9ec;
`;

const Body = styled.div`
  width: 100%;
  margin-top: 16px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export { Container, Wrapper, CountWrapper, Body, Sort };
