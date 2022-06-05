import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 24px;
  margin-bottom: 24px;
  .ant-modal-content {
    width: 1000px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 1440px;
  padding: 0 135px;
  width: 100%;
`;

const ImgsBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 400px;
  grid-gap: 20px;
`;

const BoxLeft = styled.div``;

BoxLeft.Img = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${({ url }) => url});
  background-repeat: no-repeat;
  background-size: cover;
`;

const BoxRight = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 190px 190px;
  grid-gap: 20px;
`;

BoxRight.Img = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${({ url }) => url});
  background-repeat: no-repeat;
  background-size: cover;
`;

BoxRight.ImgCount = styled.div`
  position: relative;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${({ url }) => url});
  background-repeat: no-repeat;
  background-size: cover;
`;

BoxRight.ImgCountNum = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  letter-spacing: -0.02em;
  color: #ffffff;
`;

const ModalImgs = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 20px;
`;

ModalImgs.Img = styled.img`
  width: 100%;
  height: 400px;
`;

export { Container, ModalImgs, Wrapper, ImgsBox, BoxLeft, BoxRight };
