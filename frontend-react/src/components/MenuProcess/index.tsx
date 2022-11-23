import { Link } from "react-router-dom";
import { AdminDeleteTool } from "../AdminDeleteTool";
import { AdminEditTool } from "../AdminEditTool";
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
    return (
      <Styled.Wrapper>
        <Link to={`/admin/${setor}/${id}`}>
          <MenuTitleProcess title={title} />
          <MenuDescriptionProcess />
        </Link>
        <div className="container-tools">
          <AdminEditTool />
          <AdminDeleteTool />
        </div>
      </Styled.Wrapper>
    );
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
