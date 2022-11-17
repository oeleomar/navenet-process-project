import styled, { css } from "styled-components";

export const Video = styled.video`
  ${({ theme }) => css`
    width: 64rem;
    height: 36rem;
    display: block;
    margin: 0 auto;

    &:hover + div {
      opacity: 1;
      background-color: rgba(0, 0, 0, 0.3);
    }
  `}
`;

export const Source = styled.source`
  ${({ theme }) => css``}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.darkBlack};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64rem;
    height: 36rem;
    margin: 0 auto;
    color: ${theme.colors.darkWhite};
  `}
`;

export const Controls = styled.div`
  ${({ theme }) => css`
    width: 64rem;
    margin: 0 auto;
    background-color: transparent;
    transform: translateY(-4rem);
    transition: all 0.3s ease-in-out;
    opacity: 0;
    display: flex;
    align-items: center;

    &:hover {
      opacity: 1;
      background-color: rgba(0, 0, 0, 0.3);
    }
  `}
`;

export const ButtonControl = styled.button`
  ${({ theme }) => css`
    width: 5rem;
    height: 4rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${theme.colors.darkWhite};
  `}
`;

export const InputControl = styled.input`
  ${({ theme }) => css`
    width: 80%;
    margin: 0 2rem;
    -webkit-appearance: none;
    background-color: transparent;

    &:focus {
      outline: none;
    }

    &::-webkit-slider-runnable-track {
      width: 100%;
      height: 5px;
      cursor: pointer;
      animate: 0.2s;
      box-shadow: 0px 0px 0px #000000;
      background: #2497e3;
      border-radius: 1px;
      border: 0px solid #000000;
    }

    &::-webkit-slider-thumb {
      box-shadow: 0px 0px 0px #000000;
      border: 1px solid #2497e3;
      height: 18px;
      width: 18px;
      border-radius: 25px;
      background: #a1d0ff;
      cursor: pointer;
      -webkit-appearance: none;
      margin-top: -7px;
    }

    &:focus::-webkit-slider-runnable-track {
      background: #2497e3;
    }

    &::-moz-range-track {
      width: 100%;
      height: 5px;
      cursor: pointer;
      animate: 0.2s;
      box-shadow: 0px 0px 0px #000000;
      background: #2497e3;
      border-radius: 1px;
      border: 0px solid #000000;
    }

    &::-moz-range-thumb {
      box-shadow: 0px 0px 0px #000000;
      border: 1px solid #2497e3;
      height: 18px;
      width: 18px;
      border-radius: 25px;
      background: #a1d0ff;
      cursor: pointer;
    }
    &::-ms-track {
      width: 100%;
      height: 5px;
      cursor: pointer;
      animate: 0.2s;
      background: transparent;
      border-color: transparent;
      color: transparent;
    }
    &::-ms-fill-lower {
      background: #2497e3;
      border: 0px solid #000000;
      border-radius: 2px;
      box-shadow: 0px 0px 0px #000000;
    }
    &::-ms-fill-upper {
      background: #2497e3;
      border: 0px solid #000000;
      border-radius: 2px;
      box-shadow: 0px 0px 0px #000000;
    }
    &::-ms-thumb {
      margin-top: 1px;
      box-shadow: 0px 0px 0px #000000;
      border: 1px solid #2497e3;
      height: 18px;
      width: 18px;
      border-radius: 25px;
      background: #a1d0ff;
      cursor: pointer;
    }
    &:focus::-ms-fill-lower {
      background: #2497e3;
    }
    &:focus::-ms-fill-upper {
      background: #2497e3;
    }
  `}
`;

export const SelectControl = styled.select`
  ${({ theme }) => css`
    width: 5rem;
    text-align: center;
    background-color: transparent;
    border: none;
    font-family: inherit;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.white};
  `}
`;

export const SelectOptionControl = styled.option`
  ${({ theme }) => css`
    background-color: ${theme.colors.darkBlack};
  `}
`;
