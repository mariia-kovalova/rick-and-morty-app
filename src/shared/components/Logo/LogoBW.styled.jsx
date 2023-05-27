import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { tablet } from 'shared/constants/deviceSizes';

export const StyledLink = styled(Link)`
  transition: scale 250ms ${({ theme }) => theme.cubic};
  flex: 1;

  & img {
    width: 48px;

    @media screen and (min-width: ${tablet}) {
      width: 70px;
    }
  }

  &:hover {
    scale: 1.05;
  }
`;
