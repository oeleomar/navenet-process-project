import * as Styled from "./styles";

export type PopComponentProps = {
  title?: string;
};

export const PopComponent = ({ title }: PopComponentProps) => {
  return (
    <Styled.Wrapper>
      <h1>pop</h1>
    </Styled.Wrapper>
  );
};
