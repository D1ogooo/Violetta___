import styled from "styled-components";
import { Link } from "react-router-dom";

export const Cabecalho = styled.header`
  height: 113px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 44px;
`;

export const BackButton = styled(Link)`
  cursor: pointer;
  width: 0;
  height: 0;
  border-top: 25px solid transparent;
  border-bottom: 25px solid transparent;
  border-right: 55px solid #fff;
`;
