import * as Styled from "./styles";

export type Page404Props = {
  title?: string;
};

export const Page404 = ({ title }: Page404Props) => {
  return (
    <Styled.Wrapper>
      <h1>Oi</h1>
      <p>{title}</p>
    </Styled.Wrapper>
  );
};
