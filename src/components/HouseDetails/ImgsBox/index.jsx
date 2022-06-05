import React, { useState } from "react";
import {
  Container,
  Wrapper,
  ImgsBox,
  BoxLeft,
  BoxRight,
  ModalImgs,
} from "./style";

import { Modal } from "antd";
import img1 from "../../../assets/imgs/home1.png";
import img2 from "../../../assets/imgs/home2.png";
const imgs = [
  img2,
  img1,
  img2,
  img1,
  img2,
  img1,
  // img2,
  // img2,
  // img1,
  // img2,
  // img1,
  // img2,
  // img1,
  // img2,
];
export default function ImgsCon() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const onOk = () => {
    setIsModalVisible(false);
  };

  const onCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Container>
      <Wrapper>
        <ImgsBox>
          <BoxLeft>
            <BoxLeft.Img url={imgs[0]} />
          </BoxLeft>
          <BoxRight>
            <BoxRight.Img url={imgs[1]} />
            <BoxRight.Img url={imgs[2]} />
            <BoxRight.Img url={imgs[3]} />
            <BoxRight.ImgCount onClick={showModal} url={imgs[4]}>
              <BoxRight.ImgCountNum>
                {" "}
                +{5 * Math.floor((imgs.length-1) / 5)}
              </BoxRight.ImgCountNum>
            </BoxRight.ImgCount>
          </BoxRight>
        </ImgsBox>
        <Modal
          width={"1000px"}
          title="Basic Modal"
          visible={isModalVisible}
          onOk={onOk}
          onCancel={onCancel}
        >
          <ModalImgs>
            {imgs.map((img, i) => {
              return <ModalImgs.Img key={i} src={img} />;
            })}
          </ModalImgs>
        </Modal>
      </Wrapper>
    </Container>
  );
}
