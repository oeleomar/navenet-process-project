import { VideoTextComponentProps } from "../VideoTextComponent";
import * as Styled from "./styles";

export const VideoUnListComponent = ({ data, id }: VideoTextComponentProps) => {
  const { items } = data;
  return (
    <Styled.Ul>
      {items?.map((val) => (
        <Styled.Li key={id + "-" + val}>{val}</Styled.Li>
      ))}
    </Styled.Ul>
  );
};
