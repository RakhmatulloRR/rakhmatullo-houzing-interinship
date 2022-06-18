import React from 'react';
import { Conatiner, Wrapper } from './style';
import Register from '../../components/SignIn';

export default function RegisterPage() {
  return (
    <Conatiner>
      <Wrapper>
        <Register />
      </Wrapper>
    </Conatiner>
  );
}
