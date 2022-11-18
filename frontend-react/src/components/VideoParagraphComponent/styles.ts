import styled, { css } from "styled-components";

export const Paragraph = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.black};
    margin: 1rem 0;

    mark {
      background: transparent;
      color: ${theme.colors.black};
    }

    a {
      text-decoration: underline;
      color: ${theme.colors.black};
    }
    &::selection {
      background: ${theme.colors.redPrimary};
      color: white;
    }

    > a::selection,
    > mark::selection,
    > code::selection {
      background: ${theme.colors.redPrimary};
      color: white;
    }
  `}
`;
