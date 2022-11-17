import styled, { css } from "styled-components";

export const Li = styled.li`
  ${({ theme }) => css`
    width: 100%;
    list-style: none;
    padding: 0 4rem;
    transition: all 0.3s ease-in-out;

    &.active {
      background-color: ${theme.colors.redTransparent};
    }

    &.active > a {
      color: ${theme.colors.white};
    }
    > a {
      color: white;
      text-decoration: none;
      display: block;
      width: 100%;
      padding: 2rem 0;
      font-size: ${theme.font.sizes.small};
      text-align: start;
      color: ${theme.colors.black};
    }
  `}
`;
