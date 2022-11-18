import styled, { css } from "styled-components";

export const Wrapper = styled.hr`
  ${({ theme }) => css`
    background-color: ${theme.colors.black};
    height: 5px;
  `}
`;
