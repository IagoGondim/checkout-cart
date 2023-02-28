import styled from "styled-components";

export const Container = styled.section`
  background: #ffffff;
`;
export const ContainerWrapper = styled.div`
  width: 350px;
  margin: 0 auto;
`;
export const WrapperBag = styled.div`
  width: 100%;
  height: 20vh;
  margin-top: 3rem;
`;
export const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5rem;
`;
export const Price = styled.p`
  &.bold {
    font-weight: bold;
  }
`;
export const Products = styled.p``;
export const Shipment = styled.p``;
export const Discount = styled.p``;
export const Subtotal = styled.p`
  &.bold {
    font-weight: bold;
  }
`;
export const Button = styled.button`
  width: 100%;
  height: 3rem;
  border: none;
  border-radius: 10px;
  background: #9323dc;
  font-size: 1.125rem;
  color: #ffffff;
  font-weight: 700;
`;
