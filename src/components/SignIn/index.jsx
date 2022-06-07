import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../Generic";
import {
  Container,
  Form,
  Wrapper,
  Title,
  Section,
  Forgot,
  Checkbox,
} from "./style";
import { useMutation } from "react-query";

const { REACT_APP_BASE_URL: url } = process.env;

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate } = useMutation(
    () => {
      console.log(email, password);
      return fetch(`${url}/public/auth/login`, {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        headers: {
          "Content-type": "application/json",
        },
      }).then((res) => res.json());
    },
    {
      onSuccess: (res) => {
        console.log(res);
        localStorage.setItem("token", res?.authenticationToken);
        alert("Logged In Successfully");
        navigate("/home");
      },
      onError: (res) => {
        alert("Error Email or Password");
      },
    }
  );

  const onSubmit = () => {
    mutate();
  };
  const inputStyle = {
    mb: 20,
    bt: "0",
    bl: 0,
    br: 0,
    bb: "3px solid #E6E9EC",
    pl: "0",
  };
  return (
    <Container>
      <Wrapper>
        <Form>
          <Title>Sign in</Title>
          <Input
            {...inputStyle}
            onChange={({ target }) => setEmail(target?.value)}
            value={email}
            width="100%"
            placeholder="User name"
          />
          <Input
            {...inputStyle}
            type="text"
            onChange={({ target }) => setPassword(target?.value)}
            value={password}
            placeholder="Password"
          />
          <Section>
            <Checkbox>Remember me</Checkbox>
            <Forgot>Forgot</Forgot>
          </Section>
          <Button onClick={onSubmit} type={"primary"} mt={15} htmlType="submit">
            Sign in
          </Button>
          <Form.Register
            onClick={() => navigate("/register")}
            className="subtitle center"
          >
            Did you Register?
          </Form.Register>
        </Form>
      </Wrapper>
    </Container>
  );
}
