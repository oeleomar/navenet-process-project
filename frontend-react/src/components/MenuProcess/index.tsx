import { Link } from "react-router-dom";
import { AdminDeleteTool } from "../AdminDeleteTool";
import { AdminEditTool } from "../AdminEditTool";
import { MenuDescriptionProcess } from "../MenuDescriptionProcess";
import { MenuTitleProcess } from "../MenuTitleProcess";
import { AlertCircleOutline } from "@styled-icons/evaicons-outline/AlertCircleOutline";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
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
          <AlertDialog.Root>
            <AlertDialog.Trigger>
              <AdminDeleteTool />
            </AlertDialog.Trigger>
            <AlertDialog.Portal>
              <AlertDialog.Overlay className="AlertDialogOverlay" />
              <AlertDialog.Content className="AlertDialogContent">
                <AlertDialog.Title className="AlertDialogTitle">
                  <AlertCircleOutline size={64} />
                </AlertDialog.Title>
                <AlertDialog.Description className="AlertDialogDescription">
                  Com essa ação você irá apagar todo o processo e todos os
                  arquivos relacionados com o mesmo.
                </AlertDialog.Description>
                <div
                  style={{
                    display: "flex",
                    gap: 25,
                    justifyContent: "center",
                  }}
                >
                  <AlertDialog.Action asChild>
                    <button className="Button red">Sim</button>
                  </AlertDialog.Action>
                  <AlertDialog.Cancel asChild>
                    <button className="Button mauve">Não</button>
                  </AlertDialog.Cancel>
                </div>
              </AlertDialog.Content>
            </AlertDialog.Portal>
          </AlertDialog.Root>
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
