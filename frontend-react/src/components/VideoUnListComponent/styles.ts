import styled, { css } from "styled-components";

export const Ul = styled.ul`
  ${({ theme }) => css`
    margin: 1rem 0;
    margin-left: 3rem;
  `}
`;

export const Li = styled.li`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.black};
  `}
`;
