import styled from '@emotion/styled';
import { desktop, tablet } from 'shared/constants/deviceSizes';

export const StyledDiv = styled.div`
  border-radius: 6px;
  padding: 15px;

  width: 300px;

  @media screen and (min-width: ${tablet}) {
    width: 650px;
  }

  @media screen and (min-width: ${desktop}) {
    width: 900px;
  }

  border: 6px dashed ${({ theme }) => theme.paginationAccent};
  background-color: ${({ theme }) => theme.bgPrimaryTransparent};

  line-height: 1.5em;
  letter-spacing: 1px;
`;
