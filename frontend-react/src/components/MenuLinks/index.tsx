import { Link } from "react-router-dom";
import * as Styled from "./styles";

export type MenuLinksProps = {
  href: string;
  pathName: string;
};

export const MenuLinks = ({ href, pathName }: MenuLinksProps) => {
  return (
    <Styled.Li active>
      <Link to={href}>
        {"> "} {pathName}
      </Link>
    </Styled.Li>
  );
};
