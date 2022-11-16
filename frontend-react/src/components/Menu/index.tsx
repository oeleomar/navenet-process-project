import * as Styled from "./styles";
import { paths } from "../../utils/paths";
import { MenuLinks } from "../MenuLinks";

export type MenuProps = {
  href: string;
  pathName: string;
};

export const Menu = () => {
  return (
    <Styled.Nav>
      <Styled.Ul>
        {paths.map((path) => (
          <MenuLinks href={path.slug} pathName={path.pathName} />
        ))}
      </Styled.Ul>
    </Styled.Nav>
  );
};
