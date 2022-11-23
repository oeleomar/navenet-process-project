import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { Login } from "../../components/Login";
import * as Styled from "./styles";

export type LoginTemplateProps = {
  title?: string;
};

export const LoginTemplate = ({ title }: LoginTemplateProps) => {
  const location = useLocation();
  const locate = location.pathname.split("/")[1];
  console.log(location, locate);
  return (
    <Styled.Wrapper>
      {locate === "admin" ? <Login admin /> : <Login admin={false} />}
    </Styled.Wrapper>
  );
};
