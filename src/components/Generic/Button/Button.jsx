import React from 'react'
import { Container } from './Style'

export default function Button({
  children, onClick, width, height, type, mr, ml, mb, mt
}) {
  return (
    <Container className='nocopy'
    mr={mr} ml={ml} mb={mb} mt={mt} type={type} width={width} height={height} onClick={onClick}
    >{children}</Container>
  )
}
