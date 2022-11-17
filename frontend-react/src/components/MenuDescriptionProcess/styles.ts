import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.darkWhite2};
    padding: 1rem;
    height: 6rem;
    text-align: center;
  `}
`;

export const Paragraph = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.black};
    font-weight: 500;
  `}
`;

export const Data = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.black};
    font-weight: 500;
    margin-top: 0.5rem;
  `}
`;
