import { DataDescriptionProps } from "../VideoTextComponent";
import * as Styled from "./styles";

export const VideoTitleComponent = ({ level, text }: DataDescriptionProps) => {
  if (level === 1) {
    return (
      <Styled.Wrapper>
        <Styled.Titleh1>{text}</Styled.Titleh1>
      </Styled.Wrapper>
    );
  }
  if (level === 2) {
    return (
      <Styled.Wrapper>
        <Styled.Titleh2>{text}</Styled.Titleh2>
      </Styled.Wrapper>
    );
  }
  return (
    <Styled.Wrapper>
      <Styled.Titleh3>{text}</Styled.Titleh3>
    </Styled.Wrapper>
  );
};
