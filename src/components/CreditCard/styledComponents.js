import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #3b4b69;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const CreditContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const CreditHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: 600;
  margin-top: 35px;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    font-size: 38px;
    margin-top: 100px;
    margin-bottom: 15px;
    line-height: 1.5;
  }
`

export const HorizontalLine = styled.hr`
  width: 120px;
  border: 2px solid #ffd773;
  margin: 0;
  @media screen and (min-width: 768px) {
    width: 200px;
  }
`

export const CreditCardContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    flex-grow: 1;
  }
`

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  width: 280px;
  height: 200px;
  border-radius: 20px;
  padding: 25px;
  box-shadow: 0px 4px 33px #344e7a;
  @media screen and (min-width: 768px) {
    width: 450px;
    height: 320px;
    border-radius: 50px;
    padding: 50px;
  }
`

export const CardNumber = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  line-height: 1.3;
  margin: 0;
  @media screen and (min-width: 768px) {
    font-size: 45px;
  }
`

export const CardText = styled.p`
  color: #f1f5f9;
  font-size: 14px;
  font-family: 'Roboto';
  margin: 0;
  margin-top: 30px;
  line-height: 1.3;
  @media screen and (min-width: 768px) {
    font-size: 20px;
    margin-top: 50px;
  }
`

export const CardHolderName = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  line-height: 1.5;
  margin: 0;
  margin-top: 10px;
  min-height: 20px;
  @media screen and (min-width: 768px) {
    font-size: 25px;
    margin-top: 15px;
    min-height: 40px;
  }
`

export const PaymentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const PaymentMethod = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  background-color: #ffffff;
  max-width: 350px;
  border-radius: 10px;
  padding: 32px 24px;
  margin-top: 35px;
  box-shadow: 0px 4px 16px #d3d9e0;
  @media screen and (min-width: 768px) {
    max-width: 600px;
    padding: 50px;
    margin: 0;
  }
`

export const PaymentHead = styled.h1`
  color: #475569;
  text-align: center;
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: 600;
  margin: 0;
  margin-bottom: 10px;
  line-height: 1.3;
  @media screen and (min-width: 768px) {
    margin-bottom: 25px;
  }
`

export const Input = styled.input`
  color: #475569;
  background-color: #ffffff;
  font-size: 15px;
  font-family: 'Roboto';
  border: 1px solid #c3cad9;
  border-radius: 4px;
  margin-top: 25px;
  padding: 12px 24px;
  outline: none;
  @media screen and (min-width: 768px) {
    padding: 16px 24px;
  }
`
