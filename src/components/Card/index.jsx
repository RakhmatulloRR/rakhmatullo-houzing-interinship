import React from 'react'
import { Container, Img, Info, InfoWrapper, Icons, Footer, User } from './style'
import noimg from '../../assets/imgs/noimg.jpg'

export const Card = ({ info, mr, mb, bg }) => {
  return (
    <Container mr={mr} mb={mb}>
        <Img src={info?.attachments[0]?.imgPath || noimg} />
        <InfoWrapper>
            <User>
                <User.Img src={info?.attachments[0]?.imgPath || noimg} />
            </User>
            <div className='subtitle' style={{whiteSpace: 'nowrap', overflow: 'hidden'}}>{info?.description || "New Apartment Nice Wiew"}</div>
            <div className="description"  style={{whiteSpace: 'nowrap', overflow: 'hidden'}}>{info?.address || "Quincy St, Brooklyn, NY, USA"}</div>

            <Info>
                <Info.Detail>
                    <Icons.Bed />
                    <div className="description">{info?.houseDetails?.room || 0} Beds</div>
                </Info.Detail>
                <Info.Detail>
                    <Icons.Bath />
                    <div className="description">{info?.houseDetails?.bath || 0} Baths</div>
                </Info.Detail>
                <Info.Detail>
                    <Icons.Garage />
                    <div className="description">{info?.houseDetails?.garage || 0} Garages</div>
                </Info.Detail>
                <Info.Detail>
                    <Icons.Ruler />
                    <div className="description">{info?.houseDetails?.area || 0} Sq Ft</div>
                </Info.Detail>
            </Info>
        </InfoWrapper>
        <Footer>
            <Info.Detail>
                <div className="description deleted">
                    {info?.salePrice || 0}/mo
                </div>
                <div className="subtitle">{info?.price || 0}/mo</div>
            </Info.Detail>
            <Info.Detail className='endToRight'>
                <div className='center'>
                    <Icons.Resize />
                    <Icons.Love bg={bg} />
                </div>
            </Info.Detail>
        </Footer>
    </Container>
  )
}

export default Card


