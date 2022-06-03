import styled from 'styled-components';
import {ReactComponent as bed} from '../../assets/icons/bed.svg'
import {ReactComponent as bath} from '../../assets/icons/bath.svg'
import {ReactComponent as garage} from '../../assets/icons/car.svg'
import {ReactComponent as ruler} from '../../assets/icons/ruler.svg'
import {ReactComponent as resize} from '../../assets/icons/resize.svg'
import {ReactComponent as love} from '../../assets/icons/love.svg'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #E6E9EC;
    border-radius: 3px;
    background-color: #FFFFFF;
    /* max-width: 380px;
    min-width: 380px; */
    width: 380px;
    height: 430px;
    margin-right: ${({ mr }) => mr && `${mr}px`};
    margin-bottom: ${({ mb }) => mb && `${mb}px`};
`

const Img = styled.div`
    width: 100%;
    /* height: 220px; */
    background-image: url(${({src}) => src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    min-height: 220px;
    max-height: 220px;
`

const InfoWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 25px 25px 0px 20px;
    border-top: 1px solid #e6e9ec;
`

const Info = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 16px 0px;
`

Info.Detail = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Icons = styled.div``

Icons.Bed = styled(bed)``
Icons.Bath = styled(bath)``
Icons.Garage = styled(garage)``
Icons.Ruler = styled(ruler)``
Icons.Resize = styled(resize)`
    width: 35px;
    height: 35px;
    padding: 10px;
    cursor: pointer;
    :active{
        transform: scale(0.97);
    }
`
Icons.Love = styled(love)`
    border-radius: 50%;
    margin-left: 20px;
    width: 35px;
    height: 35px;
    padding: 10px;
    cursor: pointer;
    background-color: ${({bg}) => bg || '#F6F8F9'} ;
    path{
        fill: black;
    }
    :active{
        transform: scale(0.97);
    }
`

const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border-top: 1px solid #E6E9EC;
    padding: 0 20px;
    height: 100%;
`

const User = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-content: center;
    width: 46px;
    height: 46px;
    right: 20px;
    top: -23px;
    border-radius: 50%;
    border: 4px solid white;
    background-color: #ffffff;
    box-shadow: 0px 0px 10px rgba(13, 38, 59, 0.2);
    overflow: hidden;
`

User.Img = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${({src}) => src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    /* object-fit: cover; */
`

export { Container, Img, InfoWrapper, Info, Icons, Footer, User }


