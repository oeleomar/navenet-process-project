import { VideoPlayer } from "../VideoPlayer";
import { VideoTextComponent } from "../VideoTextComponent";
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
      {descricao.length > 0
        ? descricao.map((val: any) => (
            <VideoTextComponent
              id={val.id}
              data={val.data}
              type={val.type}
              key={val.id}
            />
          ))
        : ""}
    </Styled.Wrapper>
  );
};
