import React from 'react'
import Main from './Main'
import Filter from '../Filter'
import { Container } from './style'
import { Recommended } from './Recomented'
import Choose from './Choose'
import { Category } from './Category'


export const HomeComponent = () => {
  return (
    <Container>
      <Filter />
      <Main />
      <Recommended />
      <Choose />
      <Category />
    </Container>
  )
}

export default HomeComponent