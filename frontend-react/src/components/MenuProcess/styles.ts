import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin: 1rem 10rem;
    box-shadow: ${theme.shadows.medium};
    display: flex;
    justify-content: space-between;
    align-items: center;

    > a {
      width: 100%;
      padding-left: 1.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    > div.container-tools {
      display: flex;
    }
  `}
`;
