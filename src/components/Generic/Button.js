import styled from "styled-components";

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "white" : "var(--primaryColar)")};
  color: ${(props) => (props.primary ? "var(--primaryColar)" : "white")};

  font-size: 1em;
  margin-left: 1em;
  padding: 0px 40px;
  border: 1px solid white;
  border-radius: 2px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 120px; */
`;
export { Button };
