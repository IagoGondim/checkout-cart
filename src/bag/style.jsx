import styled from "styled-components";

export const Container = styled.section`
  background: #cccccc;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContainerWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 8px;
  padding: 0.3rem;
  height: 40vh;
  background: #ffffff;
  border: 1px solid #cdcdcd;
  border-radius: 2%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const ProductImg = styled.img``;
export const Description = styled.p`
  font-size: 0.75rem;
  width: 70%;
  align-items: flex-start;
`;
export const Price = styled.p`
  font-size: 0.875rem;
  font-weight: bold;
`;
