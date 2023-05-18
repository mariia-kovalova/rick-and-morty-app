import styled from '@emotion/styled';
import { desktop, tablet } from 'shared/constants/deviceSizes';

const headerAndFooterHeightOnMobile = '172px';
const headerAndFooterHeightOnTablet = '172px';
const headerAndFooterHeightOnDesktop = '172px';

export const Wrap = styled.div`
  background-color: ${({ theme }) => theme.bgPrimary};
  color: ${({ theme }) => theme.textPrimary};
`;

export const Main = styled.div`
  min-height: calc(100vh - ${headerAndFooterHeightOnMobile});

  @media screen and (min-width: ${tablet}) {
    min-height: calc(100vh - ${headerAndFooterHeightOnTablet});
  }
  @media screen and (min-width: ${desktop}) {
    min-height: calc(100vh - ${headerAndFooterHeightOnDesktop});
  }
`;
