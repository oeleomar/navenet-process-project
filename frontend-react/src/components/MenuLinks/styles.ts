import styled, { css } from "styled-components";

interface LiInterface {
  active: boolean;
}

export const Li = styled.li<LiInterface>`
  ${({ theme, active }) => css`
    background-color: ${active ? theme.colors.redPrimary : "transparent"};
    width: 100%;
    list-style: none;
    padding: 0 4rem;

    > a {
      color: white;
      text-decoration: none;
      display: block;
      width: 100%;
      padding: 2rem 0;
      font-size: ${theme.font.sizes.small};
      text-align: start;
      color: ${active ? theme.colors.darkWhite : theme.colors.black};
    }
  `}
`;
