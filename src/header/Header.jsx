import React from "react";
import { Container, ContainerWrapper, Nav } from "./style";

const Header = () => {
  return (
    <>
      <Container>
        <ContainerWrapper>
          <Nav to="/bag">Sacola</Nav>
          <Nav to="/payment">Pagamento</Nav>
          <Nav to="/confirmation">Confirmação</Nav>
        </ContainerWrapper>
      </Container>
    </>
  );
};

export default Header;
