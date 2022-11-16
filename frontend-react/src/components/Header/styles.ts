import styled, { css } from "styled-components";

export const Header = styled.header`
  ${({ theme }) => css`
    width: 20%;
    height: 100vh;
    position: fixed;
    background-color: ${theme.colors.darkBlack};
  `}
`;
