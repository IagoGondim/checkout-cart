import React from "react";
import { Container, ContainerWrapper } from "../bag/style";
import { CardInfo, Title, CardWrapper } from "./style";

const Payment = () => {
  return (
    <>
      <Container>
        <ContainerWrapper>
          <CardWrapper>
            <Title>Cartão de crédito</Title>
            <CardInfo></CardInfo>
          </CardWrapper>
        </ContainerWrapper>
      </Container>
    </>
  );
};

export default Payment;
