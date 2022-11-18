import { VideoTextComponentProps } from "../VideoTextComponent";
import * as Styled from "./styles";

export const VideoOrListComponent = ({ data, id }: VideoTextComponentProps) => {
  const { items } = data;
  return (
    <Styled.Ol>
      {items?.map((val) => (
        <Styled.Li key={id + "-" + val}>{val}</Styled.Li>
      ))}
    </Styled.Ol>
  );
};
