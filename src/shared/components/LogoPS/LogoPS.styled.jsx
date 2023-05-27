import styled from '@emotion/styled';
import { desktop, tablet } from 'shared/constants/deviceSizes';

export const StyledA = styled.a`
  background-color: ${({ theme }) => theme.boxShadow};
  border-radius: 4px;

  & img {
    width: 100px;

    @media screen and (min-width: ${tablet}) {
      width: 110px;
    }

    @media screen and (min-width: ${desktop}) {
      width: 160px;
    }
  }
`;
