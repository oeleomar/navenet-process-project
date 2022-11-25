import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 4.5rem 10rem;
  `}
`;

export const MainContainer = styled.div`
  ${({ theme }) => css`
    display: flex;

    > a {
      margin-right: 1.5rem;
    }

    > div {
      padding: 0;
    }
  `}
`;

export const ButtonAdd = styled.button`
  ${({ theme }) => css`
    width: 12rem;
    height: 6rem;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.darkWhite};
    border: none;
    border-radius: 1.5rem;
    cursor: pointer;
    font-weight: 500;
    font-family: inherit;
    font-size: calc(${theme.font.sizes.small} - 0.2rem);
    display: flex;
    justify-content: center;
    align-items: center;

    > svg {
      margin-right: 2px;
    }
  `}
`;

export const ContainerAdd = styled.div`
  ${({ theme }) => css``}
`;

export const ContainerDescription = styled.div`
  ${({ theme }) => css`
    padding: 1.4rem 2.3rem;
    background-color: ${theme.colors.darkWhite};
    box-shadow: ${theme.shadows.medium};
    border-radius: 1rem;
    max-width: 75%;

    > label {
      display: block;
      margin-bottom: 0.6rem;
      font-weight: 500;
      font-size: calc(${theme.font.sizes.small} - 0.4rem);
      color: ${theme.colors.black};
    }
    > input {
      margin-bottom: 2rem;
      width: 100%;
      height: 3.7rem;
      border: 1px solid #cecece;
      border-radius: 10px;
      font-size: ${theme.font.sizes.small};
      font-family: inherit;
    }
  `}
`;

export const LabelRequired = styled.label`
  ${({ theme }) => css`
    &::after {
      content: "*";
      color: ${theme.colors.redPrimary};
    }
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css``}
`;

export const Label = styled.label`
  ${({ theme }) => css``}
`;
