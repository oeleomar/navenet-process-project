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
  ${({ theme }) => css`
    margin: 1.8rem 0;
    display: flex;
    width: 100%;
  `}
`;

export const ContainerDescription = styled.div`
  ${({ theme }) => css`
    padding: 1.4rem 2.3rem;
    background-color: ${theme.colors.darkWhite};
    box-shadow: ${theme.shadows.medium};
    border-radius: 1rem;
    width: 70%;

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

export const Editor = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
  `}
`;

export const ContainerOptions = styled.div`
  ${({ theme }) => css`
    width: 25%;
  `}
`;

export const OptionTitle = styled.h3`
  ${({ theme }) => css`
    font-size: calc(${theme.font.sizes.small} - 0.3rem);
    font-weight: 700;
    margin-bottom: 1.7rem;
  `}
`;

export const OptionLabel = styled.label`
  ${({ theme }) => css`
    font-weight: 700;
    color: ${theme.colors.black};
  `}
`;

export const OptionInputRadio = styled.input`
  ${({ theme }) => css`
    margin: 0.6rem;
    margin-left: 0;
  `}
`;
