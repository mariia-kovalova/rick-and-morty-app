import styled from '@emotion/styled';

const headerAndFooterHeight = '84px';

export const Wrap = styled.div`
  background-color: ${({ theme }) => theme.bgPrimary};
  color: ${({ theme }) => theme.textPrimary};
`;

export const Main = styled.div`
  min-height: calc(100vh - ${headerAndFooterHeight});
`;
