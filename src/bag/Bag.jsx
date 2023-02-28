import React from "react";
import {
  Container,
  ContainerWrapper,
  Description,
  Price,
  ProductImg,
  ProductInfo,
} from "./style";

const Bag = () => {
  return (
    <>
      <Container>
        <ContainerWrapper>
          <ProductInfo>
            <ProductImg src="https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/1/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png" />
            <Description>
              L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium -
              Máscara de Reconstrução 500g
            </Description>
            <Price>225.9</Price>
          </ProductInfo>
          <ProductInfo>
            <ProductImg src="https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/1/good-girl-carolina-herrera-eau-de-parfum-perfume-feminino-30ml-38273-1960525940762131267.jpg" />
            <Description>
              Good Girl Carolina Herrera Eau de Parfum - Perfume Feminino 30ml
            </Description>
            <Price>299</Price>
          </ProductInfo>
          <ProductInfo>
            <ProductImg src="https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/1/senscience-inner-restore-intesif-deep-repairing-masque-mascara-de-tratamento-50ml-3019-7903251722539384904.png" />
            <Description>
              Senscience Inner Restore Intensif - Máscara Capilar 50ml
            </Description>
            <Price>99.9</Price>
          </ProductInfo>
        </ContainerWrapper>
      </Container>
    </>
  );
};

export default Bag;
