import styled from "styled-components";

function getType(type) {
  switch (type) {
    case "secondary":
      return {
        border: "1px solid #ebe9ec",
        color: "#0d213b",
      };
    case "primary":
      return {
        backgroundColor: "#0061df",
        border: "none",
        color: "#ffffff",
      };
    default:
      return {
        border: "1px solid #ebe9ec",
        color: "#ffffff",
      };
  }
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  height: ${({ height }) => height || "44px"};
  max-width: ${({ width }) => (width ? width : "100%")};
  width: ${({ width }) => (width ? width : "100%")};
  margin-right: ${({ mr }) => `${mr}px`};
  margin-left: ${({ ml }) => `${ml}px`};
  margin-top: ${({ mt }) => `${mt}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
  border-radius: 2px;
  cursor: pointer;
  ${({ type }) => getType(type)}
  :active {
    transform: scale(0.98);
    opacity: 0.7;
  }
`;
export { Container };
