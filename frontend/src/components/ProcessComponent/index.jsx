import { HeaderComponent } from "../HeaderComponent";
import { ListComponent } from "../ListComponent";
import { ParagraphComponent } from "../ParagraphComponent";

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
    <>
      <h2>{titulo}</h2>
      <span>{setor}</span>
      <span>{tipo}</span>
      {descricao
        ? descricao.map((desc) => {
            console.log(desc);
            if (desc.type === "header")
              return <HeaderComponent data={desc} key={desc.id} />;

            if (desc.type === "paragraph")
              return <ParagraphComponent data={desc} key={desc.id} />;

            if (desc.type === "list")
              return <ListComponent data={desc} key={desc.id} />;
          })
        : ""}
    </>
  );
};
