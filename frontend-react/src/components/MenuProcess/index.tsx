import { Link } from "react-router-dom";
import { MenuDescriptionProcess } from "../MenuDescriptionProcess";
import { MenuTitleProcess } from "../MenuTitleProcess";
import * as Styled from "./styles";

export type MenuProcessProps = {
  title: string;
  admin?: boolean;
  setor: string;
  id: string;
};

export const MenuProcess = ({
  title,
  admin = false,
  setor,
  id,
}: MenuProcessProps) => {
  if (admin) {
    return <h1>Admin</h1>;
  }

  return (
    <Styled.Wrapper>
      <Link to={`/setor/${setor}/${id}`}>
        <MenuTitleProcess title={title} />
        <MenuDescriptionProcess />
      </Link>
    </Styled.Wrapper>
  );
};
