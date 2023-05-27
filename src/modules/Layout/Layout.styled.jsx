import styled from '@emotion/styled';
import { desktop, tablet } from 'shared/constants/deviceSizes';

const headerAndFooterHeightOnMobile = '172px';
const headerAndFooterHeightOnTablet = '172px';
const headerAndFooterHeightOnDesktop = '172px';

export const Wrap = styled.div`
  background-color: ${({ theme }) => theme.bgPrimary};
  background-image: url(${({ url }) => url});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 10%;
  background-size: cover;
  background-attachment: fixed;
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
