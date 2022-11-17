import * as Styled from "./styles";

export type MenuProcessProps = {
  title?: string;
};

export const MenuProcess = ({ title }: MenuProcessProps) => {
  return (
    <Styled.Wrapper>
      <h1>Oi</h1>
      <p>{title}</p>
    </Styled.Wrapper>
  );
};
