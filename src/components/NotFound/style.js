import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const Wrapper = styled.div`
     background-image: url(${({imgUrl}) => imgUrl});
     background-repeat: no-repeat;
     background-position: center;
    max-width: 1440px;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 110px 0 110px 0;
    @media (max-width: 768px){
        width: 100%;
        padding: 90px 0;
    }
`;


const Title = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 60px;
    line-height: 38px;
    color: #0D263B;
    margin-bottom: 17px;
    margin-top: 70px;
    @media (max-width: 768px){
        font-size: 23px;
        margin-top: 50px;
        margin-bottom: 14px;
    }
`;




export { Container, Wrapper, Title };