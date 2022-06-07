import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../Generic";
import { Container, Wrapper, Title, Form } from "./style";
import { useMutation } from "react-query";
const { REACT_APP_BASE_URL: url } = process.env;
export const Register = () => {
  const navigate = useNavigate();
  const emailRef = useRef("");
  const firstnameRef = useRef("");
  const lastnameRef = useRef("");
  const passwordRef = useRef("");
  const roleRef = useRef("");
  const confirmPasswordRef = useRef("");

  const { mutate } = useMutation(
    () => {
      return fetch(`${url}/public/auth/register`, {
        method: "POST",
        body: JSON.stringify({
          email: emailRef.current.value,
          firstname: firstnameRef.current.value,
          lastname: lastnameRef.current.value,
          password: passwordRef.current.value,
          roleIdSet: [roleRef.current.value],
        }),
        headers: {
          "Content-type": "application/json",
        },
      }).then((res) => res.json());
    },
    {
      onSuccess: (res) => {
        console.log("succesfully registered");
        navigate("/signin");
      },
      onError: (res) => {
        console.log(res);
        alert("validation error");
      },
    }
  );

  const register = (type) => {
    if (passwordRef.current.value === confirmPasswordRef.current.value) {
      mutate();
    } else {
      alert("Error email or password");
    }
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
          <Title>Registration</Title>
          <Input {...inputStyle} ref={emailRef} placeholder="Email" />
          <Input {...inputStyle} ref={firstnameRef} placeholder="First name" />
          <Input {...inputStyle} ref={lastnameRef} placeholder="Last name" />
          <Input {...inputStyle} ref={roleRef} placeholder="Your role" />
          <div style={{ position: "relative" }}>
            <Input
              {...inputStyle}
              ref={passwordRef}
              type="password"
              placeholder="Password"
            />
            <i
              className="far fa-eye"
              id="4"
              onClick={onClick}
              style={{
                position: "absolute",
                zIndex: 1,
                right: "15px",
                top: "15px",
              }}
            ></i>
          </div>
          <div style={{ position: "relative" }}>
            <Input
              {...inputStyle}
              ref={confirmPasswordRef}
              type="password"
              placeholder="Password"
            />
            <i
              className="far fa-eye"
              id="5"
              onClick={onClick}
              style={{
                position: "absolute",
                zIndex: 1,
                right: "15px",
                top: "15px",
              }}
            ></i>
          </div>

          <Button
            onClick={() => register("success")}
            type="primary"
            mt={15}
            htmlType="submit"
          >
            Register
          </Button>
          <div
            onClick={() => navigate("/signin")}
            className="subtitle center"
            style={{ marginTop: "20px", cursor: "pointer" }}
          >
            Have you already registered?
          </div>
        </Form>
      </Wrapper>
    </Container>
  );

  function onClick(e) {
    console.log(e.target);
    const password = document.querySelectorAll("Input");
    // toggle the type attribute
    console.log(password[4]);
    const type =
      password[+e.target.id].getAttribute("type") === "password"
        ? "text"
        : "password";
    password[+e.target.id].setAttribute("type", type);
    // toggle the eye slash icon
    e.target.classList.toggle("fa-eye-slash");
  }
};

export default Register;
