import React from 'react'
import { Container, Desc, Subtitle, Title, Wrapper } from './style'

export default function PropertyDetails({house}) {
    return (
      <Container>
          <Title>Property Details</Title>
          <Wrapper>
              <Wrapper.Col>
                  <Wrapper.Box>
                      <Subtitle>Property ID: </Subtitle>
                      <Desc>{house?.id || 'no id'}</Desc>
                  </Wrapper.Box>
                  <Wrapper.Box>
                      <Subtitle>Price:</Subtitle>
                      <Desc>${house?.price || 'no price'}</Desc>
                  </Wrapper.Box>
                  <Wrapper.Box>
                      <Subtitle>Property Size:</Subtitle>
                      <Desc>1560 Sq Ft</Desc>
                  </Wrapper.Box>
                  <Wrapper.Box>
                      <Subtitle>Year Bulit:</Subtitle>
                      <Desc>{house?.yearBuilt || 'no year'}</Desc>
                  </Wrapper.Box>
              </Wrapper.Col>
              <Wrapper.Col>
                  <Wrapper.Box>
                      <Subtitle>Bedrooms:</Subtitle>
                      <Desc>{house?.houseDetails?.beds || 'no beds'}</Desc>
                  </Wrapper.Box>
                  <Wrapper.Box>
                      <Subtitle>Bathroom:</Subtitle>
                      <Desc>{house?.houseDetails?.bath || 'no bath'}</Desc>
                  </Wrapper.Box>
                  <Wrapper.Box>
                      <Subtitle>Garage:</Subtitle>
                      <Desc>{house?.houseDetails?.garage || 'no garage'}</Desc>
                  </Wrapper.Box>
                  <Wrapper.Box>
                      <Subtitle>Garage size:</Subtitle>
                      <Desc>2021-01-09</Desc>
                  </Wrapper.Box>
              </Wrapper.Col>
              <Wrapper.Col>
                  <Wrapper.Box>
                      <Subtitle>Property Type:</Subtitle>
                      <Desc>{house?.category?.name || 'no name'}</Desc>
                  </Wrapper.Box>
                  <Wrapper.Box>
                      <Subtitle>Property Status:</Subtitle>
                      <Desc>For sale</Desc>
                  </Wrapper.Box>
                 
              </Wrapper.Col>
          </Wrapper>
      </Container>
    )
  }
