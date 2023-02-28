import React from "react";
import {
  Button,
  Container,
  ContainerWrapper,
  Description,
  Discount,
  Price,
  Products,
  Shipment,
  Subtotal,
  WrapperBag,
} from "./style";

const InfoBag = () => {
  return (
    <>
      <Container>
        <ContainerWrapper>
          <WrapperBag>
            <Description>
              <Products>Produtos: (3 itens)</Products>
              <Price>R$ 624,80</Price>
            </Description>
            <Description>
              <Shipment>Frete: </Shipment>
              <Price>R$ 5,30</Price>
            </Description>
            <Description>
              <Discount>Desconto: </Discount>
              <Price>R$ 30,00</Price>
            </Description>
            <Description>
              <Subtotal className="bold">Subtotal: </Subtotal>
              <Price className="bold">R$ 600,10</Price>
            </Description>
          </WrapperBag>
          <Button>Seguir para o pagamento</Button>
        </ContainerWrapper>
      </Container>
    </>
  );
};

export default InfoBag;
