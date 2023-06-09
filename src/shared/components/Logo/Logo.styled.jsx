import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  transition: scale 250ms ${({ theme }) => theme.cubic};
  &:hover {
    scale: 1.05;
  }
`;
