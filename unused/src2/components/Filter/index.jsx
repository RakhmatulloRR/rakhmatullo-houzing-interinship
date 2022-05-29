import { Popover } from 'antd'
import React from 'react'
import { Input, Button } from '../Generic'
import { Container, Icon, Advanced, Section } from './style'

export default function Filter() {
  
  const advancedSearch = ( //!Popover
    <Advanced>
      <Advanced.Title>Address</Advanced.Title>
      <Section>
        <Input placeholder='Country' />
        <Input placeholder='Region' />
        <Input
        
        
          placeholder='City'
        />
        <Input placeholder='Zip Code' />
      </Section>
      <Advanced.Title>Apartment info</Advanced.Title>
      <Section>
        <Input placeholder='Adress' />
        <Input placeholder='House Name' />
        <Input placeholder='Rooms' />
      </Section>
      <Advanced.Title>Price</Advanced.Title>
      <Section>
        <Input placeholder='Min price' />
        <Input placeholder='Max price' />
      </Section>
      <Section>
        {/* <Button width='131px' ml={20} type='secondary'>
          Cancel
        </Button> */}
        <Button width='131px' ml={20} type='primary' >
          Search
        </Button>
      </Section>
    </Advanced>
  );
  return (
    <Container>
      <Input pl={45} placeholder={"Enter an address, neighborhood, city, or ZIP code"}>
        <Icon.Home/>
      </Input>
      <Popover
          placement='bottomRight'
          content={advancedSearch}
          trigger='click'
        >
          <Button width='131px' type='secondary'>
            <Icon.Setting /> Advanced
          </Button>
        </Popover>
      <Button width={"180px"} type={"primary"}> <Icon.Search/> Search</Button>
    </Container>
  )
}

