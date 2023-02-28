import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
  background: #ffffff;
`;
export const ContainerWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  max-width: 425px;
  height: 2.3125rem;
  margin: 0 auto;
  border-bottom: 2px solid rgba(156, 157, 156, 0.4);

  @media (min-width: 768px) {
    max-width: 768px;
  }
  @media (min-width: 1440px) {
    max-width: 1440px;
  }
`;
export const Nav = styled(NavLink)`
  font-size: 0.875rem;
  font-weight: 400;
  color: #000000;
  height: 2.3125rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &.active {
    border-bottom: 4px solid rgba(156, 157, 156, 1);
  }
`;
