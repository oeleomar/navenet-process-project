import { MenuLinks } from 'components/MenuLinks';
import * as Styled from './styles';

import { paths } from 'utils/paths';

export type MenuProps = {
  title?: string;
};

export const Menu = ({ title }: MenuProps) => {
  return (
    <Styled.Nav>
      <Styled.Ul>
        {paths.map((val) => (
          <MenuLinks pathName={val.pathName} href={val.params.slug} />
        ))}
        <MenuLinks href="/suporte" pathName="Suporte" />
      </Styled.Ul>
    </Styled.Nav>
  );
};
