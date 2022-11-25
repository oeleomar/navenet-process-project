import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Upload } from "@styled-icons/bootstrap/Upload";
import { MenuProcess } from "../../components/MenuProcess";
import { SectionComponent } from "../../components/SectionComponent";
import { TitleComponent } from "../../components/TitleComponent";
import config from "../../config";
import { DataSetor } from "../Setor";
import * as Styled from "./styles";

export type AdminSetorProps = {
  title?: string;
};

export const AdminSetor = ({ title }: AdminSetorProps) => {
  const param = useParams();
  const [data, setData] = useState<DataSetor[] | null>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios(config.url + config.slugProcess + param.setor);
        setData(data.data.data);
      } catch (e) {
        //
      }
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
        <Styled.MainContainer>
          <TitleComponent title="Processos" />
          <Link to={`/admin/setor/${param.setor}/new`}>
            <Styled.ButtonAdd>
              <Upload size={16} />
              NOVO UPLOAD
            </Styled.ButtonAdd>
          </Link>
        </Styled.MainContainer>
        {data.map((val) => {
          if (!val.ativo) return "";
          return <MenuProcess title={val.titulo} key={val.id} {...val} admin />;
        })}
      </SectionComponent>
    </Styled.Wrapper>
  );
};
