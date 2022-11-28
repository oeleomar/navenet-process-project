import { Link, useParams } from "react-router-dom";
import * as Styled from "./styles";

export type MenuLinksProps = {
  href: string;
  pathName: string;
};

export const MenuLinks = ({ href, pathName }: MenuLinksProps) => {
  const handleClick = (e: any) => {
    const childs = e.target.parentNode.parentNode.childNodes;
    for (let i = 0; i < childs.length; i++) {
      childs[i].classList.remove("active");
    }
    e.target.parentNode.classList.add("active");
  };

  return (
    <Styled.Li>
      <Link to={href} onClick={handleClick}>
        {"> "} {pathName}
      </Link>
    </Styled.Li>
  );
};
