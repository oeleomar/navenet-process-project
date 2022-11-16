import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.redPrimary};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: ;

    > img {
      display: block;
      margin: 0 auto;
    }
  `}
`;
