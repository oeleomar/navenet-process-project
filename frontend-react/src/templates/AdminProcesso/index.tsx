import { Processo } from "../Processo";
import * as Styled from "./styles";

export type AdminProcessoProps = {
  title?: string;
};

export const AdminProcesso = ({ title }: AdminProcessoProps) => {
  return <Processo admin />;
};
