import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MenuProcess } from "../../components/MenuProcess";
import { SectionComponent } from "../../components/SectionComponent";
import { TitleComponent } from "../../components/TitleComponent";
import config from "../../config";
import * as Styled from "./styles";

export type SetorProps = {};
interface DataSetor {
  ativo: boolean;
  titulo: string;
  setor: string;
  id: string;
}

export const Setor = () => {
  const param = useParams();
  const [data, setData] = useState<DataSetor[] | null>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios(config.url + config.slugProcess + param.setor);
      setData(data.data.data);
    };
    fetchData();
  }, [param]);

  if (!data) {
    return (
      <SectionComponent>
        <TitleComponent title="Carregando..." />
      </SectionComponent>
    );
  }

  if (data.length === 0) {
    return (
      <SectionComponent>
        <TitleComponent title="Nenhum dado cadastrado" />
      </SectionComponent>
    );
  }

  return (
    <Styled.Wrapper>
      <SectionComponent>
        <TitleComponent title="Processos" />
        {data.map((val) => {
          if (!val.ativo) return "";
          return <MenuProcess title={val.titulo} key={val.id} {...val} />;
        })}
      </SectionComponent>
    </Styled.Wrapper>
  );
};
