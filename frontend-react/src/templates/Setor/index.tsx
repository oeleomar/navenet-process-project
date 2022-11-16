import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
    return <h1>Carregando</h1>;
  }

  if (data.length === 0) {
    return <h1>Sem dados cadastrados</h1>;
  }

  return (
    <Styled.Wrapper>
      {data.map((val: DataSetor) => (
        <h1>{val.titulo}</h1>
      ))}
    </Styled.Wrapper>
  );
};
