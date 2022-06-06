import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  border: 1px solid #e6e9ec;
  border-radius: 3px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: ${({ top }) => !top && "center"};
  margin-top: ${({ mt }) => mt && `${mt}px`};
`;

const Img = styled.img`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  margin-right: 8px;
  cursor: pointer;
`;

const Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #0d263b;
`;

const Desc = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
`;

const Input = styled.input`
  height: 40px;
  width: 100%;
  border: none;
  outline: none;
  border-bottom: 2px solid #e6e9ec;
  margin-top: 20px;
`;

const Message = styled.textarea`
 font-size: 12px;
  width: 100%;
  height: 55px;
  border: none;
  outline: none;
  border-bottom: 2px solid #e6e9ec;
  resize: none;
`;

const Checkbox = styled.input`
  /* Double-sized Checkboxes */
  -ms-transform: scale(1.5); /* IE */
  -moz-transform: scale(1.5); /* FF */
  -webkit-transform: scale(1.5); /* Safari and Chrome */
  -o-transform: scale(1.5); /* Opera */
  transform: scale(1.5);
  /* width: 24px;
  height: 24px; */
  /* padding: 10px; */
  margin: 6.5px 6px 5px 4px;
`;

export { Container, Wrapper, Img, Title, Desc, Input, Message, Checkbox };
