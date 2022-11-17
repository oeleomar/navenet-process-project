import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin: 1rem 10rem;
    box-shadow: ${theme.shadows.medium};

    > a {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 1.5rem;
    }
  `}
`;
