import { LogoImage } from "../LogoImage";
import { Menu } from "../Menu";
import { TopBarOptions } from "../TopBarOptions";
import * as Styled from "./styles";

export type HeaderProps = {
  title?: string;
};

export const Header = ({ title }: HeaderProps) => {
  return (
    <Styled.Header>
      <TopBarOptions />
      <LogoImage />
      <Menu />
    </Styled.Header>
  );
};
