import styled from '@emotion/styled';
import { desktop, tablet } from 'shared/constants/deviceSizes';

export const NavBar = styled.nav``;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 10px;

  max-width: 290px;
  margin: 0 auto;

  @media screen and (min-width: ${tablet}) {
    gap: 30px;
    max-width: 100%;
    width: 400px;
  }

  @media screen and (min-width: ${desktop}) {
    gap: 40px;
  }
`;

export const Item = styled.li`
  flex-basis: calc((100% - 10px) / 3);

  @media screen and (min-width: ${tablet}) {
    flex-basis: calc((100% - 30px) / 3);
  }

  @media screen and (min-width: ${desktop}) {
    flex-basis: calc((100% - 40px) / 3);
  }
`;
