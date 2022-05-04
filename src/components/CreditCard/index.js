import {useState} from 'react'

import {
  Container,
  CardContainer,
  CreditContainer,
  CreditHeading,
  HorizontalLine,
  CreditCardContainer,
  CardsContainer,
  CardNumber,
  CardText,
  CardHolderName,
  PaymentContainer,
  PaymentMethod,
  PaymentHead,
  Input,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardName, setCardName] = useState('')
  const cardholderNameUpperCase = cardName.toUpperCase()

  const onChangeCard = event => {
    setCardNumber(event.target.value)
  }

  const onChangeName = event => {
    setCardName(event.target.value)
  }

  return (
    <Container>
      <CardContainer>
        <CreditContainer>
          <CreditHeading>CREDIT CARD</CreditHeading>
          <HorizontalLine />
        </CreditContainer>
        <CreditCardContainer>
          <CardsContainer data-testid="creditcard">
            <CardNumber>{cardNumber}</CardNumber>
            <CardText>CARDHOLDER NAME</CardText>
            <CardHolderName>{cardholderNameUpperCase}</CardHolderName>
          </CardsContainer>
        </CreditCardContainer>
      </CardContainer>
      <PaymentContainer>
        <PaymentMethod>
          <PaymentHead>Payment Method</PaymentHead>
          <Input
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={onChangeCard}
          />
          <Input
            type="text"
            placeholder="Cardholder Name"
            value={cardName}
            onChange={onChangeName}
          />
        </PaymentMethod>
      </PaymentContainer>
    </Container>
  )
}

export default CreditCard
