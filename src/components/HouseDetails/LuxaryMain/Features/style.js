import styled from "styled-components";
import { ReactComponent as airconditioner } from "../../../../assets/icons/air-conditioner.svg";
import { ReactComponent as barbeque } from "../../../../assets/icons/barbecue.svg";
import { ReactComponent as dryer } from "../../../../assets/icons/dryer.svg";
import { ReactComponent as gym } from "../../../../assets/icons/gym.svg";
import { ReactComponent as lawn } from "../../../../assets/icons/lawn.svg";
import { ReactComponent as laundry } from "../../../../assets/icons/laundry.svg";
import { ReactComponent as microwave } from "../../../../assets/icons/microwave.svg";
import { ReactComponent as outdoor } from "../../../../assets/icons/outdoor-shower.svg";
import { ReactComponent as refrigerator } from "../../../../assets/icons/refrigerator.svg";
import { ReactComponent as sauna } from "../../../../assets/icons/sauna.svg";
import { ReactComponent as swimmer } from "../../../../assets/icons/swimmer.svg";
import { ReactComponent as coaxial } from "../../../../assets/icons/coaxial.svg";
import { ReactComponent as liquid } from "../../../../assets/icons/liquid-soap.svg";
import { ReactComponent as wifi } from "../../../../assets/icons/wifi.svg";
import { ReactComponent as chair } from "../../../../assets/icons/chair.svg";
import { ReactComponent as blinds } from "../../../../assets/icons/blinds.svg";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 48px;
  margin-bottom: 48px;
`;

const Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #0d263b;
  margin-bottom: 24px;
`;

const Wrapper = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px 0;
`;

Wrapper.Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 39px;
`;

Wrapper.Box = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 10px;
`;

const Subtitle = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
  margin-left: 10px;
`;

const Desc = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
  margin-right: 8px;
`;

const Icons = styled.div``;

Icons.Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  background: #f6f8f9;
  border-radius: 50%;
`;

Icons.Airconditioner = styled(airconditioner)``;
Icons.Barbecue = styled(barbeque)``;
Icons.Dryer = styled(dryer)``;
Icons.Gym = styled(gym)``;
Icons.Lawn = styled(lawn)``;
Icons.Laundry = styled(laundry)``;
Icons.Microwave = styled(microwave)``;
Icons.Outdoor = styled(outdoor)``;
Icons.Refrigerator = styled(refrigerator)``;
Icons.Sauna = styled(sauna)``;
Icons.Swimmer = styled(swimmer)``;
Icons.Coaxial = styled(coaxial)``;
Icons.Liquid = styled(liquid)``;
Icons.Wifi = styled(wifi)``;
Icons.Chair = styled(chair)``;
Icons.Blinds = styled(blinds)``;

export { Container, Title, Wrapper, Subtitle, Desc, Icons };
