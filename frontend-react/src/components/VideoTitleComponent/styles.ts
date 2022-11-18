import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin: 3rem 0;
  `}
`;

export const Titleh1 = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: 800;
    color: ${theme.colors.darkBlack};

    &::selection {
      background: ${theme.colors.redTransparent};
    }
  `}
`;

export const Titleh2 = styled.h2`
  ${({ theme }) => css`
    font-size: 3.5rem;
    font-weight: 700;
    color: ${theme.colors.darkBlack};
  `}
`;

export const Titleh3 = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: 700;
    color: ${theme.colors.darkBlack};
  `}
`;
