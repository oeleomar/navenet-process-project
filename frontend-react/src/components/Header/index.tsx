import { LogoImage } from "../LogoImage";
import { Menu } from "../Menu";
import * as Styled from "./styles";

export type HeaderProps = {
  title?: string;
};

export const Header = ({ title }: HeaderProps) => {
  return (
    <Styled.Header>
      <LogoImage />
      <Menu />
    </Styled.Header>
  );
};
