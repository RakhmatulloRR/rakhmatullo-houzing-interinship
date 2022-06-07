import React from 'react'
import { Container,  Title, Wrapper } from './style'
import img from '../../assets/imgs/pattern-for-notfound.webp'
import { Button} from '../Generic'
import { useNavigate } from 'react-router-dom'

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Container>
        <Wrapper imgUrl = {img}>
            
            <Title>Opps! Page Not Found</Title>
            <Button mt={30} width={"150px"} type={"primary"} onClick={()=>navigate('/')}>Back to home</Button>

        </Wrapper>
    </Container>
  )
}
