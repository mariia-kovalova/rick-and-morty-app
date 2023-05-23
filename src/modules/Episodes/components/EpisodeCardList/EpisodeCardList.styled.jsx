import styled from '@emotion/styled';
import { desktop, tablet } from 'shared/constants/deviceSizes';

export const List = styled.ul`
  padding-bottom: 20px;
  margin: 0 auto;

  display: flex;
  flex-wrap: wrap;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 16px;

  @media screen and (min-width: ${tablet}) {
    padding-top: 20px;
    padding-bottom: 40px;
    gap: 20px;
  }
`;

export const Item = styled.li`
  flex-basis: 100%;

  @media screen and (min-width: ${desktop}) {
    flex-basis: calc((100% - 20px) / 2);
  }
`;
