import styled from '@emotion/styled';
import { desktop, tablet } from 'shared/constants/deviceSizes';

export const Container = styled.div`
  width: 320px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: ${tablet}) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: ${desktop}) {
    width: 1280px;
  }
`;

