import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.redPrimary};
    box-shadow: ${theme.shadows.small};
    padding-bottom: 10px;

    > img {
    }
  `}
`;

export const Image = styled.img`
  display: block;
  margin: 0 auto;
`;
