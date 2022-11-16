import * as Styled from './styles';
import Link from 'next/link';

export type MenuLinksProps = {
  pathName: string;
  href: string;
};

export const MenuLinks = ({ pathName, href }: MenuLinksProps) => {
  return (
    <Styled.Wrapper>
      <Link href={href}>{pathName}</Link>
    </Styled.Wrapper>
  );
};
