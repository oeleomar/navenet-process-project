import { HeaderComponent } from "../HeaderComponent";
import { ListComponent } from "../ListComponent";
import { ParagraphComponent } from "../ParagraphComponent";
import { VideoComponent } from "../VideoComponent";

export const ProcessComponent = ({ data }) => {
  const {
    _id: id,
    ativo,
    setor,
    tipo,
    titulo,
    descricao,
    documento,
    video,
  } = data;

  if (!ativo) return;

  return (
    <div>
      <h2>{titulo}</h2>
      <span>{setor}</span>
      <span>{tipo}</span>
      <VideoComponent data={video} />
      {descricao
        ? descricao.map((desc) => {
            if (desc.type === "header")
              return <HeaderComponent data={desc} key={desc.id} />;

            if (desc.type === "paragraph")
              return <ParagraphComponent data={desc} key={desc.id} />;

            if (desc.type === "list")
              return <ListComponent data={desc} key={desc.id} />;
          })
        : ""}

      <iframe
        src={`http://localhost:3000/docs/${documento}`}
        frameBorder="0"
      ></iframe>
    </div>
  );
};
