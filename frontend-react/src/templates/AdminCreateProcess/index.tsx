import { Link, useParams } from "react-router-dom";
import { Upload } from "@styled-icons/bootstrap/Upload";

import { SectionComponent } from "../../components/SectionComponent";
import { TitleComponent } from "../../components/TitleComponent";
import * as Styled from "./styles";
import { GoBackSetor } from "../../components/GoBackSetor";

export type AdminCreateProcessProps = {
  title?: string;
};

export const AdminCreateProcess = ({ title }: AdminCreateProcessProps) => {
  const params = useParams();

  return (
    <Styled.Wrapper>
      <SectionComponent>
        <Styled.MainContainer>
          <Link to={`/admin/setor/${params.setor}`}>
            <GoBackSetor />
          </Link>
          <TitleComponent title="Novo Upload" />
          <Styled.ButtonAdd>
            <Upload size={16} />
            Enviar
          </Styled.ButtonAdd>
        </Styled.MainContainer>
        <Styled.ContainerAdd>
          <Styled.ContainerDescription>
            <Styled.LabelRequired>Título</Styled.LabelRequired>
            <Styled.Input />
            <Styled.Label>Conteúdo</Styled.Label>
          </Styled.ContainerDescription>
        </Styled.ContainerAdd>
      </SectionComponent>
    </Styled.Wrapper>
  );
};
