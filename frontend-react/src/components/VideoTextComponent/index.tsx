import { VideoDelimiterComponent } from "../VideoDelimiterComponent";
import { VideoOrListComponent } from "../VideoOrListComponent";
import { VideoParagraphComponent } from "../VideoParagraphComponent";
import { VideoTitleComponent } from "../VideoTitleComponent";
import { VideoUnListComponent } from "../VideoUnListComponent";
import * as Styled from "./styles";

export type VideoTextComponentProps = {
  id: string;
  type?: string;
  data: DataDescriptionProps;
};

export interface DataDescriptionProps {
  text?: string;
  level?: number;
  items?: Array<string>;
  style?: string;
}

export const VideoTextComponent = ({
  id,
  type,
  data,
}: VideoTextComponentProps) => {
  console.log(type);
  if (type === "header") {
    return <VideoTitleComponent {...data} />;
  }
  if (type === "paragraph") {
    return <VideoParagraphComponent text={data.text} />;
  }
  if (type === "list") {
    if (data.style === "ordered")
      return <VideoOrListComponent data={data} id={id} />;
    return <VideoUnListComponent id={id} data={data} />;
  }
  if (type === "delimiter") {
    return <VideoDelimiterComponent />;
  }
  return <Styled.Wrapper></Styled.Wrapper>;
};
