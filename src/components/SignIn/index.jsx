import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input } from '../Generic';
import {
  Container,
  Form,
  Wrapper,
  Title,
  Info,
  Forgot,
  Checkbox,
  Error,
} from './style';
import { useMutation } from 'react-query';

const { REACT_APP_BASE_URL: url } = process.env;

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const { mutate } = useMutation(() => {
    console.log(email, password);
    return fetch(`${url}/public/auth/login`, {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    }).then((res) => res.json());
  });

  const onSubmit = () => {
    if (email?.length && password?.length) {
      mutate(
        {},
        {
          onSuccess: (res) => {
            console.log(res);
            if (res?.authenticationToken) {
              localStorage.setItem('token', res?.authenticationToken);
              alert('Logged In Successfully');
              setError('');
              navigate('/home');
            } else {
              setError('email or password is not valid');
            }
          },
          onError: (res) => {
            setError(res.message);
          },
        }
      );
    } else {
      setError('email or password mast not be empty');
    }
  };
  const inputStyle = {
    mb: 20,
    bt: '0',
    bl: 0,
    br: 0,
    bb: '3px solid #E6E9EC',
    pl: '0',
  };
  return (
    <Container>
      <Wrapper>
        <Form>
          <Title>Sign in</Title>
          <Input
            name='email'
            type='text'
            {...inputStyle}
            onChange={({ target }) => {
              setError('');
              setEmail(target?.value);
            }}
            value={email}
            width='100%'
            placeholder='User name'
          />
          <Input
            name={password}
            {...inputStyle}
            type='password'
            onChange={({ target }) => {
              setError('');
              setPassword(target?.value);
            }}
            value={password}
            placeholder='Password'
          />
          {error && <Error>{error}</Error>}
          <Info>
            <Checkbox>Remember me</Checkbox>
            <Forgot>Forgot</Forgot>
          </Info>
          <Button onClick={onSubmit} type={'primary'} mt={15} htmlType='submit'>
            Sign in
          </Button>
          <Form.Register
            onClick={() => navigate('/register')}
            className='subtitle center'
          >
            Did you Register?
          </Form.Register>
        </Form>
      </Wrapper>
    </Container>
  );
}
