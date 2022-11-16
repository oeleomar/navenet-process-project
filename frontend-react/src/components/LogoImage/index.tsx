import * as Styled from "./styles";

export type LogoImageProps = {};

export const LogoImage = () => {
  return (
    <Styled.Wrapper>
      <img src="./assets/img/logo.svg" alt="Logo da empresa Navenet" />
    </Styled.Wrapper>
  );
};
