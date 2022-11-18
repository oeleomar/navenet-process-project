import * as Styled from "./styles";

export const VideoParagraphComponent = ({ text }: any) => {
  return <Styled.Paragraph dangerouslySetInnerHTML={{ __html: text }} />;
};
