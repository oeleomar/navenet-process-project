import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css``}
`;

export const MainContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    padding: 4.5rem 10rem;

    > div {
      padding: 0;
    }
  `}
`;

export const ButtonAdd = styled.button`
  ${({ theme }) => css`
    width: 20rem;
    height: 6rem;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.darkWhite};
    border: none;
    border-radius: 1.5rem;
    cursor: pointer;
    font-weight: 500;
    font-family: inherit;
    font-size: ${theme.font.sizes.small};
    display: flex;
    justify-content: center;
    align-items: center;
    > svg {
      margin-right: 5px;
    }
  `}
`;
