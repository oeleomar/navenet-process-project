import * as Styled from "./styles";

export type AdminProps = {
  title?: string;
};

export const Admin = ({ title }: AdminProps) => {
  return (
    <Styled.Wrapper>
      <h1>Oi</h1>
      <p>{title}</p>
    </Styled.Wrapper>
  );
};
