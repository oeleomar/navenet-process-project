import { VideoPlayer } from "../VideoPlayer";
import * as Styled from "./styles";

export type ProcessProps = {
  _id: string;
  ativo: boolean;
  descricao: Array<{}>;
  documento: string;
  documentosAntigos: Array<{}>;
  setor: string;
  tipo: string;
  titulo: string;
  video: string;
};

export const VideoComponent = ({
  _id,
  ativo,
  descricao,
  video,
  ...rest
}: ProcessProps) => {
  return (
    <Styled.Wrapper>
      <VideoPlayer video={video} />
    </Styled.Wrapper>
  );
};
